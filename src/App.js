import React from 'react';
import './App.css';
import Tasks from './components/Tasks/Tasks';
import Posts from './components/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter ,Route  } from 'react-router-dom';

export default class App extends React.Component{
    state = {
        tasks : [
            {id: Date.now(), text:''}
        ]
    }

    render(){
        return ( 
            <BrowserRouter>
                <Navbar/>
                <div className = "App" >
                    <Route exact path="/" component={Tasks}/>
                   
                    <Route path="/posts" component={Posts}/>
                
                </div>
            </BrowserRouter>
        );
    }
}
