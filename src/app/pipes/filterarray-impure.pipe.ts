import { Pipe } from '@angular/core';
import { FilterArrayPurePipe } from './filterarray-pure.pipe';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
    name: 'filterArrayImpure',
    pure: false

})
export class FilterArrayImpurePipe extends FilterArrayPurePipe {
}
