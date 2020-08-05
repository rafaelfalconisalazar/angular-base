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

    create(employee:Employee):Observable<Employee>{
        return this.httpService.post(EmployeeService.ENDPOINT,employee);
    }

    edit(id:String,employe:Employee):Observable<Employee>{
        return this.httpService.put(EmployeeService.ENDPOINT+'\\'+id,employe);      
    }

    read(id:String):Observable<Employee>{
        return this.httpService.get(EmployeeService.ENDPOINT+'\\'+id);      
    }
}
