import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Button from './components/Button.js'

import './stylesheets/common.css'

class App extends Component{
  render(){
    return(
      <div>
        <Button/>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('container'))
