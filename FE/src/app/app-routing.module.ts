import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostDeleteModalComponent } from './components/post-delete-modal/post-delete-modal.component';


const routes: Routes = [
  {path: '', component: PostListComponent},
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
    MatDialogModule
  ],
  exports: [RouterModule],
  declarations: [
    PageNotFoundComponent,
    PostListComponent,
    PostCreateComponent,
    PostEditComponent,
    PostDeleteModalComponent],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }]
})
export class AppRoutingModule {
}
