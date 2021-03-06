import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductosOrdenesComponent } from './productos-ordenes/productos-ordenes.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { OrdenesCompraComponent } from './ordenes-compra/ordenes-compra.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FooterAllComponent } from './footer-all/footer-all.component';
import { ManejoCertificadosComponent } from './manejo-certificados/manejo-certificados.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserInfoComponent,
    ProductosOrdenesComponent,
    FiltrosComponent,
    OrdenesCompraComponent,
    FooterAllComponent,
    ManejoCertificadosComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path: 'ordenesCompra/producto', component: ProductosOrdenesComponent},
        {path: 'ordenesCompra', component: OrdenesCompraComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
