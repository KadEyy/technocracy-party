import RouteType from './types/route';

//components import
import HomePage from './components/pages/home';
import OPartii from './components/pages/opartii';

//Routes array, add as below
const Routes: RouteType[] = [
    {
        url: '/',
        exact: true,
        title: 'Home',
        component: HomePage
    },
    {
        url: '/o-partii',
        exact: true,
        title: 'O Partii',
        component: OPartii
    }
]

export default Routes;