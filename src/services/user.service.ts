import { awsUrl } from "./../environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/models/users';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
// we must import HttpClientModule in the app.module.ts

const url = `${awsUrl}/users`;

// we will inject this service into the components that call its methods
// within their methods
@Injectable({ // Services in Angular are singleton objects
  providedIn: 'root'
})
export class UserService { // this service is only responsible for one thing: making HTTP requests to a server

  // we need to inject this service with HttpClient
  constructor(private http: HttpClient) { }

  // we need to append Headers to all requests
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  // POST
  public registerUser(user: User): Observable<User> {
    // from http://localhost:4200 -> http://localhost:5000/api/users/add 
    return this.http.post<User>(`${url}/add`, user, this.httpOptions)
      .pipe(catchError(this.handleError))

  }

  public findById(id: number): Observable<User> {
    return this.http.get<User>(`${url}/${id}`)
      .pipe(catchError(this.handleError))
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(url)
      .pipe(catchError(this.handleError)) // in our component, we subscribe to the observable that hits returns
  }

  public findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${url}/find/${username}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred, handle it accordingly
      console.log('An error occurred: ', httpError.error.message);
    } else {
      // the backend returned an unsuccessful response code
      // the response body might have clues for what went wrong
      console.error(`
        Backend returned code ${httpError.status},
        body was: ${httpError.error}
      `);

      return throwError('Something bad happened; please try again later');
    }
  }

}
