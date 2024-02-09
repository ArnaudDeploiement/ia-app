import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModuleService {

    private moduleData: any = [];

    constructor() {

        this.moduleData = [
            {
                id: 1,
                title: "C'est quoi un ERP ?",
                content: "Comprendre la puissance d'un ERP",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Débutant",
                img: 'https://www.beaboss.fr/Assets/Img/BREVE/2019/6/340031/Quels-sont-avantages-inconvenients-logiciel-ERP-SaaS--F.jpg',
            },
            {
                id: 2,
                title: "Introduction à l'ERP AIMAIRA",
                content: "Découvrir notre solution digitale",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/bjutzS_soG8?si=UCw2VGfHD0AYIpVr",
                level: "Débutant",
                img: 'https://m.essec.edu/media/cache/fe/39/fe3974a93eba3399111a20eb0930c1a9.jpg'
            },
            {
                id: 3,
                title: "Gestion des candidatures",
                content: "Gérer facilement le traitement des candidatures",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Intermédiaire",
                img: 'https://attractivecv.com/wp-content/uploads/2022/07/comment-faire-une-candidature-spontanee.jpg',
            },
            {
                id: 4,
                title: "Gestion des étudiants",
                content: "Organiser votre vie étudiante",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Intermédiaire",
                img: 'https://www.sante-sur-le-net.com/wp-content/uploads/2021/01/psy-etudiant.jpg',
            },
            {
                id: 5,
                title: "Gestion du personnel",
                content: "Coordonner la vie du personnel",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Intermédiaire",
                img: 'https://www.shutterstock.com/image-photo/human-resource-talent-management-recruitment-600nw-2129474939.jpg',
            },
            {
                id: 6,
                title: "Gestion des programmes",
                content: "Créer des programmes intelligement",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Intermédiaire",
                img: 'https://media.planview.com/wp-content/uploads/2018/01/Program-Management-1-c.jpg'
            },
            {
                id: 7,
                title: "Gestion des finances",
                content: "Optimiser vos résultats financiers",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Expert",
                img: 'https://www.dynamique-mag.com/wp-content/uploads/6d3e1d04a6540332e1247436547e3d49.jpg',
            },
            {
                id: 8,
                title: "Administration avancée",
                content: "Aller plus loin dans l'usage de l'ERP",
                former: 'Formation par Arnaud Guiovanna',
                link: "https://www.youtube.com/embed/71XB83t8q5U?si=ZWK6AXqdxtad36ou",
                level: "Expert",
                img: 'https://aujourdhui.ma/wp-content/uploads/2023/04/Administration.jpg',
            },

        ];
    }

    getModuleData(): Observable<any[]> {
        return of(this.moduleData);
    }

    getModuleDatabById(id: number): Observable<any[]> {
        return of(this.moduleData.find((moduleData: any) => moduleData.id === id))
    }
}