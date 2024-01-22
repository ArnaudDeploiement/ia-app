// hero.service.ts

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ContentService {

    private contentData: any = {};

    constructor() {

        this.contentData = {
            intro: "ChatGPT est un outil idéal pour les agents administratifs grâce à sa compréhension contextuelle, sa polyvalence, et sa capacité à automatiser des tâches répétitives. Il simplifie la rédaction, la gestion des demandes, et offre une assistance intelligente.",

        };
    }

    getContentData(): any {
        return this.contentData;
    }

}
