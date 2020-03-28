import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import CreateAcademyPage from './pages/CreateAcademy';
import AcademiesPage from './pages/Academies';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <AcademiesPage />
        </Route>
        <Route path="/create">
          <CreateAcademyPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
