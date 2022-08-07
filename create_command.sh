#!/bin/bash
name_flag=''
type_flag=''

while getopts 'n:t:' flag; do
    case "$flag" in
        n) name_flag="${OPTARG}";;
        t) type_flag="${OPTARG}";;
      
    esac
done

echo $name_flag
echo $type_flag

if ["$name_flag" = '']; then
    echo "What is the name of the command"
    read name_flag
fi

if ["$type_flag" = '']; then
    echo "What is the type of the command"
    read type_flag
fi

mkdir ./commands/$type_flag/$name_flag

touch ./commands/$type_flag/$name_flag/$name_flag.ts

echo -e  "import Args from '../../../types/args';
export default {
    name: '$name_flag',
    description: 'This is a template',
    fn(args: Args) {
        args.channel.send('$name_flag');
    },
};
">> ./commands/$type_flag/$name_flag/$name_flag.ts