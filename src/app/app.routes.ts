import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';

export const routes: Routes = [{

    path:'',
    component:HomeComponent,
    title:'Accueil'

},

{
    path:'contact',
    component:ContactComponent,
    title:'contact'
}


];
