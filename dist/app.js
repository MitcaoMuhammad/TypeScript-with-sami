"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callback_1 = __importDefault(require("safe-json-parse/callback"));
const tuple1 = (0, callback_1.default)('{}');
const json = tuple1[1];
console.log(json);
