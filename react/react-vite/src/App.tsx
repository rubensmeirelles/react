import  * as C from './AppStyles';

const App = () =>{

  return (
    <C.Container bgColor="#333">
      <span>Texto do componente</span>
      <a href='' className='link'>Link</a>


      <C.Botao bg="#FF0000">Botão grande</C.Botao>
      <C.Botao bg="#00FF00" small>Botão menor</C.Botao>
    </C.Container>
    
  );

}

export default App
