#!/bin/bash

# Function to run uninstall script in a directory
run_uninstall() {
  local dir=$1
  echo -e "\033[1;34m==================== Uninstalling $dir ====================\033[0m"
  cd "$dir" || { echo -e "\033[1;31mFailed to change directory to $dir\033[0m"; exit 1; }
  bash ./uninstall.sh
  cd - > /dev/null || { echo -e "\033[1;31mFailed to return to previous directory\033[0m"; exit 1; }
  echo -e "\033[1;34m==================== Finished $dir ====================\033[0m"
}

# Set trap to ensure we return to the original directory on exit
trap 'cd - > /dev/null' EXIT

# Run uninstall scripts in the specified directories
run_uninstall database
run_uninstall webapi
run_uninstall webapp
run_uninstall network
run_uninstall namespace