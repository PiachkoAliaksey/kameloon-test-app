import './styles.scss'

import searchImg from '../../../../assets/search.svg';
import { TInput } from '../../../../types';


const Input = ({ setInputValue, inputValue ,sortedArray}: TInput) => {

    return (
        <div className='wrapper-input'>
            <img src={searchImg} alt='search-img' />
            <input role='searchbox' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='input-search' type='text' placeholder='What test are you looking for?' />
            <span role='cell' className='input-tests'>{sortedArray?.length} tests</span>
        </div>
    )
}

export default Input