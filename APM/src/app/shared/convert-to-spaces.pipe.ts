import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  // 1st param is the value piped to the pipe , befire any params
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
