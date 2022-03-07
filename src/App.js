import Login from './components/Login.jsx';
import Funcionario from './components/funcionario/index.jsx';
import Administrador from './components/administrador/Index.jsx'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/funcionario" exact component={Funcionario}></Route>
          <Route patch="/administrador" exact component={Administrador}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
