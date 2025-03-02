import './styles.scss';
import { TBlockNoResult } from '../../../../types';


const NoResult = ({ handleReset }: TBlockNoResult) => {
    return (
        <div className='wrapper-not-found'>
            <h3 className='title-not-found'>Your search did not match any results.</h3>
            <div onClick={handleReset} className='btn-item'>Reset</div>
        </div>
    )
}

export default NoResult;