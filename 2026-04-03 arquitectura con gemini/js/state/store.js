export const createStore = (initialState) => {
  let state = initialState;
  const listeners = [];

  return {
    getState: () => state,
    
    setState: (newState) => {
      state = { ...state, ...newState };
      listeners.forEach(listener => listener(state));
    },

    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }
  };
};

export const store = createStore({ 
    user: null, 
    theme: 'light' 
});
