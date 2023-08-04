"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
var winston = __importStar(require("winston"));
var logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(winston.format.printf(function (info) { return formatter(info); })),
    transports: [
        new winston.transports.Console(),
        // You can add additional transports here if needed
    ],
});
function formatter(info) {
    var _a;
    var finalLevel = info.level.toUpperCase();
    var context = (_a = info.splat) === null || _a === void 0 ? void 0 : _a.join(" ");
    var finalContext = context ? " [".concat(context, "]") : "";
    var date = new Date().toISOString();
    return "[".concat(finalLevel, "] [").concat(date, "]").concat(finalContext, " ").concat(info.message);
}
function log(level, message, context) {
    logger.log(level, message, { context: context });
}
exports.log = log;
