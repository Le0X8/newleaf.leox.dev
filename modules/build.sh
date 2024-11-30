#!/usr/bin/bash

cd modules/acnl-editor
npm i
npm run build
rm -rf ../../static/new-editor
mv build ../../static/new-editor

cd ../ACNLPatternTool
npm i
sed -i 's/  publicPath: "\/"/  publicPath: "\/pattern-editor\/"/' config/webpack.config.js
npm run build
rm -rf ../../static/pattern-editor
mv build ../../static/pattern-editor
