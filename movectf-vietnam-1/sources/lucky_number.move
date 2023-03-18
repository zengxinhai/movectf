module movectf::lucky_num {
    use sui::event;
    use sui::tx_context::{Self, TxContext};
    use movectf::counter::{Self, Counter};

    fun init(ctx: &mut TxContext) {
        counter::create_counter(ctx);
    }

    struct Flag has copy, drop {
        user: address,
        flag: bool
    }

    public entry fun get_flag(user_counter: &mut Counter, lucky_num: u64, ctx: &mut TxContext) {
        counter::increment(user_counter);
        counter::is_within_limit(user_counter);

        let _ = lucky_num;
        event::emit(Flag {
            user: tx_context::sender(ctx),
            flag: true
        })
    }
}
