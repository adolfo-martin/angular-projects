import { PanelHomeComponent } from '../components/panel-home-component.js';
import { PanelLoginComponent } from '../components/panel-login-component.js';
import { PanelCategoriesComponent } from '../components/panel-categories-component.js';

const routes = [
    { path: '', component: PanelHomeComponent },
    { path: 'login', component: PanelLoginComponent },
    { path: 'categories', component: PanelCategoriesComponent },
    { path: 'products', component: 'PanelProducts' },
];

processRoute();

export function processRoute(routeAnchor) {
    // const params = new URLSearchParams(window.location.search);
    let path;
    let route = routes[0];
    if (routeAnchor) {
        const url = new URL(routeAnchor);
        const params = new URLSearchParams(url.search);
        path = params.get('path');
        route = routes.find(route => route.path === path) ?? routes[0];
    }

    if (route) {
        const routedClass = route.component;
        const panelContainer = document.querySelector('main.main-app');

        const panelLoaded = panelContainer.querySelector('*');
        if (panelLoaded) {
            panelContainer.removeChild(panelLoaded);
        }

        const nPanel = new routedClass();
        panelContainer.appendChild(nPanel);
    }
}


export function interceptRedirectionOnAnchor(e) {
    e.preventDefault();
    const path = e.target.href;
    processRoute(path);
}