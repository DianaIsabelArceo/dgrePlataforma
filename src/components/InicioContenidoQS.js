import React from 'react' 
import './styles/InicioContenido.css'
import ImgContacto from '../images/contacto.png'

const InicioContenidoQS=()=>(
    <div className="content">
    <div className="card mb-2">
        <div className="card-body">
                    <h1 className="card-title display-4 font-weight-normal">¿Quienes Somos?</h1>
                    <p className="card-text font-weight-light">
                    La Universidad de Colima a través de la Dirección General de Recursos Educativos,
                    aporta a la institución y a la sociedad en general, servicios, recursos y modelos
                    de aplicación de las tecnologías de información y comunicación en apoyo a los procesos
                    educativos, a través sistemas informáticos, escenarios, recursos y metodologías 
                    educativas mediante un equipo multidisciplinario de profesionales que dan vida a 
                    las soluciones educativas basadas en tecnologías para su uso por la comunidad académica.
                    Te invitamos a explorar nuestro sitio web y conocer más acerca de nosotros.
                    </p>
        </div>   
    </div>
            <img className="imgContenidoQS" src={ImgContacto} alt="imgContenidoQS" width="100%" height="70%"/>
</div>


)
export default InicioContenidoQS
