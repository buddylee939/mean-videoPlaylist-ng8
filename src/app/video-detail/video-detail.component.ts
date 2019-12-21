import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss']
})
export class VideoDetailComponent implements OnInit, OnChanges {
  @Input() video: Video;
  @Output() updateVideoEvent = new EventEmitter<Video>();
  @Output() deleteVideoEvent = new EventEmitter<Video>();
  public editTitle = false;

  constructor() { }

  ngOnInit() {
  }

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  updateVideo() {
    console.log(this.video);
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    console.log(this.video);
    this.deleteVideoEvent.emit(this.video);
  }

}
