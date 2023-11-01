import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductosClass from './components/ProductosClass'
import ClicksContador from './components/ClicksContador'

function App() {

  const [state,setState] = useState({
    id:"",
    nombre: "",
    precio : 0
  })


  const [change,setChange] = useState (false)
  const [product , setProduct] = useState("")
 


  const cambiador = () =>{
    setChange(!change)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Que son los Hooks?</h1>

      <ClicksContador/>
      
      <button
        onClick={cambiador}
      >
        {change ? "Desactivado" : "Activado"}
      </button>

      <input
        type='text'
        placeholder='Ingresar el producto'
        value={product}
        onChange={e=>setProduct(e.target.value)}
      />

        <h3>ID: {state.id}</h3>
        <h3>Nombre : {state.nombre}</h3>
        <h3>Precio: {state.precio}</h3>
      <ProductosClass/>
    </>
  )
}

export default App
