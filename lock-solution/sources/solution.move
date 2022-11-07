module lock_solution::solution {
  use sui::tx_context::{TxContext};
  use movectf::move_lock::{Self, ResourceObject};
  public entry fun get_flag(data1: vector<u64>, data2: vector<u64>, resource_object: &mut ResourceObject, ctx: &mut TxContext) {
    move_lock::movectf_unlock(data1, data2, resource_object, ctx);
    move_lock::get_flag(resource_object, ctx);
  }
}
