import Login from './components/Login.jsx';
import Registrarse from './components/Registrarse.jsx';
import Funcionario from './components/funcionario/index.jsx'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/registrarse" exact component={Registrarse}></Route>
          <Route path="/funcionario" exact component={Funcionario}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
