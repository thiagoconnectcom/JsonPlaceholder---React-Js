import React, { Component } from 'react';
import api from '../../services/api';

export default class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }
   
    async componentDidMount(){
        const { id } = this.props.match.params;
        const response = await api.get(`/posts?userId=${id}`);
        this.setState({posts: response.data});
        console.log(response.data);
    }

    render(){
        const {posts} = this.state;
        return(
            <>  
                <div className="container mt-5">
                    <div className="row d-flex justify-content-between">
                        {posts.map(item=> 
                            <div className="card col-md-5 mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.body}</p> 
                                </div>
                            </div>
                        )}
                    </div>
                </div> 
            </>
        )
    }
}