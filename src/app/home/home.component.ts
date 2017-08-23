import { Component, OnInit } from '@angular/core';
import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

import {SuiModule} from 'ng2-semantic-ui';


export class Teams {
  title: string;
  img: string;
  rating: string;
  completed: boolean;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {

teams: Teams[] = [
  {
      title: 'REAL MADRID',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/243.png',
      rating: '5',
      completed: false
  },
  {
      title: 'JUVENTUS',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/45.png',
      rating: '4',
      completed: false
  },
  {
      title: 'BAYERN MÜNCHEN',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/21.png',
      rating: '5',
      completed: false
  },
  {
      title: 'CHELSEA',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/5.png',
      rating: '5',
      completed: false
  },
  {
      title: 'MANCHESTER UNITED',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/11.png',
      rating: '4',
      completed: false
  },
  {
      title: 'PARIS SAINT-GERMAIN',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/73.png',
      rating: '4',
      completed: false
  },
  {
      title: 'BARCELONA',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/241.png',
      rating: '5',
      completed: false
  },
  {
      title: 'ARSENAL',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/1.png',
      rating: '4',
      completed: false
  }
];


team1 = [];
team2 = [];
IsVisible = true;
button_name ;

  title = '';

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  Close() {
    this.IsVisible = this.IsVisible ? false : true;
    console.log('close');
  }

  RandomTeam(array) {
    console.log('random',array);
    this.team1 = array[Math.floor(Math.random() * array.length)];
    this.team2 = array[Math.floor(Math.random() * array.length)];
    

    if (this.team1 === undefined || this.team2 === undefined)
      {
        this.RandomTeam(array);
      }

    if (this.team1 === this.team2) 
      {
        this.RandomTeam(array);
      }

    this.IsVisible = this.IsVisible ? false : true;
    this.button_name = 'Close';
    

  }

  Reset() {
    location.reload();
    console.log('reset');
  }

  DeleteTeam(team) {
    var index = this.teams.indexOf(team);
    this.teams.splice(index, 1);   
    console.log('delete', team);
  }

}




