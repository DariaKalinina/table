export enum Key{
  TEST = 'TEST'
}

export interface ITest {
  readonly type: Key.TEST;
};

export const testAction = (): ITest => ({
    type: Key.TEST
});



