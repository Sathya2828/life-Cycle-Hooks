import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit ,OnChanges{
  @Input()
  parentData!: string;
  ngOnInit(): void {
    console.log('NgOnInit is called');
  }
constructor(){
  console.log('Constructor is called');
}
  ngOnChanges(changes:SimpleChanges) {
    console.log('NgOnChages not implemented.',changes);
  }
}
