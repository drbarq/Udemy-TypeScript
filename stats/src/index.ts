import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './outputTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// create an object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// crete and instance of MatchReader and pass in something that satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// pre refector
// import { MatchResult } from './MatchResult';
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
