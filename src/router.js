import Index from './views/Index';
import Square from './views/Square';
import Subscribe from './views/Subscribe';
import Error404 from './views/Error404';

export default (router) => {
    router.map({
        'index': {
            name: 'index',
            component: Index
        },
        'square': {
            name: 'square',
            component: Square
        },
        'subscribe': {
            name: 'subscribe',
            component: Subscribe
        },
        '*': {
            name: '404',
            component: Error404
        }
    });
};
