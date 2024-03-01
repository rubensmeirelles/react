import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api";
import { Photo } from "../types/Photo";
import { Album as AlbumType } from "../types/Album";
import { PhotoItem } from "../components/PhotoItem";
import "../App.css";

export const Album = () => {    
    const params = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [list, setPhotos] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumType>({id:0 , title:'', userId:0});

    useEffect(() => {
        if(params.id){
            loadAlbumInfo(params.id);
            loadPhotos(params.id);
        }
    }, [])

    const loadPhotos = async (id: string) => {
        try{
            setLoading(true);
            let json = await api.getPhotosFromAlbum(id);
            setLoading(false);
            setPhotos(json);
          }catch(e){
            setLoading(false);
            alert('Tente mais tarde :(')
          }   
    }

    const backToHome = () => {
        navigate('/');
    }    
   
    const loadAlbumInfo = async (id: string) => {
        try{
        setLoading(true);
        let albumInfo = await api.getAlbumById(id);
        setAlbumInfo(albumInfo);
        setLoading(false);
        
        }catch(e){
        setLoading(false);
        alert('Tente mais tarde :(')
        }   
    }
   
    return (
        <div>
            <button onClick={backToHome}>Voltar</button>
            {loading &&
                <div>Carregando...</div>
            }
            <h1>{albumInfo.title}</h1>
            {list.map((item, index) => (
                <div  className="showAlbums">
                <PhotoItem
                    key={index}
                    data={item}
                />
                </div>
            ))}
    </div>
    )
}