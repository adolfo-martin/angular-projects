import { StateService } from './services/state-service.js';

await main();

function main() {
    const stateService = new StateService();
    stateService.addObserver('category', category => console.log('OBSERVER ONE:', category));
    stateService.setValue('category', 'sports');
    stateService.addObserver('category', category => console.log('OBSERVER TWO:', category));
    stateService.setValue('category', 'music');
}