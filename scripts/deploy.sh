#!/bin/bash
set -e

if [ $CIRCLE_BRANCH == master ]; then
  export TARGET_PATH=$1
else
  export TARGET_PATH=$1/branch/$CIRCLE_BRANCH
fi

echo aws s3 sync ./build s3://$TARGET_PATH --acl public-read
