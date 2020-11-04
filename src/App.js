import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import InicioContenido from './components/InicioContenido'
import QuienesSomos from './pages/QuienesSomos'
import Grupos from './pages/Grupos'
import Publicaciones from './pages/Publicaciones'
import Documentos from './pages/Documentos'
import Participantes from './pages/Participantes'

const App = ()=>{
  
  const [dataUsuario, setDataUsuario]=useState({
      correo: '',
      contraseña: ''
  })

  return (
  <BrowserRouter>
  <Switch>
      <Route  exact path="/inicio">
          <InicioContenido dataUsuario={dataUsuario} setDataUsuario={setDataUsuario}/>
      </Route>
      <Route  exact path="/quienessomos">
          <QuienesSomos dataUsuario={dataUsuario}/>
      </Route>
      <Route  exact path="/inicio/grupos">
          <Grupos dataUsuario={dataUsuario}/>
      </Route>
      <Route  exact path="/inicio/grupos/grupo/publicaciones">
          <Publicaciones dataUsuario={dataUsuario}/>
      </Route> 
      <Route  exact path="/inicio/grupos/grupo/documentos">
          <Documentos dataUsuario={dataUsuario}/>
      </Route>
      <Route  exact path="/inicio/grupos/grupo/participantes">
          <Participantes dataUsuario={dataUsuario}/>
      </Route>  
  </Switch>
</BrowserRouter>
)}

export default App;
