import React,{Component} from 'react'
import ReactDOM from 'react-dom'

class LeftNav extends Component{
  constructor(){
    super()
    this.state={
      show:false
    }
  }

  handleToggle(){
    this.setState({
      show:!this.state.show
    })
  }

  render(){
    let showBar=this.state.show?'0':'-200px'
    let showCover=this.state.show?'block':'none'
    const styles={
      root:{
        width:'200px',
        backgroundColor:'#2196F3',
        paddingTop:'30px',
        position: 'absolute',
        top:'0',
        bottom:'0',
        transition:'margin-left 0.5s',
        marginLeft:showBar,
      },
      items:{
        textAlign:'center',
        color:'#fff',
        padding:'15px',
        display:'block',
        textDecoration: 'none',
      },
      cover:{
        position: 'absolute',
        top:'0',
        bottom:'0',
        left:'0',
        right:'0',
        backgroundColor:'#333',
        opacity:'0.2',
        display:showCover
      }
    }
    return(
      <div>
        <div style={styles.cover} onClick={this.handleToggle.bind(this)}></div>
        <div style={styles.root}>
          <a href="#" style={styles.items}>HOME</a>
          <a href="#" style={styles.items}>BLOG</a>
          <a href="#" style={styles.items}>ABOUT</a>
        </div>
      </div>
    )
  }
}

export default LeftNav
