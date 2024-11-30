#!/usr/bin/bash

cd modules/acnl-editor
npm i
npm run build
mv build ../../static/editor