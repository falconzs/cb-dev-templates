# CB Dev Templates

## Requirements

* Node/NPM installed (Docker alternative available)
* Intermediate level of Javascript
* Knowledge of CB App/Bot development

## Getting Started

### Creating a App

1. Todo

### Creating a Bot

1. Clone / [download](https://github.com/falconzs/cb-dev-templates/archive/master.zip) the bot skeleton from this repository.
2. Add `"cb-plugin-cleaner": "falconzs/cb-plugin-cleaner"` to the dependencies in `package.json`.
3. Run `npm install`
4. In `src/index.js`:
    1. Add the require line `ChatCleaner = require('cb-plugin-cleaner')`
    2. Register the cleaner with the bot `bot.register(new ChatCleaner());`
5. Run `grunt webpack`
6. Copy the contents of `bundle.js` to CB and test your new Bot

### Creating a Plugin

1. Todo

## Finding Plugins
It's down to the individual developer how they want to make their plugins available. The most convenient is through 
the [npmjs.com](https://www.npmjs.com/) repository system. This provides the ability to publish modules complete with 
searchable keywords and support for semver.

If a plugin is published to npmjs.com then make sure that it's tagged with the following keywords in the `package.js` 
so that bot developers can search for and discover your work.

``` json
"keywords": ["chaturbate", "bot", "plugin", "your", "keywords", "here"]
```

An alternative is to provide a git or [Github](https://github.com/) repository. This doesn't have the same benefits as 
the npm repository discussed above but doesn't require a separate account.

## Docker

Warning: mileage may vary, provided as is, for convenience.

``` bash
docker build -t nodejs .
```

To get access to the Node environment (docker run):
``` bash
./docker-run.sh
```
