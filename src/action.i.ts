export interface Action {
  execute(args: string[], context: object): Promise<any>;
}
