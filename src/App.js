import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home';
import ReadingList from './pages/ReadingList';
import About from './pages/About';
import Projects from './pages/Projects'
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
          <Route path="/reading" component={ReadingList} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
