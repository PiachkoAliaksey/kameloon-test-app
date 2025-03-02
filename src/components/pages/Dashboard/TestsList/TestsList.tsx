import CardItem from './CardItem/CardItem';
import { TListItem } from '../../../../types';
import NoResult from '../NoResult/NoResult';

import './styles.scss';



const TestsList = ({ sortedData, handleSortData, isLoading, handleReset }: TListItem) => {

  return (
    <div className='list-item-test'>

      {sortedData && sortedData?.length > 0 && <div className='title-section'>
        <div data-testid='Name' onClick={() => handleSortData('name')} className='name'>Name</div>
        <div onClick={() => handleSortData('type')} className='type'>Type</div>
        <div onClick={() => handleSortData('status')} className='status'>Status</div>
        <div onClick={() => handleSortData('site')} className='site'>Site</div>
      </div>}

      <div className='list-section'>
        {isLoading ? 'Loading...' : (sortedData && sortedData?.length > 0 ? sortedData.map((item) => (<CardItem key={item.id} {...item} />))
          : (<NoResult handleReset={handleReset} />))}

      </div>
    </div>
  )
}

export default TestsList;