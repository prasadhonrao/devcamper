#!/bin/bash

# Function to run install scripts in specified directories
run_install() {
  local dir=$1
  echo -e "\033[1;34m==================== Installing $dir ====================\033[0m"
  cd "$dir" || { echo -e "\033[1;31mFailed to change directory to $dir\033[0m"; exit 1; }
  bash ./install.sh
  cd - > /dev/null || { echo -e "\033[1;31mFailed to return to previous directory\033[0m"; exit 1; }
  echo -e "\033[1;34m==================== Finished $dir ====================\033[0m"
}

# Set trap to ensure we return to the original directory on exit
trap 'cd - > /dev/null' EXIT

# Run install scripts in the specified directories
run_install namespace
run_install database
run_install webapi
run_install webapp
run_install network