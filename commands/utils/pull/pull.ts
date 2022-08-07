import Args from '../../../types/args';
import { exec } from 'child_process';

export default {
    name: 'bt pull',
    description: 'Pulls the latest bot changes',
    fn(args: Args) {
        const s = exec(
            'sh pull_updates.sh',
            (error, stdout, stderr) => {
                args.channel.send(stdout.toString());
            }
        );
    },
};
