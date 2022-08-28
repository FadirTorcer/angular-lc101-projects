import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  grounded = true;
  noLeft = false;
  noRight = false;
  noUp = false;
  noDown = false;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.height = 10000;
      this.width = 0;
      rocketImage.style.bottom = '10px';
      this.message = 'Shuttle in flight.';
      this.grounded = false;
      this.warningTrack ();
      this.safeFlight();
    }
  }

  touchdown(rocketImage) {
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    this.grounded = true;
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.')
    this.color = 'green';
    this.touchdown(rocketImage);
    this.message = 'The shuttle has landed';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure the mission must be aborted?');
    if (result) {
      this.color = 'red';
      this.touchdown(rocketImage);
      this.message = 'Mission aborted.';
    }
  }

  warningTrack () {
    if (this.width > 440000 || this.width < 40000 || this.height > 300000 || this.height < 30000) {
      this.color = 'orange';
      this.message = "Shuttle is in flight, but approaching the bounds of safe mission flight."
    } else {
      this.color = "blue";
      this.message = "Shuttle is in flight and all systems are normal."
    }
  }

  safeFlight() {
    if (this.width === 0) {
      this.noLeft = true;
    } else {
      this.noLeft = false;
    }
    if (this.width === 470000) {
      this.noRight = true;
    } else {
      this.noRight = false;
    }
    if (this.height === 10000) {
      this.noDown = true;
    } else {
      this.noDown = false;
    }
    if (this.height === 330000) {
      this.noUp = true;
    } else {
      this.noUp = false;
    }
  }

  moveRocket (rocketImage, direction) {
    if (direction === 'right' && this.width < 470000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
      this.warningTrack ();
      this.safeFlight();
    } else if (direction === 'left' && this.width > 0) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
      this.warningTrack ();
      this.safeFlight();
    } else if (direction === 'up' && this.height <330000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
      this.warningTrack ();
      this.safeFlight();
    } else if (direction === 'down' && this.height > 10000) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
      this.warningTrack ();
      this.safeFlight();
    }
  }
}
