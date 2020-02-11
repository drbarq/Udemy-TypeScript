import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
	constructor(public teamName: string) {}

	run(matches: MatchData[]): string {
		let teamWins = 0;

		for (let match of matches) {
			if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
				teamWins++;
			} else if (
				match[2] === this.teamName &&
				match[5] === MatchResult.AwayWin
			) {
				teamWins++;
			}
		}

		return `Team ${this.teamName} won ${teamWins} games`;
	}
}
