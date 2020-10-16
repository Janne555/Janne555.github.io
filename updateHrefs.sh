#!/bin/bash

version=$(grep -o -P '\?ver=\d+' index.html | head -1 | grep -o -P '\d+')
new_version=$(expr $version + 1)
find . -type f -print0 | xargs -0 sed -i -E "s/\?ver=$version/\?ver=$new_version/"