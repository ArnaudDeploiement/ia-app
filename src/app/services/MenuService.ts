// hero.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MenuService {

    private menuData: any = {};

    constructor() {

        this.menuData = {
            logo: 'Admin AI',
            Menu1: 'Modules',
            Menu2: 'A propos',
            button: 'Contactez-nous'
        };
    }

    getMenuData(): any {
        return this.menuData;
    }

}
