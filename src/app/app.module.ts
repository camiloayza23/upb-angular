import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { T0807Component } from './components/t0807/t0807.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { TestPipe } from './pipes/test.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { PedidosyaComponent } from './components/pedidosya/pedidosya.component';
import { TipoPipe } from './pipes/tipo.pipe';

@NgModule({
  declarations: [
    //Componentes directivas
    AppComponent,
    TestComponent,
    T0807Component,
    TestPipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective,
    PedidosyaComponent,
    TipoPipe
  ],
  imports: [
    //Modulos dentro de este modulo
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [
    //Servicios
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
