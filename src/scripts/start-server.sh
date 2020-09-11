#!/usr/bin/env bash

ENVIRONMENT=$1

ENV_FILE=environments/$ENVIRONMENT.env
if [ -f "$ENV_FILE" ]; then
    echo "*** Use ENVIRONMENT: $ENVIRONMENT ***"
else
    echo "Invalid environment: '$ENVIRONMENT', file '$ENV_FILE' does not exist"
    exit 1
fi

SERVER_ENVIRONMENT=local \
node_modules/.bin/ts-node-dev --respawn -r dotenv/config src/main.ts dotenv_config_path=$ENV_FILE