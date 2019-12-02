export default interface Action {
  execute(title: string, args: string[], outs: any[], context: any): Promise<string[]>;
}
