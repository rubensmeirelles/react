import { Link, useNavigate } from "react-router-dom";
import { Photo } from "../types/Photo";

type Props = {
    data: Photo
}
export const PhotoItem = ({ data }: Props) => {

    return(
        <div>
            <Link to={`/photo/${data.id}`}>
                <img src={data.thumbnailUrl} alt={data.title} />
            </Link>
        </div>
    )
}