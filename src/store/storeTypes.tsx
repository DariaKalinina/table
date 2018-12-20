export interface Store {
    productList: ProductListState[];
}

export interface ProductListState {
    amount: number,
    exist: boolean,
    id: number,
    importer: string,
    title: string,
    weight: number,
}
