import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiPaths } from "../enums/api.paths";
import * as libRef from "src/themoviedb-javascript-library-master";
@Injectable({
  providedIn: "root",
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.apiKey = environment.apiKey;
    this.language = environment.language;
    this.region = environment.region;
    libRef.common.api_key = this.apiKey;
  }

  getNowPlaying(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getNowPlaying(
          { page: page },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  searchMovies(searchStr: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.search.getMulti(
          { query: searchStr },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getPopular(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movie.getPopular(
          { page: page },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getUpComingMovies(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.search.getUpcoming(
          { page: page },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getTopRatedMovies(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getTopRated(
          { page: page },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getDiscoverMovies(): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.discover.getMovies(
          {},
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getGenres(): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.genres.getMovieList(
          {},
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getMoviesByGenre(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.genres.getMovies(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getMovie(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getById(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getMovieReviews(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.search.getReview(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getMovieCredits(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getCredits(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getBackdropsImages(id: string) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getImages(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getMovieVideos(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getVideos(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getRecomendMovies(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.movies.getRecommendations(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getPersonDetail(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.people.getById(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getPersonExternalData(id: string) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.people.getExternalIds(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  getPersonCast(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.people.getMovieCredits(
          { id: id },
          (data) => {
            data = JSON.parse(data);
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }
}
