#!/bin/bash

./gradlew ${1:-installDevMinSdkDevKernelDebug} --stacktrace && adb shell am start -n com.larkintuckerllc.hellodocumentpicker/host.exp.exponent.MainActivity
