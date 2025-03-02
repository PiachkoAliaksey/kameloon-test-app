import searchImg from '../../../../assets/search.svg';
import { TInput } from '../../../../types';

import './styles.scss';


const SearchInput = ({ setInputValue, inputValue ,sortedArrayLength}: TInput) => {

    return (
        <div className='wrapper-input'>
            <img src={searchImg} alt='search-img' />
            <input role='searchbox' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='input-search' type='text' placeholder='What test are you looking for?' />
            <span role='cell' className='input-tests'>{sortedArrayLength} tests</span>
        </div>
    )
}

export default SearchInput;
