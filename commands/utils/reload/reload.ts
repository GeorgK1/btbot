import { Message } from 'discord.js';
import { initialiseCommands } from '../../../handler';
import Args from '../../../types/args';

export default {
    name: 'reload',
    description: 'Reloads the commands',
    fn(args: Args) {
        args.channel.send('Reloading commands');
        initialiseCommands();
    },
};
