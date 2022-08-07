import { IntentsBitField } from 'discord.js';
import { Client } from 'discordx';
import { env } from 'process';
import { initialiseCommands } from './handler';
import Args from './types/args';
import Command from './types/command';


// const IntentsBitField = require('discord.js')
// const Client = require('discordx')
// const env = require('process')
// const initialiseCommands = require('./handler')
// const Args = require('./types/args')
// const Command = require('./types/command')

let commands: Command[] = [];

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', async () => {
    commands = await initialiseCommands();
    console.log('>> Bot started');
});

client.on('messageCreate', async (message) => {
    const messageContent = message.content.toLowerCase();
    const regex = /(-\w{1,})/g;
    const flags = messageContent.match(regex);

    const args: Args = {
        content: messageContent
            .split(' ')
            .slice(2)
            .join(' ')
            .replace(regex, ''),
        channel: message.channel,
        flags: flags,
    };

    if (messageContent === 'bt reload') {
        commands = [];
        commands = await initialiseCommands();
    }

    commands.forEach((cmd) => {
        if (messageContent.includes(cmd.default.name)) {
            cmd.default.fn(args);
        }
    });
});

client.login(env.BOT_TOKEN!).catch((err: Error) => console.error(err));
