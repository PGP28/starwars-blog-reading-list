import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home';
import Navbar from './components/navbar';
import NotFound from './views/notfound';
import injectContext from './store/appContext';
import Footer from './components/footer';
import Personaje from './views/personaje';
import Planeta from './views/planeta';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                
                <Switch>

                    <Route exact path="/planeta/:id" component={Planeta} />
                    <Route exact path="/personaje/:id" component={Personaje} />
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                    
                </Switch>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);