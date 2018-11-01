import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult } from './searchResult';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsServiceService {

  constructor(private http: HttpClient) {}
  private searchUrl = '/api/search?searchTerm=';
  public search(searchTerm: String) {
    return this.http.get<SearchResult[]>(this.searchUrl + searchTerm);
  }
}
