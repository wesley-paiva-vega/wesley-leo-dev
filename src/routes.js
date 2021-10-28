import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Portifolio from './Portifolio'
import Contato from './Contato'
import StateReact from './StateReact'
import SetTimeOutExemple from './setTimeExemple'
import ReactSlider from './Slider'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Home} exact path="/(|home)" />
                <Route component={About} exact path="/about" />
                <Route component={About} exact path="/about" />
                <Route component={Portifolio} exact path="/portifolio" />
                <Route component={Contato} exact path="/contato" />
                <Route component={StateReact} exact path="/state-react" />
                <Route component={SetTimeOutExemple} exact path="/set-time-out" />
                <Route component={ReactSlider} exact path="/react-slider" />
                
            </Switch>
        </Router>
    )
}