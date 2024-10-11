#!/bin/bash

# Function to run uninstall script in a directory
run_uninstall() {
  local dir=$1
  cd "$dir" || { echo "Failed to change directory to $dir"; exit 1; }
  bash ./uninstall.sh
  cd - > /dev/null || { echo "Failed to return to previous directory"; exit 1; }
}

# Set trap to ensure we return to the original directory on exit
trap 'cd - > /dev/null' EXIT

# Run uninstall scripts in the specified directories
run_uninstall database
run_uninstall webapi
run_uninstall webapp
run_uninstall namespace
