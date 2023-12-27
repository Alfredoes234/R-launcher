import { Router, Route } from 'preact-router';
import { render } from 'preact';
import "./global.css";
import App from './app';
import About from './about';




const Routes = () => (
    <Router>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
    </Router>
);

render(<Routes />, document.getElementById("root")!);
