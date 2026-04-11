import { createRouter } from './router.js';
import { store } from './state/store.js';
import { validate } from './utils/validation.js';
import { PokemonService } from './services/pokemonService.js';

// --- Vistas (Podrían estar en /js/components/) ---

const Pokedex = async () => {
    const el = document.createElement('div');
    el.innerHTML = `
        <h1>Pokédex</h1>
        <div class="search-container">
            <input type="text" id="pokemon-search" class="search-input" placeholder="Buscar pokemon por nombre...">
        </div>
        <div class="pokemon-grid"></div>
    `;
    
    const grid = el.querySelector('.pokemon-grid');
    const searchInput = el.querySelector('#pokemon-search');

    // 1. Cargamos una lista mayor (los primeros 150)
    const data = await PokemonService.getAll(150);
    const allPokemons = data.results;

    // 2. Función para renderizar una lista de pokemons
    const renderList = (list) => {
        grid.innerHTML = list.length > 0 ? '' : '<p>No se encontraron pokemons.</p>';
        list.forEach(pokemon => {
            const id = pokemon.url.split('/').filter(Boolean).pop();
            const card = document.createElement('a');
            card.href = `#/pokedex/${pokemon.name}`;
            card.className = 'pokemon-card';
            card.innerHTML = `
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${pokemon.name}">
                <p>#${id} ${pokemon.name.toUpperCase()}</p>
            `;
            grid.appendChild(card);
        });
    };

    // 3. Renderizado inicial
    renderList(allPokemons);

    // 4. Evento de búsqueda (Filtrado)
    searchInput.oninput = (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allPokemons.filter(p => p.name.includes(term));
        renderList(filtered);
    };

    return el;
};

const PokemonDetail = async (name) => {
    const pokemon = await PokemonService.getOne(name);
    const el = document.createElement('div');
    el.className = 'pokemon-detail';
    el.innerHTML = `
        <a href="#/pokedex">← Volver a la lista</a>
        <h1>${pokemon.name.toUpperCase()}</h1>
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" style="width: 200px;">
        <div>
            ${pokemon.types.map(t => `<span class="type-badge">${t.type.name}</span>`).join('')}
        </div>
        <h3>Estadísticas</h3>
        <ul>
            ${pokemon.stats.map(s => `<li>${s.stat.name}: ${s.base_stat}</li>`).join('')}
        </ul>
    `;
    return el;
};

const Profile = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <h1>Tu Perfil</h1>
    <form id="profile-form">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" name="name" value="${store.getState().user || ''}" placeholder="Escribe tu nombre">
        <span class="error" id="name-error"></span>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="text" name="email" placeholder="ejemplo@correo.com">
        <span class="error" id="email-error"></span>
      </div>
      <button type="submit">Guardar Cambios</button>
    </form>
    <p id="success-msg" style="color: green; display: none;">¡Perfil actualizado!</p>
  `;

  const form = el.querySelector('#profile-form');
  
  form.onsubmit = (e) => {
    e.preventDefault();
    
    // 1. Recoger datos con FormData
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 2. Definir reglas de validación
    const rules = {
      name: { required: true, minLength: 3 },
      email: { 
        required: true, 
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        message: 'Email no válido' 
      }
    };

    // 3. Validar
    const errors = validate(data, rules);
    
    // Limpiar errores previos
    el.querySelectorAll('.error').forEach(span => span.textContent = '');

    if (Object.keys(errors).length > 0) {
      // 4. Mostrar errores si los hay
      for (const field in errors) {
        el.querySelector(`#${field}-error`).textContent = errors[field];
      }
    } else {
      // 5. Si todo está bien, actualizar el Store y mostrar éxito
      store.setState({ user: data.name });
      el.querySelector('#success-msg').style.display = 'block';
      setTimeout(() => {
        if (el.querySelector('#success-msg')) {
            el.querySelector('#success-msg').style.display = 'none';
        }
      }, 3000);
    }
  };

  return el;
};

const Home = () => {
  const el = document.createElement('div');
  const currentState = store.getState();
  
  el.innerHTML = `
    <h1>Bienvenido</h1>
    <p>Estado actual del tema: <strong id="theme-val">${currentState.theme}</strong></p>
  `;
  
  // Nos suscribimos a cambios para actualizar solo la parte necesaria
  const unsubscribe = store.subscribe((state) => {
    const themeVal = el.querySelector('#theme-val');
    if (themeVal) themeVal.textContent = state.theme;
  });

  return el;
};

const Settings = () => {
  const el = document.createElement('div');
  el.innerHTML = `
    <h1>Ajustes</h1>
    <p>Configura tu aplicación aquí.</p>
    <button id="btn-toggle">Alternar Modo Oscuro/Claro</button>
  `;

  el.querySelector('#btn-toggle').onclick = () => {
    const isLight = store.getState().theme === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    
    // Actualizamos el estado global
    store.setState({ theme: newTheme });
    
    // Efecto secundario: cambiar clase en el body
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  };

  return el;
};

// --- Configuración de Rutas ---

const routes = {
  '/': Home,
  '/settings': Settings,
  '/profile': Profile,
  '/pokedex': Pokedex,
  '/pokedex/:name': PokemonDetail,
  '404': () => {
    const el = document.createElement('div');
    el.innerHTML = '<h1>404 - No encontrado</h1><a href="#/">Volver al inicio</a>';
    return el;
  }
};

// --- Inicio de la App ---

createRouter(routes, 'app');
