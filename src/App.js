import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          <Header />
        </header>

        <main>
          <Route exact path="/" component={Home} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
