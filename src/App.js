import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';


import Layout from './components/UI/Layout';
import FifthPage from './pages/FifthPage';
import FourthPage from './pages/FourthPage';
import MainPage from './pages/MainPage';
import SecondePage from './pages/SecondePage';
import TablePage from './pages/TablePage';
import ThirdPage from './pages/ThirdPage';

function App() {
  return (
    <Layout>
      <Router>
      <Switch>
        <Route path='/' exact>
            <Redirect to='MainPage' />
        </Route>
        <Route path="/MainPage" exact={true}>
            <MainPage />
        </Route>
        <Route path='/SecondeYear' >
          <SecondePage/>
          </Route>
          <Route path='/ThirdYear' >
          <ThirdPage/>
          </Route>
          <Route path='/FourthYear' >
          <FourthPage/>
          </Route>
          <Route path='/FifthYear' >
          <FifthPage/>
          </Route>
          <Route path='/TablePage'>
            <TablePage/>
         </Route>   
      </Switch>
      </Router>
     
    </Layout>
   
    
  );

}

export default App;
