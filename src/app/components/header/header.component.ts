import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  
  title:string = "this is header"
  list:string [] =["A","B","C"]

  show:boolean = true
  role:number = 1 
  getData(){
    console.log("clicked!");
    alert("clicked!");
  }
  ngOnInit(): void {

    console.log(this.today);
  }
  public today=new Date();

  keyUpAction(event){
    console.log(event)
  } 
}
