import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'color'})
export class ColorPipe implements PipeTransform{

    transform(text:string, search): string {
        console.log(text);
        console.log(search)
        return `<span [style.color]="#ffff">${text}cc</span>` ;
    }
    
    // transform(text: string, [search]): string {
    //     return search ? text.replace(new RegExp(search, 'i'), `<span class="highlight">${search}</span>`) : text;
    //    }
    

}