#!/bin/bash

# Exit on error
set -e

echo "Setting up Supernova documentation submodule..."

# Create the docs directory if it doesn't exist
mkdir -p docs

# Check if the submodule exists
if [ -d "docs/nova-docs/.git" ]; then
  echo "Updating existing documentation submodule..."
  cd docs/nova-docs
  git fetch --all
  git checkout main
  git pull origin main
  cd ../..
else
  echo "Adding documentation as a submodule..."
  # Assuming the repository is at github.com/supernova/nova-docs
  git submodule add https://github.com/mjohnson518/supernova/nova-docs.git docs/nova-docs
  git submodule update --init --recursive
fi

echo "Documentation setup complete!" 