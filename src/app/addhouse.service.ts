import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ihouses } from './addhouse/ihouse';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddhouseService {
  private housesURL = '/api/houses.json';
  constructor(private http: HttpClient) { }

  getHouses(): Observable <Ihouses[]> {
    return this.http.get<Ihouses[]>(this.housesURL).pipe(
      tap(data => console.log('All: ',JSON.stringify(data))),
      catchError(this.handleError)
    );
  
  }
  private handleError(err: HttpErrorResponse): Observable<never>{
            // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
  }
}
