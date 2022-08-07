export default interface Command {
    default: { name: string; description: string; fn: Function };
}
