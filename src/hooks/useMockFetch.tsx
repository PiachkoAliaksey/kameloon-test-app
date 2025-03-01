import { useEffect, useState } from 'react';
import { getTestsWithSite } from '../api';
import { TData } from '../types';

const useDataFetch = () => {
    const [data, setData] = useState<TData[]>();
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

       await getTestsWithSite().then((res) => {
            setData(res)
        }).finally(() => setIsLoading(false))

    }

    useEffect(() => {
        fetchData()
    }, [])

    return [isLoading, data] as [boolean, TData[] | undefined]
}

export default useDataFetch;