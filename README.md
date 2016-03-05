# CB Dev Templates

## Requirements

* Node/NPM installed (Docker alternative available)
* Intermediate level of Javascript
* Knowledge of CB App/Bot development

## Getting Started

### Creating a App

1. Todo

### Creating a Bot

1. Clone / download the bot skeleton from this repository.
3. Add the plugins as ```dependencies``` in the ```package.json```.
4. Add the ```register``` line in ```index.js``` for each plugin.
5. ```npm install```
6. ```grunt webpack```
7. Copy the contents of `bundle.js` to CB and test your new Bot

### Creating a Plugin

1. Todo

## Docker

Warning: mileage may vary, provided as is, for convenience.

``` bash
docker build -t nodejs .
```

To get access to the Node environment (docker run):
``` bash
./docker-run.sh
```
