export default class CashMachineStatusService {
    static #instance = null;

    /**
     * @private
     * @type {Array<{denomination: number, amount: number}>}
     */
    #cashBillAmounts = [];

    constructor() {
        if (CashMachineStatusService.#instance) {
            throw new Error("Use CashMachineStatusService.getInstance() to get the single instance of this class.");
        }
    }

    static getInstance() {
        if (!CashMachineStatusService.#instance) {
            CashMachineStatusService.#instance = new CashMachineStatusService();
        }
        return CashMachineStatusService.#instance;
    }

    /**
     * 
     * @param {Array<{denomination: number, amount: number}>} values 
     */
    setCashBillAmounts(values) {
        if (!Array.isArray(values)) {
            throw new Error("Bill values must be an array.");
        }
        this.#cashBillAmounts = values;
    }

    /**
     * 
     * @returns {Array<{denomination: number, amount: number}>}
     */
    getCashBillAmounts() {
        return this.#cashBillAmounts;
    }
}