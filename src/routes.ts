import RouteType from './types/route';

//components import
import HomePage from './components/pages/home';
import About from './components/pages/about';
import ContactPage from './components/pages/contact';
import AgendaPage from './components/pages/agenda';

//Routes array, add as below
const Routes: RouteType[] = [
    {
        url: '/',
        exact: true,
        title: 'Home',
        component: HomePage
    },
    {
        url: '/o-nas',
        exact: true,
        title: 'O nas',
        component: About
    },
    {
        url: '/kontakt',
        exact: true,
        title: 'Kontakt',
        component: ContactPage
    },
    {
        url: '/program',
        exact: true,
        title: 'Program',
        component: AgendaPage
    }
]

export default Routes;