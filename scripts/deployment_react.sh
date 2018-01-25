#!/bin/bash
npm run clean -s

npm i --only=dev --ignore-scripts

webpack -p

rm -rf node_modules
