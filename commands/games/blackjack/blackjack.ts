import { Message } from 'discord.js';

export default {
    name: 'blackjack',
    description: 'Lets start a game of blackjack',
    fn(message: Message) {
        message.channel.send('Blackjack started!');
    },
};
