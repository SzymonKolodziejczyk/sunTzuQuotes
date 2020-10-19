import React from 'react';
import '../styles/styleComponents/main.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import HomePage from './homePage';
import Start from './start';
import Contact from './contact';
import Footer from './footer';
import Tasks from './tasks';

const App = () => (
  <Router basename="/">
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <main>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/start" render={() => <Start />} />
        <Route path="/contact" render={() => <Contact />} />
        <Route path="/tasks" render={() => <Tasks />} />
        <div className="opacity" />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </Router>
);

export default App;
