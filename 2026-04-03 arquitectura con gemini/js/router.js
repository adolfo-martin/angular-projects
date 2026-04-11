export const createRouter = (routes, containerId) => {
  const container = document.getElementById(containerId);

  const resolveRoute = async () => {
    const hash = window.location.hash.slice(1) || '/';
    console.log(hash)
    
    // Extraer parámetros dinámicos (ej: /pokedex/pikachu)
    let path = hash;
    let params = null;
    
    if (hash.startsWith('/pokedex/') && hash.length > 9) {
        path = '/pokedex/:name';
        console.log(path)
        params = hash.split('/')[2];
        console.log(params)
    }

    const route = routes[path] || routes['404'];
    
    container.innerHTML = '<div>Cargando...</div>';
    
    try {
        const view = await route(params);
        container.innerHTML = '';
        container.appendChild(view);
    } catch (error) {
        container.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
    }
  };

  window.addEventListener('hashchange', resolveRoute);
  window.addEventListener('load', resolveRoute);
};
