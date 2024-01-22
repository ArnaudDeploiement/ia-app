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
            promesse: "Agents Administratifs, simplifiez votre quotidien professionnel avec l'intelligence artificielle. AdminAI vous propose des formations gratuites. Libérez-vous des contraintes répétitives et gagnez du temps dans votre journée.",
        };
    }

    getHeroData(): any {
        return this.heroData;
    }

}
