export class StateService {

    /** @type {Map<string, { value: unknown, callbacks: CallableFunction[]}}> */
    static #state = new Map();

    /**
     * 
     * @param {string} key 
     * @param {unknown} value 
     */
    static setValue(key, value) {
        if (StateService.#state.has(key)) {
            const item = StateService.#state.get(key);
            item.value = value;    
        } else {
            StateService.#state.set(key, {
                value,
                callbacks: []
            });
        }
        // console.log(JSON.stringify(StateService.#state));
        StateService.#dispatchValue(key, value);
    }

    /**
     * 
     * @param {string} key 
     * @param {CallableFunction} callback 
     */
    static addObserver(key, callback) {
        if (StateService.#state.has(key)) {
            const item = StateService.#state.get(key);
            item.callbacks.push(callback);
        } else {
            StateService.#state.set(key, {
                undefined,
                callbacks: [callback]
            });
        }
    }

    /**
     * 
     * @param {string} key 
     * @param {unknown} value 
     */
    static #dispatchValue(key, value) {
        for (const callback of StateService.#state.get(key).callbacks) {
            callback(value);
        }
    }
}