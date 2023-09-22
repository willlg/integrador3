import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchFilter'
})

export class MatchFilterPipe implements PipeTransform {
  transform(matches: any[], sport: string, status: string): any[] {
    if (!matches) {
      return [];
    }
    if (sport) {
      matches = matches.filter(match => match.sport === sport);
    }
    if (status) {
      matches = matches.filter(match => match.status === status);
    }
    return matches;
  }
}
