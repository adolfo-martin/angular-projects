import Config from '../Config';
import LotteryDraw from '../entities/LotteryDraw';
import LotteryDrawsRepositoryInterface from '../repositories/LotteryDrawsRepositoryInterface' ;

document.addEventListener('DOMContentLoaded', setup);

//@ts-ignore
async function setup(e) {
    const repository: LotteryDrawsRepositoryInterface = new Config.lotteryDrawsRepository();
    const view = new LotteryDrawsView(repository);
    await view.showLotteryDraws();
}


class LotteryDrawsView {
    constructor(private repository: LotteryDrawsRepositoryInterface) { }

    public async showLotteryDraws() {
        const draws: LotteryDraw[] = await this.repository.retrieveLotteryDraws();
        const nTbody = document.querySelector('#tTabLotteryDraw>tbody');

        draws.forEach(showDraw);

        function showDraw(draw: LotteryDraw) {
            const nTr = createNode(nTbody, 'tr');
            
            const tTdDate = createNode(nTr, 'td', undefined, `${draw.date.getDay()}/${draw.date.getMonth()}/${draw.date.getFullYear()}}`);
            const nTdDenomination = createNode(nTr, 'td', undefined, draw.denomination);
        }
    }
}

//@ts-ignore
function createNode(nAncestor, type: string, attributes = [], text: string = '') {
    const nNode = document.createElement(type);
    nAncestor.appendChild(nNode);

    //@ts-ignore
    attributes.forEach(attribute => nNode.setAttribute(attribute.field, attribute.value));

    if (text) {
        nNode.appendChild(document.createTextNode(text));
    }

    return nNode;
}