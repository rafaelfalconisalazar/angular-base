import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../core/http.service';
import {Employee} from './employee.model';

@Injectable()
export class EmployeeService{
    static ENDPOINT="employees";

    constructor(private httpService:HttpService){

    }

    readAll(): Observable<Employee[]>{
        return this.httpService.get(EmployeeService.ENDPOINT);
    }
}