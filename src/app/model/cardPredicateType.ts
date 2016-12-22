export class CardPredicateType {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Specific = new CardPredicateType("SPECIFIC");
    static Type = new CardPredicateType("TYPE");
    static Family = new CardPredicateType("FAMILY");
    static Attack = new CardPredicateType("ATTACK");
    static Health = new CardPredicateType("HEALTH");
    static Cost = new CardPredicateType("COST");
    static RewardAttack = new CardPredicateType("REWARD_ATTACK");
    static RewardHealth = new CardPredicateType("REWARD_HEALTH");
    static RewardGold = new CardPredicateType("REWARD_GOLD");
    static RewardArmour = new CardPredicateType("REWARD_ARMOUR");
    static RewardWeaponDurability = new CardPredicateType("REWARD_WEAPON_DURABILITY");
    static RewardWeaponAttack = new CardPredicateType("REWARD_WEAPON_ATTACK");
    static Aggressive = new CardPredicateType("AGGRESIVE");
}