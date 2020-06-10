import {
	AbilityBuilder,
	Ability,
	detectSubjectType,
	AbilityClass,
	ConditionsMatcher,
	MatchConditions,
	PureAbility
} from '@casl/ability';
// import {User} from '../user';

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
type Subjects = 'User'  | 'all';

export type AppAbility = PureAbility<[Actions, Subjects], MatchConditions>;
export const AppAbility = Ability as AbilityClass<AppAbility>;
const lambdaMatcher: ConditionsMatcher<MatchConditions> = matchConditions => matchConditions;

export default function defineRulesFor(role: string) {
	const {can, build} = new AbilityBuilder<AppAbility>();

	if (role === 'admin') {
		can(
			'manage',
			'all'
		);
	} else {
		can(
			['read'],
			'User',
		);
		can(
			['create'],
			'User'
		);
		can(
			['update'],
			'User'
		);
		can(
			['delete'],
			'User',
		);
	}
	return build({
		conditionsMatcher: lambdaMatcher,
		detectSubjectType: detectAppSubjectType
	});
}

function detectAppSubjectType(subject?: Subjects) {
	// if (subject && typeof subject === 'object' && subject.type) {
	// 	console.log(subject.type);
		
		// return subject.type;
	// }
	return detectSubjectType(subject);
}

export function buildAbilityFor(role: string): AppAbility {
	// return new AppAbility(
	// 	defineRulesFor(role),
	// 	{
	// 		detectSubjectType: detectAppSubjectType
	// 	}
	// );
	return defineRulesFor(role);
}


