import React, {Component} from 'react';
import './style.scss';

//Imagens
import Logo from '../../assets/img/logo.png'

export default class Footer extends Component{
    render(){
        return(
            <footer className="d-flex justify-content-center mt-5">
                <img src={Logo} />
            </footer>
        )
    }
} 