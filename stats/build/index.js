"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var HtmlReport_1 = require("./outputTargets/HtmlReport");
// create an object that satisfies the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// crete and instance of MatchReader and pass in something that satisfies the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// connect the composition with output instances s
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), 
// new ConsoleReport()
new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
// pre refector
// import { MatchResult } from './MatchResult';WinsAnalysis
// import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// // create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
// // crete and instance of MatchReader and pass in something that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// // ^^ results in  ==>  matchReader.matches
// // console.log(`Man United won ${manUnitedWins} games`);
// // const dateOfFirstMatch = reader.data[0][0];
// // console.log(reader.data[0]);
