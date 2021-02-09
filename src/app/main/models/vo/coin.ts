export class Coin {
  public id: string = undefined;
  public name: string = undefined;
  public value: string = undefined;
  static selectId: (item: Coin) => string = item => item.id;
}
