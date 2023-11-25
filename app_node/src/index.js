const express = require('express')  // importamos la librería
const app = express();               // generamos una instancia express


// RUTAS
app.get('/', function (req, res) {
  res.send('Hello World')
})

const ruta = '/prestador/:id'
app.get(ruta, obtenerPrestadoresPorId, function (req, res) {

  res.send(userid)
})




  
// METODOS
const obtenerPrestadoresPorId = function(req, res) {
    const userid = req.params.id  // obtenemos el id del prestador
    if (isNaN(userid)) {
      res.status(404)
      res.send('Por favor, ingresar un id correcto.')
      return new Error('Por favor, ingresar un id correcto.')
    }
    const prestadorBuscado = prestadores.find((prestador) => prestador.id === userid) // buscamos el prestador por id(prestador => prestador.id === userid)
    res.status(200)
    res.json(prestadorBuscado)

  return [
    {
      id: prestadorBuscado.id,
      nombre: prestadorBuscado.nombre,
      apellidos: prestadorBuscado.apellidos, 
      
     }
  ]

}



///LISTA DE PRESTADORES///

const prestadores = [
  {
    id: 1,
    nombre: "Carlos",
    apellidos: "Gonzalez",
    email: "CGonzalez@gmail.com",
    password: "12345",  
    especialidades: [
      "Gasista", "Electricista", "Carpintero", "Plomero", 
    ],
    horario: "L-V 9:00-18:00",
    tarifa: 2000, 

  },

  {
    id: 2,
    nombre: 'Cristian',
    apellidos: 'Fernandez',
    email: 'CFernandez@gmail.com',
    password: 'abc345',  
    especialidades: [
      'Electricista', 'Carpintero', 'Plomero', 
    ],
    horario: 'L-V 9:00-18:00',
    tarifa: 2000,
  
  },

  {
    id: 3,
    nombre: 'Raul',
    apellidos: 'Vazquez',
    email: 'RauliVazquez@gmail.com',
    password: 'rr123',  
    especialidades: [
      'Electricista', 'Plomero', 
    ],
    horario: 'L-S 9:00-18:00',
    tarifa: 2000,
  
  },
  
]  














app.listen(4200, (req, res) => {
  console.log('Servidor iniciado!!!')
})















