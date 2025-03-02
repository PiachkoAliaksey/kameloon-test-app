export type TTest = {
    id: number,
    name: string,
    siteId: number
    status: string
    type: string
}

export type TSites = {
    id: number
    url: string
}

export type TData = {
    id: number,
    name: string,
    site: string | undefined,
    status: string,
    type: string,
}

export type TDataSort = {
    name: string,
    site: string,
    status: string,
    type: string,
}

export type TListItem = {
    sortedData: TData[] | undefined,
    handleSortData: (field: string) => void,
    isLoading: boolean,
    handleReset: ()=>void
}

export type TInput = {
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    inputValue: string,
    sortedArrayLength: number|undefined
}

export type TBlockNoResult = {
    handleReset: () => void
}


