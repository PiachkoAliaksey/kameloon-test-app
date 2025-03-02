import { useState, useMemo, useCallback } from 'react';

import SearchInput from './SearchInput/SearchInput';
import TestsList from './TestsList/TestsList';
import useDataFetch from '../../../hooks/useMockFetch';
import { TData } from '../../../types';

import './styles.scss';

const statusPriority: Record<string, number> = {
  ONLINE: 1,
  PAUSED: 2,
  STOPPED: 3,
  DRAFT: 4,
};


const DashboardPage = () => {
  const [isLoading, dataTestWithSite] = useDataFetch();
  const [inputValue, setInputValue] = useState('');
  const [sort, setSort] = useState({ field: 'name', order: 'asc' })


  const sortedArray = useMemo(() => {
    const { field, order } = sort

    const dataTests = inputValue ? dataTestWithSite?.filter((item) => item.name.includes(inputValue)) : dataTestWithSite

    const ascSorting = field === 'status' ? <TData extends Record<string, any>>(item1: TData, item2: TData) => (statusPriority[item1[field]] - statusPriority[item2[field]]) : <TData extends Record<string, any>>(item1: TData, item2: TData) => item1[field].localeCompare(item2[field])
    const comparison = order === 'asc' ? ascSorting : (item1: TData, item2: TData) => -ascSorting(item1, item2)

    return dataTests && dataTests.sort(comparison)
  }, [sort, dataTestWithSite, inputValue, setInputValue])

  const handleSortData = useCallback((field: string) => {
    if (sort.field !== field) {
      setSort({ field, order: 'asc' })
      return;
    }

    setSort({ ...sort, order: sort.order === 'asc' ? 'desc' : 'asc' })
  }, [sort, dataTestWithSite, inputValue, setInputValue])

  const handleReset = () => {
    setInputValue('');
  }


  return (
    <div className='wrapper-dashboard'>
      <h2>Dashboard</h2>
      <SearchInput sortedArrayLength={sortedArray?.length} inputValue={inputValue} setInputValue={setInputValue} />
      <TestsList handleReset={handleReset} isLoading={isLoading} handleSortData={handleSortData} sortedData={sortedArray} />
    </div>
  )
}

export default DashboardPage;