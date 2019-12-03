interface stringKeyObject {
  [key: string]: any;
}

type store = {
  context: object;
  reporters: any[];
  variables: stringKeyObject;
};

export default store;
