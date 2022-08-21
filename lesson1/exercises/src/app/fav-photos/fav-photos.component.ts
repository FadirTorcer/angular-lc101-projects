import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos/Images';
  image1 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YoxnK7R0RRnoVej_IbdD5gHaHa%26pid%3DApi&f=1';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aDTnllO1o8mjCpVWJ7uTgAHaHA%26pid%3DApi&f=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.VKetZy1zSBi8rWWJA7KD7AHaHa%26pid%3DApi&f=1';

  constructor() { }

  ngOnInit() {
  }

}