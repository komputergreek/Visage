import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { SuggestedListComponent } from './suggested-list/suggested-list.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'friends', component: MemberListComponent},
            { path: 'friends/:id', component: MemberDetailComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'suggested', component: SuggestedListComponent},
            { path: 'profile', component: ProfileComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];