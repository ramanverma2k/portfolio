import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
