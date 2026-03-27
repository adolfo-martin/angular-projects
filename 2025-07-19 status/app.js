import Player from "./models/player.class.js";
import AppStatus from "./models/app-status.class.js";

const appStatus = new AppStatus();

const player1 = new Player('Adolfo', 'red');
appStatus.addPlayer(player1);
const player2 = new Player('María', 'blue');
appStatus.addPlayer(player2);

console.log(JSON.stringify(player1));