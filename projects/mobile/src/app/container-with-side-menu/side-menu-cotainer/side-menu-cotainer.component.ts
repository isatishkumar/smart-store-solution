import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SideMenu } from '../side-menu';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-side-menu-cotainer',
  templateUrl: './side-menu-cotainer.component.html',
  styleUrls: ['./side-menu-cotainer.component.scss']
})
export class SideMenuCotainerComponent implements OnInit {
  @Input() menuList: SideMenu[];
  @ViewChild('drawer') drawer: MatDrawer;
  activeMenu: SideMenu;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  // navigate to route
  navigateTo(menu: SideMenu) {
    this.activeMenu = menu;
    this.drawer.close();
    this.router.navigate([`./${menu.path}`], { relativeTo: this.route });
  }
}
