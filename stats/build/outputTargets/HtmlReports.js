"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReports = /** @class */ (function () {
    function HtmlReports() {
    }
    HtmlReports.prototype.print = function (report) {
        var html = "\n    <div>\n      <h1>\n        Analysis Output\n      </h1>\n      <div>\n        " + report + "\n      </div>\n    </div>";
        fs_1.default.writeFileSync();
    };
    return HtmlReports;
}());
exports.HtmlReports = HtmlReports;
