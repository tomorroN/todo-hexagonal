#!/bin/bash

RUN_MIGRATIONS=$1

if [ "$RUN_MIGRATIONS" ]; then
    echo "RUNNING MIGRATIONS";
    npm run typeorm:migration:run
fi

echo "START SERVER";
npm run start:prod