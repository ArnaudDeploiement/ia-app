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
                title: "test",
                content: "test",
                level: "Débutant",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 2,
                title: "test",
                content: "test",
                level: "Débutant",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 3,
                title: "test",
                content: "test",
                level: "Débutant",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 4,
                title: "test",
                content: "test",
                level: "test",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 4,
                title: "test",
                content: "test",
                level: "test",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 4,
                title: "test",
                content: "test",
                level: "test",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 4,
                title: "test",
                content: "test",
                level: "test",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },
            {
                id: 4,
                title: "test",
                content: "test",
                level: "test",
                img: 'https://www.agora.software/wp-content/uploads/2023/05/Chat-GPT.png',
            },

        ];
    }

    getModuleData(): Observable<any[]> {
        return of(this.moduleData);
    }

}