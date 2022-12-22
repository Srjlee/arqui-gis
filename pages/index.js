import {useEffect, useState} from 'react'
import axios from 'axios'


import s from '../styles/Home.module.css'

export default function Archivo() {
  const [ruta, setRuta] = useState("")
  const [nombre, setNombre] = useState("")


  const getRuta = (e)=> {
    e.preventDefault()
    setRuta(e.target.value)
  }

  const sendRoute = async (e) =>{
    if (!e) return console.log("no hay archivo")    
    try {
      
      const archivo= await axios (`/api/archivo?a=${e}`)
      console.log(archivo)
      setNombre(archivo.data)         
    } catch (error) {
      console.log(error)
    }
    
  }
  

  return (
    <div  className={s.container}>
      <form>
        
        <input type="file" onChange={getRuta}></input>
        <button onClick={()=>sendRoute(ruta)}>Poner nombre arhivo</button>
      </form>
      <p>esta es la ruta elegida: {ruta}</p>

      <p>{nombre}</p>

    </div>
  )
}
