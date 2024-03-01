const App = () => {
  
  return (
    <div className="bg-gray-300 flex flex-col text-center justify-between md:flex-row md:items-center">
      <p className="text-black p-4 text-2xl font-bold">Texto da DIV</p>
      <input
      className="outline-none border-transparent bg-white p-3 rounded focus:ring-2 focus:ring-blue-600 shadow-md"
      type="text"
      placeholder="Digite aqui"
      />     
      <button className="px-5 py-2 m-5 text-black hover:text-red-300 
      border-solid border-2 border-light-blue-500 
      rounded-md bg-gray-100 hover:bg-black">Clique aqui</button>      
    </div>
  )
}

export default App
