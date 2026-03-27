export default class AppStatus {
    #players = [];
    #currentPlayer = null;

    set currentPlayer(player) {
        this.#currentPlayer = player;
    }

    get currentPlayer() {
        return this.#currentPlayer;
    }

    addPlayer(player) {
        this.#players.push(player);
    }

    getPlayers() {
        return this.#players;
    }
}