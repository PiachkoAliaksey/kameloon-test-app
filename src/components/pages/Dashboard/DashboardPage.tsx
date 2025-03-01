import './styles.scss';
import Input from './Input/Input';
import ListItem from './ListItem/ListItem';
import { useState, useMemo, useCallback } from 'react';
import useDataFetch from '../../../hooks/useMockFetch';
import { TData } from '../../../types';

const statusPriority: Record<string, number> = {
  ONLINE: 1,
  PAUSED: 2,
  STOPPED: 3,
  DRAFT: 4,
};


const DashboardPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, dataTestWithSite] = useDataFetch();

  const [sort, setSort] = useState({ field: 'name', order: 'asc' })
  const [reset, setReset] = useState(false);


  const sortedArray = useMemo(() => {
    const { field, order } = sort

    if (reset) {
      return dataTestWithSite
    }

    if (inputValue) {
      return dataTestWithSite?.filter((item) => item.name.includes(inputValue))
    }

    if (field === 'status') {
      const ascSorting = <TData extends Record<string, any>>(item1: TData, item2: TData) => (statusPriority[item1[field]] - statusPriority[item2[field]])
      const descSorting = <TData extends Record<string, any>>(item1: TData, item2: TData) => (statusPriority[item2[field]] - statusPriority[item1[field]])
      const comparison = order === 'asc' ? ascSorting : descSorting
      return dataTestWithSite && dataTestWithSite.sort(comparison)
    }

    const ascSorting = <TData extends Record<string, any>>(item1: TData, item2: TData) => item1[field].localeCompare(item2[field])
    const comparison = order === 'asc' ? ascSorting : (item1: TData, item2: TData) => -ascSorting(item1, item2)

    return dataTestWithSite && dataTestWithSite.sort(comparison)
  }, [sort, dataTestWithSite, inputValue, reset, setInputValue])

  const handleSortData = useCallback((field: string) => {
    if (sort.field !== field) {
      setSort({ field, order: 'asc' })
      return;
    }

    setSort({ ...sort, order: sort.order === 'asc' ? 'desc' : 'asc' })
  }, [sort, dataTestWithSite, inputValue, reset, setInputValue])


  return (
    <div className='wrapper-dashboard'>
      <h2>Dashboard</h2>
      <Input sortedArray={sortedArray} inputValue={inputValue} setInputValue={setInputValue} />
      <ListItem setReset={setReset} isLoading={isLoading} handleSortData={handleSortData} sortedData={sortedArray} setInputValue={setInputValue} inputValue={inputValue} />
    </div>
  )
}

export default DashboardPage