import fs from 'fs';

// T = TypeOfData convention
// export abstract class CsvFileReader {
export abstract class CsvFileReader<TypeOfData> {
	// data: string[][] = [];
	// data: MatchData[] = [];
	data: TypeOfData[] = [];

	constructor(public filename: string) {}

	abstract mapRow(row: string[]): TypeOfData;

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8'
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(this.mapRow);
	}
}
