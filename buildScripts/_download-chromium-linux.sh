#!/bin/bash

# This is not used anymore. It’s here as a reference

# LINUX
################################################
CHROMIUM_ROOT="http://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux"
CHROMIUM_LATEST=`wget -q -O - "$CHROMIUM_ROOT/LAST_CHANGE"`
wget $CHROMIUM_ROOT/$CHROMIUM_LATEST/chrome-linux.zip
unzip chrome-linux.zip
rm chrome-linux.zip
mv chrome-linux build
