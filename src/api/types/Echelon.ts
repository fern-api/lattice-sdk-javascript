/**
 * This file was auto-generated from our API Definition.
 */

/**
 * Describes a Echelon group type.  Comprised of entities which are members of the
 *  same unit or echelon. Ex: A group of tanks within a armored company or that same company
 *  as a member of a battalion.
 */
export interface Echelon {
    armyEchelon?: Echelon.ArmyEchelon;
}

export namespace Echelon {
    export type ArmyEchelon =
        | "ARMY_ECHELON_INVALID"
        | "ARMY_ECHELON_FIRE_TEAM"
        | "ARMY_ECHELON_SQUAD"
        | "ARMY_ECHELON_PLATOON"
        | "ARMY_ECHELON_COMPANY"
        | "ARMY_ECHELON_BATTALION"
        | "ARMY_ECHELON_REGIMENT"
        | "ARMY_ECHELON_BRIGADE"
        | "ARMY_ECHELON_DIVISION"
        | "ARMY_ECHELON_CORPS"
        | "ARMY_ECHELON_ARMY";
    export const ArmyEchelon = {
        ArmyEchelonInvalid: "ARMY_ECHELON_INVALID",
        ArmyEchelonFireTeam: "ARMY_ECHELON_FIRE_TEAM",
        ArmyEchelonSquad: "ARMY_ECHELON_SQUAD",
        ArmyEchelonPlatoon: "ARMY_ECHELON_PLATOON",
        ArmyEchelonCompany: "ARMY_ECHELON_COMPANY",
        ArmyEchelonBattalion: "ARMY_ECHELON_BATTALION",
        ArmyEchelonRegiment: "ARMY_ECHELON_REGIMENT",
        ArmyEchelonBrigade: "ARMY_ECHELON_BRIGADE",
        ArmyEchelonDivision: "ARMY_ECHELON_DIVISION",
        ArmyEchelonCorps: "ARMY_ECHELON_CORPS",
        ArmyEchelonArmy: "ARMY_ECHELON_ARMY",
    } as const;
}
