import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name: 'ReplaceComma',
    standalone:true, 
})

export class ReplaceComma implements PipeTransform {

    transform(value: string): string {
        if (!!value){
            return value.replace(/,/g,'.');
        }else {
            return '';
        }
        
    }
}