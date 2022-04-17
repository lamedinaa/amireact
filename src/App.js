import React, {useState} from 'react'; 
import api from './api'
import { useEffect } from 'react';

function App() {

  const [info, setInfo ] = useState({}); 
  const [dataloaded, setDataloaded] = useState(false);


  useEffect(
    () => {
      getInfo();
    },[]
  )

  const getInfo = () => {
  
    api.get("/api/info")
    .then( (response) => {
      console.log(response.data);

      const data = response.data; 
    
      setInfo(data); 
      setDataloaded(true);

    }).catch( (error) => {

      console.log(error,";cath error")

    })

  }

  return (
      <div>
          <h1>Prueba de servidor sencillo para probar autoscaling</h1>
          { !dataloaded?
            <h1>descargando ...</h1>:
            <div>
              <h2>{info.message}</h2>
              <h2>{info.message2}</h2>
            </div>
          }
      </div>
  );


  
}

export default App;
