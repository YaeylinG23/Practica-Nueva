import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  constructor() {}
  ngOnInit(): void{
    console.log("Espero que tengas un buen dia");
    let numero=10;
    debugger;
    numero=20;
    numero=30;
    console.log(numero);
  }

}
