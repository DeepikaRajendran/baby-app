import { Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Toy } from '../toy';

@Pipe({name:'color'})
export class ColorPipe implements PipeTransform{
    constructor(private sanitizer: DomSanitizer){      
    }
    
    transform(toy: Toy){
        return this.sanitizer.bypassSecurityTrustHtml(`<span style="color:${toy.color};font-weight:bold;">${toy.color}  ${toy.name}</span>`);
    }
    
}