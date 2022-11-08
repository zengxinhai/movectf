module catch_flag::game {
  use sui::object;
  use sui::tx_context::TxContext;

  use catch_flag::random::{ rand_u64_range };

  use game::hero::{Self, Hero};
  use game::adventure::{slay_boar, slay_boar_king};
  use game::inventory::{get_flag, TreasuryBox};

  const TRY_AGAIN: u64 = 404;

  public entry fun farmForBox(hero: &mut Hero, boxNeeded: u64, ctx: &mut TxContext) {
    farmToLevel2(hero, ctx);
    let boxFarmed = 0;
    while (boxFarmed < boxNeeded && hero::stamina(hero) >= 2) {
      ensurePrize(4, ctx);
      slay_boar_king(hero, ctx);
      boxFarmed = boxFarmed + 1;
    }
  }

  public entry fun openBox(box: TreasuryBox, ctx: &mut TxContext) {
    ensurePrize(0, ctx);
    get_flag(box, ctx);
  }

  fun farmToLevel2(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::experience(hero) < 100) {
      slay_boar(hero, ctx);
    };
    hero::level_up(hero);
  }

  // m is the number of objects created from now till random computation
  fun ensurePrize(m: u64, ctx: &mut TxContext) {
    let next = 0;
    while (true) {
      let data = rand_u64_range(0, 100, next, ctx);
      if (data == 0) {
          break
      };
      next = next + 1;
    };
    assert!(next >= m, TRY_AGAIN);
    while(next > m) {
      object::delete(object::new(ctx));
      next = next - 1;
    }
  }
}
