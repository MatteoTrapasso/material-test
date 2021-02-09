export class Coin {
    public id: string = undefined;
    public value: string = undefined;
    public name: string = undefined;
    public description: string = undefined;
    static selectId: (item: Coin) => string = item => item.id;
}
