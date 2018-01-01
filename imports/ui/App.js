import React,{Component} from 'react'

import AccountsUIWrapper from './AccountsUIWrapper'

import Login from './components/login'

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <Login />
            </div>
        )
    }
}