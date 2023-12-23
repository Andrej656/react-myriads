import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Layout from './Layout.js';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Other routes */}
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

