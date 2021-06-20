import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Pages
import EmployeeTypes from './pages/EmployeeTypes';
import Employees from './pages/Employees';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/employee-types">
            <EmployeeTypes />
          </Route>
          <Route path="/" exact>
            <Employees />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
