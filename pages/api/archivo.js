const path = require('path');
const multer = require ('multer')

export default function handler(req, res) {
  let { a} = req.query

  try {
    let copiar = fs.rename (`${a}`, `../../public/${path.basename(a)}`, (err)=> {
      if(err) {
        throw(err)
      }
      console.log("Archivo movido ok")
    })
    console.log(nombreArchivo)
    res.status(200).send({ nombreArchivo })
    
  } catch (error) {
    console.log(error.message)
  }
  
}
