import './styles.scss';
import CardItem from './CardItem/CardItem';
import BlockNotResult from '../BlockNotResult/BlockNotResult';
import { TListItem } from '../../../../types';


const ListItem = ({ inputValue, setInputValue,sortedData,handleSortData,isLoading,setReset }: TListItem) => {
  const handleReset = () => {
    setReset(prev => !prev);
    setTimeout(() => setReset(prev => !prev), 0)
    setInputValue('');
  }


  return (
    <div className='list-item-test'>

      {sortedData && sortedData?.length > 0 && <div className='title-section'>
        <div  data-testid='Name' onClick={() => handleSortData('name')} className='name'>Name</div>
        <div onClick={() => handleSortData('type')} className='type'>Type</div>
        <div onClick={() => handleSortData('status')} className='status'>Status</div>
        <div onClick={() => handleSortData('site')} className='site'>Site</div>
      </div>}

      <div className='list-section'>
        {isLoading ? 'Loading...' : (sortedData && sortedData?.length > 0 ? sortedData.map((item) => (<CardItem key={item.id} {...item} />))
          : (<BlockNotResult handleReset={handleReset} />))}

      </div>
    </div>
  )
}

export default ListItem;