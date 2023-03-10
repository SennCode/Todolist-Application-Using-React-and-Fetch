import React, {useState} from 'react';

function App() {

  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const agregarTarea = e => {
    e.preventDefault()

    if(!tarea.trim()) {
      console.log('Elemento vacío')
      return
    }
    console.log(tarea)

    setTareas([
      ...tareas,
      {id: tareas, nombreTarea: tarea}
    ])
    
    setTarea('')
  }

  const eliminarTarea = id => {
  
    const arrayFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arrayFiltrado)
}

  return (
    <div className="container mt-5">
        <h1 className='text-center'>ToDo List</h1>
        <hr/>
        <div className='row'>
          <div className="col-8">
           <h4 className="text-center">Lista de tareas</h4>
           <ul className='list-group'>
            {
              tareas.length === 0 ? (
                <li className="list-group-item">No hay tareas</li>
              ) : (
              tareas.map(item => (

            <li className="list-group-item" key={item.id}>
              <span className='lead'>{item.nombreTarea}</span>
                <button 
                className="btn btn-danger btn-sm float-end mx-2"
                onClick={() => eliminarTarea(item.id)}
                >
                  Eliminar
                </button>
            </li>
              ))
            )
           }

           </ul>
          </div>
          <div className="col-4">
            <h4 className='text-center'>Formulario</h4>
            <form onSubmit={agregarTarea}>
              <input 
              type="text" 
              className="form-control mb-2" 
              placeholder='Ingrese Tarea'
              onChange={ (e) => setTarea(e.target.value)}
              value ={tarea} 
              />
              <button className='btn btn-primary btn-block' type='submit'>Agregar</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default App;
