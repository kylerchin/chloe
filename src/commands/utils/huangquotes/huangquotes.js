const Command = require('./../../command');
const { rand, prepare } = require('./../../../helpers');
var quotes = require('./../../../../modules/huangquoteslist');

class HuangQuotes extends Command {

    /**
     * Initializes the new Command Instance.
     */
    constructor() {
        super({
            desc: 'Gives you a quote from Mr. Huang',
            aliases: ['huang'],
        });
    }

    /**
     * Executes the Command logic.
     *
     * @param {Object} config
     */
    execute(config) {
        super.execute(config);

        const { msg } = config;

        let text = 'Insert Huang Quote';

        var randomHuangQuotePicker = Math.floor(Math.random() * quotes.length);
        console.log(randomHuangQuotePicker);

        text = quotes[randomHuangQuotePicker] + " - Mr. Huang";

        console.log(text);

        msg.channel.send(prepare(text));
    }

}

module.exports = new HuangQuotes();
