import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


// const httpOptions = {
// 	headers: new HttpHeaders({
// 		'Content-Type': 'application/x-www-form-urlencoded'
// 	})
// };
const apiUrl = "http://localhost:3003/";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  	constructor(private http: HttpClient) { }
  	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
		    // A client-side or network error occurred. Handle it accordingly.
		    console.error('An error occurred:', error.error.message);
		} else {
		    // The backend returned an unsuccessful response code.
		    // The response body may contain clues as to what went wrong,
		    console.error(
		      `Backend returned code ${error.status}, ` +
		      `body was: ${error.error}`);
		}
	  // return an observable with a user-facing error message
	  return throwError('Something bad happened; please try again later.');
	}

	private extractData(res: Response) {
	  	let body = res;
	  	return body || { };
	}
	getdata(url_string: string): Observable<any> {
	    const url = `${apiUrl}${url_string}`;
		return this.http.get(url).pipe(
	    	catchError(this.handleError)
	    );
	}
	postdata(url_string: any,formData: any): Observable<any> { 
		console.log(formData);
		const url = `${apiUrl}${url_string}`;
		// return this.http.post<string>(url,formData);
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		  });
		return this.http.post(url,formData.toString(), {headers}).pipe(
			catchError(this.handleError)
		);
	}
	putdata(url_string: any,formData: any): Observable<any> { 
		console.log(formData);
		const url = `${apiUrl}${url_string}`;
		// return this.http.post<string>(url,formData);
		const headers = new HttpHeaders({
			'Content-Type': 'application/x-www-form-urlencoded'
		  });
		return this.http.put(url,formData.toString(), {headers}).pipe(
			catchError(this.handleError)
		);
	}
}