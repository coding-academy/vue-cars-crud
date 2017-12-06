import HomePage from './pages/HomePage.js'
import CarDetailsPage from './pages/CarDetailsPage.js'
import CarEditPage from './pages/CarEditPage.js'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/car/create',
        component: CarEditPage
    },    
    {
        path: '/car/:carId',
        component: CarDetailsPage
    },
    
    {
        path: '/car/:carId/edit',
        component: CarEditPage
    }  
];

export default routes;