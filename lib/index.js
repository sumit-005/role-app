"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Can_1 = __importDefault(require("./components/Can"));
var Can_2 = require("./components/Can");
var ability_1 = require("./config/ability");
var RBAC = {
    Can: Can_1.default,
    AbilityContext: Can_2.AbilityContext,
    buildAbilityFor: ability_1.buildAbilityFor
};
exports.default = RBAC;
//# sourceMappingURL=index.js.map