import React, {Component} from 'react';

//Imagens
import User from '../../assets/img/user.jpg'

//api
import api from '../../services/api';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    
    async componentDidMount(){
        const response = await api.get('/users');
        this.setState({users: response.data})
        console.log(response.data);
    }

    handleClick = id => {
        this.props.history.push(`/posts/${id}`);
    };

    render(){
        const {users} = this.state;
        return(
            <div className="container mt-5">
                <div className="row d-flex justify-content-between">
                    {users.map(item=> 
                        <div className="card col-md-5 mb-3" key={item.id} onClick={() => this.handleClick(item.id)}>
                            <div className="row no-gutters">
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <small className="text-muted">{item.username}</small>
                                        <p className="card-text">{item.email}</p>
                                        <p className="card-text">{item.phone}</p>
                                        <p className="card-text"><small className="text-muted">{item.website}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
// const { academic_register } = this.props.match.params;