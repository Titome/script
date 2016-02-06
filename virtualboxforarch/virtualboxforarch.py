#!/bin/env python

import subprocess
import begin

@begin.start
def run():
    subprocess.run(['sudo', 'modprobe', 'vboxdrv'])
    subprocess.run(['sudo', 'modprobe', 'vboxnetflt'])
    subprocess.run(['sudo', 'modprobe', 'vboxnetadp'])
    subprocess.run(['virtualbox'])
