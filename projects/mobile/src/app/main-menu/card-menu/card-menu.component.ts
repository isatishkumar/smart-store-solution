import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {
  menus = [
    {
      order: 1,
      featureTitle: 'Dashboard',
    },
    {
      order: 2,
      featureTitle: 'Quick Sales',
    },
    {
      order: 3,
      featureTitle: 'Orders',
    },
    {
      order: 4,
      featureTitle: 'Inventory',
      path: 'inventory'
    },
    {
      order: 5,
      featureTitle: 'Employers',
    },
    {
      order: 6,
      featureTitle: 'Reports',
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToMenu(menu) {
    this.router.navigate([`/${menu.path}`]);
  }

}
