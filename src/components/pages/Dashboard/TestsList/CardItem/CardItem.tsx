import './styles.scss';
import { TData } from '../../../../../types';
import { Link } from 'react-router-dom';

const mapColorCard: Record<string, string> = {
    'PAUSED': '#C2C2FF',
    'DRAFT': '#8686FF',
    'STOPPED': '#E14165',
    'ONLINE': '#8686FF',
}

const mapColorStatus: Record<string, string> = {
    'PAUSED': '#FF8346',
    'DRAFT': '#5C5C5C',
    'STOPPED': '#FE4848',
    'ONLINE': '#1BDA9D',
}



const CardItem = ({ id, site, status, name, type }: TData) => {
    return (
        <div role='listitem' className='card-item'>
            <div style={{backgroundColor:mapColorCard[status]}} className='color-status-item'></div>
            <div className='name'>{name}</div>
            <div className='type'>{type}</div>
            <div style={{color:mapColorStatus[status]}} className='status'>{status.toLowerCase()}</div>
            <div className='site'>{site}</div>
            <Link data-testid={`btn-${id}`} to={status==='DRAFT'?`/finalize/:${id}`:`/results/:${id}`} style={{backgroundColor:status==='DRAFT'?'#7D7D7D':''}} className='btn-item'>{status==='DRAFT'?'Finalize':'Results'}</Link>
        </div>
    )
}

export default CardItem