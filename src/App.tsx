import * as React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './routes';
import {PagesCore} from './components/elements';
import {Footer, Header} from './components/reactions';

const App: React.FC = () => {
    return(
        <Router>
            <Switch>
                <PagesCore.MainContainer>
                    <Header/>
                    {routes}
                    <Footer/>
                </PagesCore.MainContainer>
            </Switch>
        </Router>
    )
}

//Function converting your route array from routes.ts to <Route> components
const routes = Routes.map((route) => <Route exact={route.exact} path={route.url} component={route.component}/> );

export default App;