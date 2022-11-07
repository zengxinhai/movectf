module lock_solution::solution {
  use sui::tx_context::{TxContext};
  use movectf::move_lock::{Self, ResourceObject};
  public entry fun get_flag(resource_object: &ResourceObject, ctx: &mut TxContext) {
    move_lock::get_flag(resource_object, ctx);
  }
}
