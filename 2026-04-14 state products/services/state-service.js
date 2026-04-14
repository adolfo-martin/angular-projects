export class StateService {
    /** @type Map<string, {value: unknown, callbacks: CallableFunction[]}> */
    static #state = new Map();

    // toString() {
    //     return `
    //         value: ${}
    //     `;
    // }

    /**
     * @param {string} key 
     * @returns unknown | undefined
     */
    getValue(key) {
        return StateService.#state.get(key)?.value ?? undefined;
    }

    /**
     * @param {string} key 
     * @param {unknown} value 
     */
    setValue(key, value) {
        const item = StateService.#state.get(key) ?? { value: null, callbacks: [] };
        item.value = value;
        StateService.#state.set(key, item);
        this.#dispathChange(key, value);
    }

    /**
     * @param {string} key 
     * @param {CallableFunction} callback 
     */
    addObserver(key, callback) {
        const item = StateService.#state.get(key) ?? { value: null, callbacks: [] };
        item.callbacks.push(callback);
        StateService.#state.set(key, item);
    }

    /**
     * @param {string} key 
     * @param {unknown} value 
     */
    #dispathChange(key, value) {
        const item = StateService.#state.get(key) ?? { value: null, callbacks: [] };
        item.callbacks.forEach(callback => callback(value));
    }
}