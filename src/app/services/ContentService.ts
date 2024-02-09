// hero.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ContentService {

    private contentData: any = {};

    constructor() {

        this.contentData = {
            Intro: "Bienvenue sur la plateforme de formation de l'ERP AIMAIRA. Apprenez à maîtriser notre ERP conçu pour aider les établissements du supérieur : de la candidature à la diplomation des apprenants.",
            TitleContent: "ERP - Formation"
        };
    }

    getContentData(): any {
        return this.contentData;
    }

}
