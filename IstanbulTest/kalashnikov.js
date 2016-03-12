class kalashnikov{

  constructor(bullets){
    console.log('kalashnikov bullets :',bullets);
    this.bullets = bullets;
  }

  get getBullets(){
    console.log('get number bullets ');
    return this._bullets;
  }

  set gunReload(bullets){
    console.log('reloading the bullets :',bullets);
    this._bullets = bullets;
  }

}
exports = kalashnikov;
