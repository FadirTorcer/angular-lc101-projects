import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets = ['turtle', 'dog', 'cat', 'fish'];

  constructor() { }

  ngOnInit() {
  }

}
