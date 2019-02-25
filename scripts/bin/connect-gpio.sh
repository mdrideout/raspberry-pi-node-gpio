#!/bin/bash

# Makes GPIO connections for raspberry pi
echo "Starting GPIO connection process...";

# If "pi" snap is installed, make our connection
if $(snap list pi); then
    echo "pi package installed, connecting gpio"
    # snap connect raspberry-pi-node-gpio:gpio pi:bcm-gpio-4
fi

if ! $(snap list pi); then
    echo "pi package not installed. No GPIO to connect"
fi


echo "GPIO connection process complete."