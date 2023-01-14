import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';
import { environment } from "src/environments/environment";
import * as libRef from "src/themoviedb-javascript-library-master";
@Injectable({
  providedIn: 'root'
})
export class TvService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.language = environment.language;
    this.region = environment.region;
    libRef.common.api_key = environment.apiKey;
  }

  getTvOnTheAir(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getOnTheAir(
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

  getTVAiringToday(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getAiringToday(
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

  getPopularTVShow(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getPopular(
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

  getTopRatedTVShows(page: number): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getTopRated(
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

  getTVShow(id: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getById(
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

  getTvVideos(id: any) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getVideos(
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

  getTvBackdropsImages(id: string) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getImages(
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

  getMovieCredits(id: string) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getCredits(
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

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`);
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/tv?api_key=${this.apiKey}`);
  }

  getRecomendTv(id: string) {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getRecommendations(
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

  searchtv(searchStr: string): Observable<any> {
    return from(
      new Promise<any>((resolve, reject) => {
        libRef.tv.getTv(
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

}
