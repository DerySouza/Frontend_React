import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            conta:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
             this.setState({conta:response.data})
        });
    }

    

      render() {
        return (
            <> 
                 <h1 className="text-center">BancoApp</h1>
                <div>
                 <div>

                 <form>
                  <label>Data</label>
                     <input type="text" value="" className="filtro"/>
                      <label>Name</label>
                     <input type="text" value="" className="filtro"/>
                     <button type="submit">Pesquisar</button>
                  </form>

                 </div>
                 
                 
                <table className="table table-striped">
                
                <thead>
                <tr>
                    <td>Conta</td>
                    <td>Data</td>
                    <td>Valor</td>
                    <td>Tipo de operação</td>
                    <td>Cliente</td>
                </tr>
                

                </thead>
                
               
                <tbody>
                 { this.state.conta.map(cont =>
                <tr key = {cont.id_conta}>
                    <td>{cont.id_conta}</td>
                    <td>{cont.datetrans}</td>
                    <td>{cont.valor}</td>
                    <td>{cont.servico}</td>
                    <td>{cont.nome_responsavel}</td>
                    
                </tr>
                 )}
                </tbody>
                </table>
               </div>
               </>
             
       )} 
}

export default UserComponent