import { EmbedBuilder } from 'discord.js';
import { initialiseCommands } from '../../../handler';
import Args from '../../../types/args';
import Command from '../../../types/command';
import Field from '../../../types/field';

export default {
    name: 'bt help',
    description: 'Sends a list of commands and their descriptions',
    async fn(args: Args) {
        const commands = await initialiseCommands();
        const embed = new EmbedBuilder().setTitle('Help');

        commands.map((command: Command): void => {
            const field: Field = {
                title: command.default.name,
                description: command.default.description,
            };
            embed.addFields({
                name: field.title,
                value: field.description,
            });
        });

        args.channel.send({embeds : [embed]});
    },
};
