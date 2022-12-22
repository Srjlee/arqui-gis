import {useState} from 'react'
import s from '../styles/Home.module.css'

export default function index() {
  const [ruta, setRuta] = useState("")
  const getRuta = (e)=> {
    e.preventDefault()
    setRuta(e.target.value)
  }

  return (
    <div  className={s.container}>
      <form>
        
        <input type="file" onChange={getRuta}></input>
      </form>
      <p>esta es la ruta elegida: {ruta}</p>
    </div>
  )
}
