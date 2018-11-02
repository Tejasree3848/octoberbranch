import { HttpClient } from "@angular/common/http";
import { GridhistoryComponent } from "./gridhistory/gridhistory.component";
import { Observable } from "rxjs";

export class MobileAPI {
    baseURL='http://localhost:3000/';
  constructor(private http:HttpClient) { }

  findallhistory():Observable<GridhistoryComponent[]>{
  const adviseURL=this.baseURL+'Transactions';
    return this.http.get<GridhistoryComponent[]>(adviseURL);
  }
}
