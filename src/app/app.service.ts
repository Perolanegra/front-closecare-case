import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Constants } from "src/app/core/pattern/constants";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  public getLimitedByDefaultApi(
    pagination: number
  ): Observable<any | undefined> {
    const url = `${environment.server}/${Constants.defaultPattern.rest.pokeApi.limit}?limit=${pagination}`;
    // const params = new HttpParams().set("pagination", pagination.toString());
    return this.http.get(url, { params: {} }) as Observable<any>;
  }

  public getSprites(payload: any) {
    console.log('payload: ', payload);
    const url = `${environment.server}/${payload}`;
    return;
  }

}
