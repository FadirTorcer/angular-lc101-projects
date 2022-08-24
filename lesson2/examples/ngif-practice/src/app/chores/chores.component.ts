import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Empty dishwasher'];
   finishedChores = ['Complete LaunchCode prep work', 'Buy groceries', 'Clean kitchen', 'Call mom'];

   targetImage = 'https://cdn.pixabay.com/photo/2017/02/16/10/20/target-2070972_1280.png';
   
   constructor() { }

   ngOnInit() {
   }

}
