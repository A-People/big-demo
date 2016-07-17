import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import LeftNav from './LeftNav.js'

class Button extends Component{
  getStyles(){
    return{
      root:{
        display:'block',
        width:'50px',
        height:'50px'
      }
    }
  }

  handleClick(){
    this.refs.leftnav.handleToggle()
  }

  render(){
    const styles=this.getStyles();

    return(
      <div>
        <button style={styles.root} onClick={this.handleClick.bind(this)}>menu</button>
        <LeftNav ref='leftnav'/>
      </div>
    )
  }
}

export default Button
