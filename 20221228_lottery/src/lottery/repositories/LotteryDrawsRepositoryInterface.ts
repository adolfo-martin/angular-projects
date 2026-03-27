import LotteryDraw from '../entities/LotteryDraw';

export default interface LotteryDrawsRepositoryInterface {
    retrieveLotteryDraws(): Promise<LotteryDraw[]>;
}