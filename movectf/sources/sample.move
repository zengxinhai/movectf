module ctfone::solution {
  use sui::tx_context::{TxContext};
  use game::hero::{Self, Hero};
  use game::adventure::{slay_boar, slay_boar_king};
  use game::inventory::{Self, TreasuryBox};
  use ctf::random;

  const WRONG_RANDOM: u64 = 1;

  fun farmToLevel2(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::experience(hero) < 100) {
      slay_boar(hero, ctx);
    };
    hero::level_up(hero);
  }

  fun farmKingTillEnd(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::stamina(hero) >= 2) {
      slay_boar_king(hero, ctx);
    }
  }

  public entry fun farm_box(hero: &mut Hero, ctx: &mut TxContext) {
    let d100 = random::rand_u64_range(0, 100, ctx);        
    assert!(d100 == 0, WRONG_RANDOM);
    farmToLevel2(hero, ctx);
    farmKingTillEnd(hero, ctx);
  }

  public entry fun get_flag(box: TreasuryBox, ctx: &mut TxContext) {
    let d100 = random::rand_u64_range(0, 100, ctx);        
    assert!(d100 == 0, WRONG_RANDOM);
    inventory::get_flag(box, ctx);
  }
}
