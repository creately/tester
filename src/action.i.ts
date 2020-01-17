export default interface Action {
  execute(args: string[], context: any, event: MouseEvent): Promise<string[]>;
}
