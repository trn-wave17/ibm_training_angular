import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './components/employees/employees.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EmployeeTitlePipe } from './pipes/employee-title.pipe';
import { EmployeeItemHoverDirective } from './directives/employee-item-hover.directive';
import { EmployeeItemColorDirective } from './directives/employee-item-color.directive';

const applicationRoutes: Routes = [
  {path:'', component:EmployeesComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    EmployeeItemComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    LoginComponent,
    FooterComponent,
    EmployeeTitlePipe,
    EmployeeItemHoverDirective,
    EmployeeItemColorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(applicationRoutes),
    MatToolbarModule,
    MatAutocompleteModule,
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
