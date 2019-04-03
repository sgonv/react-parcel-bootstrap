import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Container>
        <Row>
          <Col>
            {this.state.msg}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
