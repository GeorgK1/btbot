import {
    DMChannel,
    NewsChannel,
    PartialDMChannel,
    PrivateThreadChannel,
    PublicThreadChannel,
    TextChannel,
    VoiceChannel,
} from 'discord.js';

export default interface Args {
    content: string;
    channel:
        | TextChannel
        | DMChannel
        | PartialDMChannel
        | NewsChannel
        | TextChannel
        | PublicThreadChannel
        | PrivateThreadChannel
        | VoiceChannel;
    flags: RegExpMatchArray | null;
}
module.exports