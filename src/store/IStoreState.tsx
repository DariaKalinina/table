export default interface IStoreState {
    readonly tableList: IListStoreState;
}

export interface IListStoreState {
    list: ReadonlyArray<IItemStoreState>;
}

export interface IItemStoreState {
    'id': number,
    'weight': number,
    'kkal': number,
    'title': string,
    'importer': string,
    'exist': boolean,
}