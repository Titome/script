#!/bin/env python

import os
import zipfile
import begin

@begin.start
def run(arg):
    zipfile.ZipFile(arg).extractall(path=arg[:-4])
    os.remove(arg)
