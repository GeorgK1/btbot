import { Message } from 'discord.js';
import * as deepl from 'deepl-node';
import Args from '../../../types/args';

const authKey = process.env.TRANSLATE_TOKEN!;
const translator = new deepl.Translator(authKey);

export default {
    name: 'bt tr',
    description: 'Translate a message you pass to it',
    async fn(args: Args) {

        if (args.flags?.at(2) === '-gb') {
            args.flags[1] = '-en-GB';
        }
        const sourceLang = args.flags![0].substring(
            1
        ) as deepl.SourceLanguageCode;

        const targetLang = args.flags![1].substring(
            1
        ) as deepl.TargetLanguageCode;

        try {
            const res = await translator.translateText(
                args.content,
                sourceLang,
                targetLang
            );
            args.channel.send(res.text);
        } catch (err) {
            console.error(err);
        }
    },
};
