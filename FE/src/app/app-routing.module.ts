import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostCreateComponent} from './components/post-create/post-create.component';
import {PostEditComponent} from './components/post-edit/post-edit.component';
import {PostDeleteModalComponent} from './components/post-delete-modal/post-delete-modal.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginComponent} from './components/login/login.component';
import {DishDetailsComponent} from './components/dish-details/dish-details.component';
import {CartComponent} from './components/cart/cart.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommentComponent } from './components/comment/comment.component';
import {NgxLoadingModule} from 'ngx-loading';

const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'dish-details/:id', component: DishDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post-create', component: PostCreateComponent},
  {path: 'post-edit/:id', component: PostEditComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule, NgbModule, NgxLoadingModule
  ],
  exports: [RouterModule, HeaderComponent, FooterComponent],
  declarations: [
    PageNotFoundComponent,
    PostListComponent,
    PostCreateComponent,
    PostEditComponent,
    PostDeleteModalComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DishDetailsComponent,
    CartComponent,
    CommentComponent],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }]
})
export class AppRoutingModule {
}
