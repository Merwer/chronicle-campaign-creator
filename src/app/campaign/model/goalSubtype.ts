export class GoalSubtype {
    constructor(public value: string) {
    }

    toString() : string {
        return this.value;
    }

    static Armour = new GoalSubtype("ARMOUR");
    static Attack = new GoalSubtype("ATTACK");
    static Gold = new GoalSubtype("GOLD");
    static Health = new GoalSubtype("HEALTH");
    static MaxHealth = new GoalSubtype("MAX_HEALTH");
    static WeaponAttack = new GoalSubtype("WEAPON_ATTACK");
    static WeaponCount = new GoalSubtype("WEAPON_COUNT");
    static WeaponDurability = new GoalSubtype("WEAPON_DURABILITY");
    static OverallAttack = new GoalSubtype("OVERALL_ATTACK");
    static HandSize = new GoalSubtype("HAND_SIZE");
    static DeckSize = new GoalSubtype("DECK_SIZE");
}