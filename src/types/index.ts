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
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    sortedData: TData[] | undefined,
    handleSortData: (field: string) => void,
    isLoading: boolean,
    setReset: React.Dispatch<React.SetStateAction<boolean>>
}

export type TInput = {
    setInputValue: React.Dispatch<React.SetStateAction<string>>,
    inputValue: string,
    sortedArray: TData[] | undefined
}


