import LotteryDraw from '../entities/LotteryDraw';
import LotteryDrawsRepositoryInterface from './LotteryDrawsRepositoryInterface' ;

export default class LotteryDrawsRepositoryMock implements LotteryDrawsRepositoryInterface {
    private static lotteryDraws: LotteryDraw[]; 

    private static initializeLotteryDraws(): LotteryDraw[] {
        return [
            new LotteryDraw('2022-12-10', 'Extraordinario "Día de la Constitución"'),
            new LotteryDraw('2022-12-17', 'Lotería Nacional'),
            new LotteryDraw('2022-12-22', 'Extraordinario de Navidad'),
            new LotteryDraw('2023-01-06', 'Extraordinario de "El Niño"'),
        ];
    }

    retrieveLotteryDraws(): Promise<LotteryDraw[]> {
        throw new Error('Method not implemented.');
    }
}