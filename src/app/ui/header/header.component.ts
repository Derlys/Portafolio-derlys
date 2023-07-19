import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links : Array<any> = [
    {
      name: "Inicio",
      link: "/"
    },
    {
      name: "Cursos",
      link: "/course-logic"
    },
    {
      name: "Blog",
      link: "/"
    }
  ];
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


  constructor() {

  }

  ngOnInit(): void {
  }

}
