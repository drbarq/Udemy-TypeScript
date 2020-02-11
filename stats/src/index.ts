import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './outputTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './outputTargets/HtmlReport';
// create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');

// crete and instance of MatchReader and pass in something that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');

// connect the composition with output instances s
// const summary = new Summary(
// 	new WinsAnalysis('Man United'),
// 	new ConsoleReport()
// 	// new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);

// pre refector
// import { MatchResult } from './MatchResult';WinsAnalysis
// import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';

// // create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader('football.csv');

// // // crete and instance of MatchReader and pass in something that satisfies the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
// // // ^^ results in  ==>  matchReader.matches

// console.log(`Man United won ${manUnitedWins} games`);

// // // const dateOfFirstMatch = reader.data[0][0];
// // // console.log(reader.data[0]);
