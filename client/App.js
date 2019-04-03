import React, { Component } from 'react'

import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: '',
    }
  }

  async componentDidMount() {
    const resp = await axios.get('/api/hello/')
    this.setState({
      msg: resp.data,
    })
  }

  render() {
    return (
      <div>
        {this.state.msg}
      </div>
    )
  }
}

export default App
