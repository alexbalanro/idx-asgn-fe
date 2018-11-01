import { Component } from '@angular/core';
import { SearchResult } from './searchResult';
import { SearchResultsServiceService } from './search-results-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private searchService: SearchResultsServiceService) {}
  title = 'Search Books / Albums';
  searchResults: SearchResult[];
  lastError: any;

  getSearchResults(searchTerm: String) {
    this.searchService.search(searchTerm)
      .subscribe(
        searchResults => {
          this.searchResults = searchResults;
          this.lastError = null;
        },
        error => {
          this.lastError = error;
          this.searchResults = null;
        });
  }
}
