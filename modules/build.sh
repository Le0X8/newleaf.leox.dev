#!/usr/bin/bash

cd modules/acnl-editor
npm i
npm run build
mv build ../../static/new-editor

cd ../ACNLPatternTool
npm i
sed -i 's/  publicPath: "\/"/  publicPath: "\/pattern-editor\/"/' config/webpack.config.js
npm run build
mv build ../../static/pattern-editor
