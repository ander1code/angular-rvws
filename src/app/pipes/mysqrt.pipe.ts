import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'mysqrt'
})
export class MySqrtPipe implements PipeTransform {
    transform(num: number): number {
        return Math.sqrt(num);
    }
}
