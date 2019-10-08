import React, {Component} from 'react'

class Init extends Component{
  render () {
    return (
      <div>
        <img width="100%" height="100%" src="//edu-image.nosdn.127.net/920A554D123EB5B1F52D72EC9EFBED32.jpg?imageView&quality=100&thumbnail=286y161&type=webp" />
      </div>
    )
  }
}

class Layout extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
  }

  render(){
    return (
      <div>
        <p>common page</p>
        {this.state.loading ? <Init/> : this.props.children}
      </div>
    )
  }

  componentDidMount(){
    
  }
}

export default Layout