import './App.css';
import Layout from 'components/UI/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home"

export default function App() {
  return(
    <Router>
      <Layout>
        <Switch>
          <Route component={Home} path={"/"} />
        </Switch>
      </Layout>
    </Router>
  )
}


