import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuList = [
    {
      path: '',
      title: 'Profile',
      icon: 'account_circle'
    },
    {
      path: 'category',
      title: 'Category',
      icon: 'category'
    },
    {
      path: 'brand',
      title: 'Brands',
      icon: 'toys'
    },
    {
      path: 'godown',
      title: 'Godowns',
      icon: 'home'
    },
    {
      path: 'unit',
      title: 'Unit Systems',
      icon: 'all_inbox'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
