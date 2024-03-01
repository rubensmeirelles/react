import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';

export const Photo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    
    const [photoInfo, setPhotoInfo] = useState<PhotoType>();

    useEffect(() => {
        if(params.id){
            loadPhoto(params.id)
        }
    },[])

    const loadPhoto = async (id: string) => {
        try{
            setLoading(true);
            let photoInfo = await api.getPhoto(id);
            setLoading(false);
            setPhotoInfo(photoInfo);
          }catch(e){
            setLoading(false);
            alert('Tente mais tarde :(')
          }   
    }

    const backToAlbumItem = () => {
        navigate(-1);
    }
    return(
        <div>
            {loading && <div>Carregando...</div>}
            {photoInfo && 
            <>
                 <button onClick={backToAlbumItem}>Voltar</button>
                 <h1>{photoInfo.title}</h1>
                <img src={photoInfo.url} alt={photoInfo.title} />
            </>
            }  
        </div>
    )
}