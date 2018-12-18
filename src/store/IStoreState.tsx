export interface IStoreState {
    list: IItemStoreState[];
}

export interface IItemStoreState {
    amount: number,
    exist: boolean,
    id: number,
    importer: string,
    title: string,
    weight: number,
}