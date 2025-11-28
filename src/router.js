import {Home} from './views/Home';
import { Pokemon_List } from './views/pokemon_list';
import { NotFound } from './views/NotFound';
import { Region_List } from './views/region_list';
import { Pokemon_Detail } from './views/pokemon_details';


export function router(){
    const view = document.getElementById('view');
    const route = location.hash.slice(1).toLowerCase() || '/';

    const routes = {
        '/': Home,
        '/lista-pokemon': Pokemon_List,
        '/kanto': () => Region_List('kanto'),
        '/johto': () => Region_List('johto')
    };

    let screen;
    if (route.startsWith("/pokemon/")) {
        const id = route.split("/")[2];
        screen = () => Pokemon_Detail(id);
    } else {
        screen = routes[route] || NotFound;
    }

    view.innerHTML = screen();
}