import { Component, OnInit } from '@angular/core';
import { NavbarItem } from '../../my_classes/navbarItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbar_items = [
    new NavbarItem('Home', '/'),
    new NavbarItem('Users', '/users'),
    new NavbarItem('Contact', '/contact'),
    new NavbarItem('About', '/about')
  ];

  constructor() { }

  ngOnInit() {
  }

}
