import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { DetailComponent } from './routes/detail/detail.component';

export const routes: Routes = [{

    path: '',
    component: HomeComponent,
    title: 'Accueil'

},

{
    path: 'contact',
    component: ContactComponent,
    title: 'contact'
},
{
    path: 'DetailComponent/:id',
    component: DetailComponent,
    title: 'Module'
}


];
