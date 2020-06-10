"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildAbilityFor = exports.AppAbility = void 0;
var ability_1 = require("@casl/ability");
exports.AppAbility = ability_1.Ability;
var lambdaMatcher = function (matchConditions) { return matchConditions; };
function defineRulesFor(role) {
    var _a = new ability_1.AbilityBuilder(), can = _a.can, build = _a.build;
    if (role === 'admin') {
        can('manage', 'all');
    }
    else {
        can(['read'], 'User');
        can(['create'], 'User');
        can(['update'], 'User');
        can(['delete'], 'User');
    }
    return build({
        conditionsMatcher: lambdaMatcher,
        detectSubjectType: detectAppSubjectType
    });
}
exports.default = defineRulesFor;
function detectAppSubjectType(subject) {
    // if (subject && typeof subject === 'object' && subject.type) {
    // 	console.log(subject.type);
    // return subject.type;
    // }
    return ability_1.detectSubjectType(subject);
}
function buildAbilityFor(role) {
    // return new AppAbility(
    // 	defineRulesFor(role),
    // 	{
    // 		detectSubjectType: detectAppSubjectType
    // 	}
    // );
    return defineRulesFor(role);
}
exports.buildAbilityFor = buildAbilityFor;
//# sourceMappingURL=ability.js.map