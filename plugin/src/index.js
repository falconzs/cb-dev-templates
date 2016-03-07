
var package = require('../package.json'),
    DefineClass = require('define-class'),
    PluginAbstract = require('cb-framework').pluginAbstract,
    ExamplePlugin = DefineClass(PluginAbstract, {

        init: function() {
            this.settings = [{
                name: "exampleSetting1",
                label: "Some example description",
                type: "str",
                defaultValue: ""
            }];
            this.commands = {
                example: {
                    access: ['host', 'mod'],
                    handler: this.example,
                    description: 'An example command',
                    params: /(\d+)/
                }
            };
            this._super();
        },

        onStart: function() {
            this.api.sendNotice([package.name, '(', package.version, ') has been registered.'].join(''));
        },

        onTip: function(fromUser, toUser, amount, message) {
            this.api.sendNotice(fromUser.name + ' tipped ' + toUser.name + ' ' + amount + ' tokens with the message: ' + message);
        },

        onEnter: function(user) {
            this.api.sendNotice('User ' + user.name + ' has entered the room.');
        },

        onLeave: function(user) {
            this.api.sendNotice(user.name + ' has left the room.');
        },

        onMessage: function(user, message) {
            this.api.sendNotice(user.name + ' sent the following message:  ' + message.message);
        },

        example: function(fromUser, param1) {
            var backgroundColor = this.library.colors.light_purple,
                message = 'Example command called by ' + fromUser.name;
            this.api.sendNotice(message, '', backgroundColor);
        }
    });

module.exports = ExamplePlugin;
