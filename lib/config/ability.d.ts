import { AbilityClass, MatchConditions, PureAbility } from '@casl/ability';
declare type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
declare type Subjects = 'User' | 'all';
export declare type AppAbility = PureAbility<[Actions, Subjects], MatchConditions>;
export declare const AppAbility: AbilityClass<AppAbility>;
export default function defineRulesFor(role: string): AppAbility;
export declare function buildAbilityFor(role: string): AppAbility;
export {};
//# sourceMappingURL=ability.d.ts.map