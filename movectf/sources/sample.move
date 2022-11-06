module ctf_question_one::solution {
  use sui::tx_context::{TxContext};
  use game::hero::{Self, Hero};
  use game::adventure::{slay_boar, slay_boar_king};
  use game::inventory::{TreasuryBox, get_flag};

  fun farmToLevel2(hero: &mut Hero, ctx: &mut TxContext) {
    while (hero::experience(hero) < 100) {
      slay_boar(hero, ctx);
    };
    hero::level_up(hero);
  }

  public entry fun farmForBox(hero: &mut Hero, ctx: &mut TxContext) {
    farmToLevel2(hero, ctx);
    while (hero::stamina(hero) >= 2) {
      slay_boar_king(hero, ctx);
    }
  }

  public entry fun openBox(box: TreasuryBox, ctx: &mut TxContext) {
    get_flag(box, ctx);
  }
}
