//========//
// App.js //
//========//
import React from 'react'
import Layout from './app/Layout'

class App extends React.Component {

  state = {
    response: ''
  };

  componentDidMount() {

  }

  render() {
    return (
      <Layout />
    );
  }
}

export default App