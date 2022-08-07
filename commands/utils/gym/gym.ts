import Args from '../../../types/args';
export default {
    name: 'gym',
    description: 'This is a template',
    fn(args: Args) {
        args.channel.send('gym');
    },
};

