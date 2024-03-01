import { Link } from 'react-router-dom';

type Props = {
    id: number;
    title: string;
}
export const AlbumItem = ({ id, title }: Props) => {
    
    return(
        <li>
            <Link to={`/album/${id}`}>{title}</Link>  
        </li>   
    )
}