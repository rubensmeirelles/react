import "../App.css";
import { useState, useEffect } from "react";
import { Album } from "../types/Album";
import { AlbumItem } from "../components/AlbumItem";
import { api } from "../api";

export const Home = () => { 
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAlbums()
  }, [])

  const loadAlbums = async () => {
    try{
      setLoading(true);
      let json = await api.getAllAlbums();
      setLoading(false);
      setAlbums(json);
    }catch(e){
      setLoading(false);
      alert('Tente mais tarde :(')
    }   
  }

   return (    
    <div>
      {loading &&
        <div>Carregando...</div>
        }
        {!loading &&
          <>
            <div className="albums">
              <ul>
                {albums.map((item, index) => (              
                   <AlbumItem 
                    key={index}
                    id={item.id}
                    title={item.title}
                  />
                ))}
              </ul>
           </div>
          </>
        }
    </div>
  )
}


