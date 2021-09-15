import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MainLayout from './components/layouts/MainLayout';
import Chat from './components/Chat';

const App = () => {
  return (
    <MainLayout>
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>

          </Switch>
        </>
      </Router>
    </MainLayout>
  );
}


export default App;
