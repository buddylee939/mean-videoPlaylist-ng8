import { Video } from './video';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private API_URL = 'http://localhost:3000/api/video';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.API_URL}s`);
  }

  addVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.API_URL, video, this.httpOptions);
  }

  updateVideo(video: Video): Observable<any> {
    return this.http.put(`${this.API_URL}/${video._id}`, video, this.httpOptions);

  }

  deleteVideo(video: Video): Observable<Video> {
    const url = `${this.API_URL}/${video._id}`;
    return this.http.delete<Video>(url, this.httpOptions);
  }

}
