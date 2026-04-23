export class StoreService {
    /** @type { Map<string, { value: unknown, callbacks: CallableFunction[]}> } */
    #store = new Map();

    /**
     * 
     * @param {string} key 
     * @returns {unknown | undefined}
     */
    getValue(key) {
        return this.#store.get(key)?.value ?? undefined;
    }

    /**
     * 
     * @param {string} key 
     * @param {unknown} value 
     */
    setValue(key, value) {
        const item = this.#store.get(key) ?? { value: value, callbacks: [] };
        item.value = value;
        this.#store.set(key, item);
        this.#dispatchValueChanged(key, value);
    }

    /**
     * 
     * @param {string} key 
     * @param {CallableFunction} callback 
     */
    addObserver(key, callback) {
        const item = this.#store.get(key) ?? { value: null, callbacks: [] };
        item.callbacks.push(callback);
        this.#store.set(key, item);
    }

    #dispatchValueChanged(key, value) {
        const item = this.#store.get(key);
        item.callbacks.forEach(callback => callback(value));
    }
}