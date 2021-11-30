export class GameApis {
    private static _instance?: GameApis;
    public static get instance() {
        if (!this._instance) {
            this._instance = new GameApis();
        }
        return GameApis._instance;
    }

    public async getAll() {

    }
}
