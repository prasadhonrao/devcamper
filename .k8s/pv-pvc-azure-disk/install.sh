#!/bin/bash

# Function to run install script in a directory
run_install() {
  local dir=$1
  cd "$dir" || { echo "Failed to change directory to $dir"; exit 1; }
  bash ./install.sh
  cd - > /dev/null || { echo "Failed to return to previous directory"; exit 1; }
}

# Set trap to ensure we return to the original directory on exit
trap 'cd - > /dev/null' EXIT

# Run install scripts in the specified directories
run_install namespace
run_install database
run_install webapi
run_install webapp
