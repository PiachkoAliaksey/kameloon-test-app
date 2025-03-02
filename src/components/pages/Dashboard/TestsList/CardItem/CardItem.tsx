import { TData } from '../../../../../types';
import { Link } from 'react-router-dom';
import { mapColorCard, mapColorStatus } from '../../../../../constant';

import './styles.scss';


const CardItem = ({ id, site, status, name, type }: TData) => {
    return (
        <div role='listitem' className='card-item'>
            <div style={{ backgroundColor: mapColorCard[status] }} className='color-status-item'></div>
            <div className='name'>{name}</div>
            <div className='type'>{type}</div>
            <div style={{ color: mapColorStatus[status] }} className='status'>{status.toLowerCase()}</div>
            <div className='site'>{site}</div>
            <Link data-testid={`btn-${id}`} to={status === 'DRAFT' ? `/finalize/:${id}` : `/results/:${id}`} style={{ backgroundColor: status === 'DRAFT' ? '#7D7D7D' : '' }} className='btn-item'>{status === 'DRAFT' ? 'Finalize' : 'Results'}</Link>
        </div>
    )
}

export default CardItem;