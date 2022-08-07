import Args from '../../../types/args';

export default {
    name: 'ping',
    description: 'Sends a Pong back',
    fn(args: Args) {
        args.channel.send('Pongs');
    },
};
