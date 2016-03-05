#!/bin/bash
/usr/local/bin/docker run -it \
    -v `pwd`:/usr/src/app/ \
    -w /usr/src/app/ \
    --rm=true \
    nodejs /bin/bash
