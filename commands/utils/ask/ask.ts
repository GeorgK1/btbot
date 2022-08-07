import { Message } from 'discord.js';
import wiki from 'wikipedia';
import Args from '../../../types/args';

export default {
    name: 'bt whats',
    description: 'The term you enter will get sent to wikipedia api',
    async fn(args: Args) {
        try {
            const page = await wiki.page(args.content);
            const pageIntro = await page.intro();
            const pageSummary = await page.summary();
            
            if (args.flags?.includes('-l')) {
                args.channel.send(pageIntro.slice(0, 2000));
            } else {
                args.channel.send(pageSummary.description);
            }
        } catch (err) {
            args.channel.send('Didnt find anything');
        }
    },
};
