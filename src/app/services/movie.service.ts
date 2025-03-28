import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovieData(): Observable<any> {
    // The API key is hardcoded, which is not secure for production use.
    // Consider storing it in environment variables or a backend service.
    
    // The search query `s=%27grey%27` uses URL encoding (`%27` is `'`).
    // This might cause unexpected results. Consider using `encodeURIComponent` for dynamic queries.
    
    // API call to fetch movie data
    return this.http.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27grey%27');
  }
}
