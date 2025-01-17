import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Test{
  title:string
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  getUserById(id:number):Observable<Test>
  {
    return this.http.get<Test>(`api/users/${id}`)

  }
}
