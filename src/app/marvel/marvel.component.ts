import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  title = 'Welcome to Marvel studio';
  constructor() { }

  getName(prefrix: string, name: string) {
    return prefrix + name;
  }

  // getHeroName(name: string) {
  //  if (name === 'Tony') {
    //  return 'IRON MAN';
  //  }
  //  if (name === 'Nat') {
    //  return 'BACK WIDOW';
  //  }
  // }

  ngOnInit() {
  }
}
