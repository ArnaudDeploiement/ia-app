// hero.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    private heroData: any = {};

    constructor() {
        // Initialisation des données (simulez les données de votre base de données)
        this.heroData = {
            title: "L'Intelligence Artificielle",
            tagline: "au service des agents administratifs",
            promesse: "Apprenez à maîtriser l'intelligence artificielle grâce à nos formations gratuites. Libérez vous des contraintes répétitives et simplifiez votre quotidien professionnel.",
        };
    }

    getHeroData(): any {
        return this.heroData;
    }

}
