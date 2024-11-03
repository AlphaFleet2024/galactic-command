import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';
import ShipList from './components/ShipList';
import Game from './components/Game';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/ships" component={ShipList} />
                    <Route path="/game" component={Game} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
      
