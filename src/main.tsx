//import { Router } from 'preact-iso/router';
import { render } from "preact";
import "./styles.css";
//import About from './about';
import App from './app';



//const Routes = () => (
//    <Router>
//        <App path="/" />
//        <About path="/about" />
//    </Router>
//);

render(<App />, document.getElementById("root")!);
