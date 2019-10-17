import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Header from "./components/Header";
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import Posts from './pages/Posts';

export default function App() {
  return (
    <>
      <Header/>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts/:id" component={Posts} />
            </Switch>
        </Router>
      <Footer/>
    </>
  );
}
