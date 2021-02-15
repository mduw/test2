import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './Form';



const App = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Form/>
          </Route>
        </Switch>

    </BrowserRouter>
  );
  
  export default App;