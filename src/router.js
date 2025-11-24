import {Home} from './views/Home';


export function router(){
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';

    const routes = {
        '/': Home,
        '/list': List,
        '/region-list': Region_List
    };

    const screen = routes[route] || NotFound;
    view.innerHTML = screen();
}