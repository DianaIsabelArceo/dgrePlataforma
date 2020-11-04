import React from 'react'
import NavegacionVertical from '../components/NavegacionVertical'
import GruposLista from '../components/GruposLista'
import BotonApuntarme from '../components/BotonApuntarme'

class Grupos extends React.Component{
    state = {
        datagrupos:[]
    }
    async componentDidMount(){
        await this.fetchGrupos()
    }
    fetchGrupos =async()=>{
        console.log(this.props.dataUsuario)
        try{
            let res= await fetch('http://localhost:8000/api/usuarios/')
            let datagrupos = await res.json()
            this.setState({    
                datagrupos,
                loading:false
            })
            console.log(datagrupos)
        }
        catch(error){
            this.setState({    
                loading:false,
                error
            })

        }
    }

    render(){
        return(
                <React.Fragment>
                    <NavegacionVertical/>
                    <GruposLista

                    />
                    <BotonApuntarme/>
                </React.Fragment>

        )
    }
}
    
export default Grupos
