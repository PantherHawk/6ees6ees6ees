class ForagerBee extends Bee{
  constructor () {
    super();
    this.age = 10;
    this.canFly = true;
    this.treasureChest = [];
 }
 get job() {
  return 'find pollen';
 }
forage(stuff) {
  this.treasureChest.push(stuff);
}
};
