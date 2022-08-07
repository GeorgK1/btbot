import { readdirSync } from 'fs';
import Command from './types/command';

const cmdFolder = './commands';

async function initialiseCommands() {
    const cmdPaths: string[] = [];
    console.log('Loading commands');
    const loadCmds = (currentFolder: string) => {
        readdirSync(currentFolder, { withFileTypes: true }).forEach(
            (folder) => {
                folder.isDirectory()
                    ? loadCmds(`${currentFolder}/${folder.name}`)
                    : cmdPaths.push(`${currentFolder}/${folder.name}`);
            }
        );
        return cmdPaths;
    };


    const loadedCmds = loadCmds(cmdFolder);
    console.log(cmdPaths);

    const importedCmds = Promise.all(
        loadedCmds.map(async (command) => {
            let cmnd: Command = await import(command);
            return cmnd;
        })
    );

    return importedCmds;
}

export { initialiseCommands };
