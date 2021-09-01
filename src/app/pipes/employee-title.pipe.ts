import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform {

  transform(value: string, email: string, active:boolean): string {
    return `Mr. ${value} -${active}: (${email})`;
  }

}
