import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'hooks';
  data!: string;
  constructor(){}
  handleData(e: { target: { value: string; }; }){
    this.data=e.target.value;
  }
  
}
