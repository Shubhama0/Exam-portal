import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/Result/Result";
import About from "./components/about/About";

import Contact from "./components/contact/Contact";
import faq from "./components/faq/faq";
import Home from "./components/home/Home";
import HomeCard from "./components/home/Homein/HomeCard";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Details from "./components/DetailPages/Details";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/faq" component={faq} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Details/:id" component={Details} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
