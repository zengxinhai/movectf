module movectf_checkin::answer {
  
  use sui::tx_context::TxContext;
  
  use movectf::lucky_num;
  use movectf::counter::Counter;
  
  public entry fun answer(userCount: &mut Counter, ctx: &mut TxContext) {
    let luckyNumber = 9;
    lucky_num::get_flag(userCount, luckyNumber, ctx)
  }
}
