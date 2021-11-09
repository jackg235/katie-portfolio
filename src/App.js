import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
    return (
        <Router>
            <Route exact path = '/' render={() => <Home /> }></Route>
        </Router>
    );
}

export default App;