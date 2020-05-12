import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main-menu',
    template: `<router-outlet></router-outlet>`,
})
export class MainMenuComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}
