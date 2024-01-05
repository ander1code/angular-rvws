import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filterArrayPure'
})
export class FilterArrayPurePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (value.length === 0 || args === undefined) {
            return value;
        }

        const filterby = args.toLocaleLowerCase();
        return value.filter(v => v.toLocaleLowerCase().indexOf(filterby) !== -1);
    }
}
