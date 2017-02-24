class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.canFly = false;
    this.color = 'grey';
  }
  get job() {
    return 'gamble';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    this.treasureChest.push('dolladollabills');
  }
};
