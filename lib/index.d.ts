/// <reference types="react" />
import { buildAbilityFor } from './config/ability';
declare const RBAC: {
    Can: import("react").StatelessComponent<import("@casl/react").BoundCanProps<import("./config/ability").AppAbility>>;
    AbilityContext: import("react").Context<import("./config/ability").AppAbility>;
    buildAbilityFor: typeof buildAbilityFor;
};
export default RBAC;
//# sourceMappingURL=index.d.ts.map