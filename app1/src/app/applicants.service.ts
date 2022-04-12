import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "./user";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
@Injectable({
  providedIn: "root"
})
export class ApplicantsService {
  private dataSource = new Subject<any>();
  data$ = this.dataSource.asObservable();

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    return this.http.post("http://localhost/Php-Crud/insert.php", user);
  }

  getApplicants() {
    return this.http.get<User[]>("http://localhost/Php-Crud/getdata.php");
  }

  sendMessage(user: User[]) {
    this.dataSource.next();
  }
}
