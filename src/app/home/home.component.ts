import { Component, OnInit } from '@angular/core';
import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

import {SuiModule} from 'ng2-semantic-ui';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


export class Teams {
  title: string;
  img: string;
  rating: string;
  completed: boolean;
}

export class Items {
  name: string;
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 
export class HomeComponent implements OnInit {
items: Items[] = [{ name: 'archie' }, { name: 'jake' }, { name: 'richard' }];

apiUrlPremierLeague = 'http://api.football-data.org/v1/competitions/445/teams?timeFrame=n1';
apiUrlPrimeraDivision = 'http://api.football-data.org/v1/competitions/455/teams';
data: any = {};
response = [];

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
    },
    {
        title: 'ATLÉTICO MADRID',
        img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/240.png',
        rating: '4',
        completed: false
    },
    {
      title: 'MANCHESTER CITY',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/10.png',
      rating: '4',
      completed: false
    },
    {
      title: 'BORUSSIA DORTMUND',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/22.png',
      rating: '4',
      completed: false
    },
    {
      title: 'LIVERPOOL',
      img: 'http://futhead.cursecdn.com/static/img/17/clubs_large/9.png',
      rating: '4',
      completed: false
    },
    
  ];
  private token = '3f01ed0ee987480c810586f4e9e22433';
  i = 0;
  loader = 100;
  team1 = [];
  team2 = [];
  resultsPremierLeague = [];
  resultsPrimeraDivision = [];
  IsVisible = true;
  button_name ;
  title = '';
  constructor(private http: Http) {}
  
  ngOnInit() {

  }
//HTTP request fore football data
PremierLeague(){

    let myHeaders = new Headers();
    myHeaders.append('X-Auth-Token', this.token); 

    let options = new RequestOptions({ headers: myHeaders });
        // Make the HTTP request:
        this.http.get(this.apiUrlPremierLeague, options).subscribe(
          (res: Response)=> {
            const DataRequest = res.json();
            this.resultsPremierLeague = DataRequest;
            console.log('PremierLeague', DataRequest);
          }
        );
  }

  PrimeraDivision(){
    
        let myHeaders = new Headers();
        myHeaders.append('X-Auth-Token', this.token); 
    
        let options = new RequestOptions({ headers: myHeaders });
            // Make the HTTP request:
            this.http.get(this.apiUrlPrimeraDivision, options).subscribe(
              (res: Response)=> {
                const DataRequest = res.json();
                this.resultsPrimeraDivision = DataRequest;
                console.log('PrimeraDivision', DataRequest);
              }
            );
      }

  Test(){
    console.log('Test');

      setTimeout(()=>{
        this.loader =this.loader + 10;
        console.log('timeout');
      },1000);

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




