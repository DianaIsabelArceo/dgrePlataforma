import React from 'react' 
import './styles/InicioContenido.css'
import ImgContenido from '../images/imagenContenido1.png'
import { Modal } from 'bootstrap'

class InicioContenido extends React.Component{
    constructor(props) {
        super(props);
}
        componentDidMount=()=>{
           this.props.setDataUsuario({
                correo:"",
                contraseña:""
            })
        }

        handleChange = (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        }
        
        mySubmitHandler = async(event) => {
            event.preventDefault();
             let correo = this.state.correo;
             this.props.setDataUsuario=correo;
             let contraseña = this.state.contraseña;             

                let res= await fetch("http://localhost:8000/api/usuarios/"+correo+"/"+contraseña)
                let dataUsuario= await res.json()
                //console.log(this.state)
                    try{
                       this.props.setDataUsuario({
                            dataUsuario                            
                    })
                    if(Object.entries(dataUsuario).length>0){
                        window.location.href="inicio/grupos"
                    }
                    else{    
                        document.getElementById('alert').style.display="block";
                    }
                    }
                    catch(error){
                    this.setState({
                        error
                    })
                    }   
        }
    render(){
        return(
        <div className="content">
            <div className="card mb-2">
                <div className="card-body" >
                            <h1 className="card-title display-4 font-weight-normal">Bienvenido a tu espacio de trabajo</h1>
                            <p className="card-text font-weight-light">
                            Los foros DGRE son espacios donde puedes trabajar colaborativamente
                            utilizando herramientas para compartir documentos, discutir en foros, 
                            hacer publicaciones, comentar, manejar archivos y muchas cosas mas...
                            </p>
                           
                            <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#modal_login">
        Iniciar Sesión</button>
                </div>   
            </div>
                    <img className="imgContenido" src={ImgContenido} alt="imgContenido" width="100%" height="100%"/>
                
                <div className="modal" tabIndex="-1" role="dialog" id="modal_login">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">INICIA SESION</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={this.mySubmitHandler} id="formLogin">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" onChange={this.handleChange} name="correo" id="correo" placeholder="Correo UCOL" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" onChange={this.handleChange} name="contraseña" id="contraseña" placeholder="Contraseña"/>
                                </div>
                            </div>
                        </form>
                        </div>
                        <p id="alert">La contraseña o correo son incorrectas</p>
                        <div className="modal-footer">
                            <button type="submit" form="formLogin"  className="btn btn-success btn-block">Entrar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
        )
    }
}
export default InicioContenido
