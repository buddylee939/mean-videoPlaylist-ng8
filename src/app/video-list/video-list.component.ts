import { Video } from './../video';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() videosList: Video[];
  @Output() SelectedVideo = new EventEmitter<Video>();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Video) {
    this.SelectedVideo.emit(vid);
  }
}
