#!/bin/bash

# Makes GPIO connections for raspberry pi
echo "Starting GPIO connection process...";

snap connect raspberry-pi-node-gpio:gpio pi:bcm-gpio-4

echo "GPIO connection process complete."