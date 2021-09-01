import { Observable, of } from "rxjs";
import { Employee } from "src/app/Employee";

export class EmployeeStub{
    getEmployees(){
        return of([{
            id: "1",
            name: "Vaibhav",
            email: "vaibhav@gmail.com",
            active: false
          },
          {
            id: "2",
            name: "Namit",
            email: "namit@gmail.com",
            active: true
          }])
    }
}