module ctfone::solution {
  use sui::tx_context::{TxContext};
  use game::hero::{Self, Hero};
  use game::adventure::{slay_boar, slay_boar_king};

  fun farmToLevel2(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::experience(hero) < 100) {
      slay_boar(hero, ctx);
    };
    hero::level_up(hero);
  }

  fun farmKingTillEnd(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::stamina(hero) > 0) {
      slay_boar_king(hero, ctx);
    }
  }

  public entry fun farm_box(hero: &mut Hero, ctx: &mut TxContext) {
    farmToLevel2(hero, ctx);
    farmKingTillEnd(hero, ctx);
  }
}
