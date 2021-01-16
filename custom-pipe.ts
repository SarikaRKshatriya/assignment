import { Pipe, PipeTransform, Inject, forwardRef } from '@angular/core';


@Pipe({ name: 'filterBy', pure: false })
export class FilterByPipe implements PipeTransform {
    transform(items = [], value = '', property = '') {
        return value == '' ? items : items.filter(item => {             
            if(!item[property]) return false;
            return item[property].toLowerCase().indexOf(value.toLowerCase()) !== -1
        });
    }
}





