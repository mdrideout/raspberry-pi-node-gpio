# Note
In case anyone finds this - this is nowhere near ready to use as a demo.

# Raspberry Pi Nodejs GPIO Control
Ubuntu Core 18 ships with the ability to control the gpio of Raspberry Pi 3 devices.

## References
Set up Ubuntu Core on your raspberry pi [https://www.ubuntu.com/download/iot/raspberry-pi-2-3](https://www.ubuntu.com/download/iot/raspberry-pi-2-3)

# Installation
This will walk you through installing this snap on a Raspberry Pi running Ubuntu Core 18 with test commands to demonstrate that it is working correctly. 

_See here for [instructions to install Ubuntu Core 18 on Raspberry Pi](https://www.ubuntu.com/download/iot/raspberry-pi-2-3)._


## Test On A Multipass Virtual Machine
This can be helpful for testing on MacOS since it's not as straight forward as testing your snap on Ubuntu.

Create a Linux virtual machine for testing snaps
```
multipass launch -n testvm
```

Copy the .snap file to the virtual machine
```
multipass copy-files *.snap testvm:
```

Connect to the virtual machine
```
multipass shell testvm
```

Install the snap inside the virtual machine
```
sudo snap install --dangerous *.snap
```


Confirm the snap is installed by listing your installed snaps
```
snap list
```

Perform a curl command inside the virtual machine - this will return HTML code
```
curl localhost
```

Exit the virtual machine
```
exit
```