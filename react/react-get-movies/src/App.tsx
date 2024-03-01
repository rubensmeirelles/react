import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";
import "./App.css";
import "./Spinner-5.jpeg";

const App = () =>{
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);
/*
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setMovies(json);
      })
      .catch((e) => {
        setLoading(false);
        setMovies([]);
        console.error(e);
      })
  }
  */

  const loadMovies  = async () => {
    try{
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setMovies(json);
    }catch(e){
      setLoading(false);
      setMovies([]);
      console.error(e);
    }   
  }
    return (
    <div className="App">
      {/*<button onClick={loadMovies}>Carregar filmes</button>*/}
      <div className="loading">
        {loading &&
          <div className="load"> <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
          width="100px" height="100px" viewBox="0 0 40 40">
         <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
           s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
           c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
         <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
           C22.32,8.481,24.301,9.057,26.013,10.047z">
           <animateTransform attributeType="xml"
             attributeName="transform"
             type="rotate"
             from="0 20 20"
             to="360 20 20"
             dur="0.5s"
             repeatCount="indefinite"/>
           </path>
         </svg></div>
        }
        {!loading && movies.length > 0 &&
        <>
          <h1>Total de filmes: {movies.length}</h1>  
            <div className="movies">
              {movies.map((item, index) => (
                <div className="imgMovies" key={index}>
                  <img src={item.avatar} />
                  <div className="titulo">{item.titulo}</div>          
                </div>
              ))}
            </div>
         </>     
        }
          <div className="alert alert-danger">Algo de errado ocorreu. Tente novamente mais tarde!</div>
        </div>
    </div>
  );
}

export default App
