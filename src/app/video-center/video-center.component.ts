import { VideoService } from './../video.service';
import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss']
})
export class VideoCenterComponent implements OnInit {
  // videos: Video[] = [
  //   {_id: '1', title: 'title 1', url: 'url 1', description: 'description 1'},
  //   {_id: '2', title: 'title 2', url: 'url 2', description: 'description 2'},
  //   {_id: '3', title: 'title 3', url: 'url 3', description: 'description 3'},
  //   {_id: '4', title: 'title 4', url: 'url 4', description: 'description 4'},
  //   {_id: '5', title: 'title 5', url: 'url 5', description: 'description 5'}
  // ];
  videos: Video[];
  selectedVideo: Video;
  hidenewVideo = true;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos(): void {
    this.videoService.getVideos()
    .subscribe(videos => this.videos = videos);
  }

  onSelectedVideo(video: Video) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  newVideo() {
    this.hidenewVideo = false;
  }

  onSubmitAddVideo(video: Video): void {
    this.videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hidenewVideo = true;
        this.selectedVideo = resNewVideo;
      });

  }

  onUpdateVideoEvent(video: Video): void {
    this.videoService.updateVideo(video)
      .subscribe();
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: Video): void {
    this.videos = this.videos.filter(v => v !== video);
    this.videoService.deleteVideo(video).subscribe();
    this.selectedVideo = null;
  }

}
