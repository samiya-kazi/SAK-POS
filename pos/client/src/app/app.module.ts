import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TableEditorComponent } from './pages/table-editor/table-editor.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { PageContainerComponent } from './pages/page-container/page-container.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { EditorPageComponent } from './pages/editor-page/editor-page.component';
import { OrderHistoryPageComponent } from './pages/order-history-page/order-history-page.component';
import { AuthRedirectPageComponent } from './pages/auth-redirect-page/auth-redirect-page.component';
import { SplashLogoComponent } from './components/splash-logo/splash-logo.component';
import { AuthInterceptor } from './interceptors/auth-interceptor/auth-interceptor.service';
import { ErrorInterceptor } from './interceptors/error-interceptor/error-interceptor.service';
import { TokenInterceptor } from './interceptors/token-interceptor/token-interceptor.service';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ReservationPageComponent } from './pages/reservation-page/reservation-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ProcessPaymentPageComponent } from './pages/process-payment-page/process-payment-page.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTagModule } from 'ng-zorro-antd/tag';

const config: SocketIoConfig = { url: environment.API_URL, options: {} };

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    TableEditorComponent,
    PageContainerComponent,
    TablesPageComponent,
    EditorPageComponent,
    OrderHistoryPageComponent,
    AuthRedirectPageComponent,
    SplashLogoComponent,
    OrderPageComponent,
    ReservationPageComponent,
    PaymentPageComponent,
    ProcessPaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzMenuModule,
    NzFormModule,
    NzSelectModule,
    NzSliderModule,
    NzInputNumberModule,
    NzMessageModule,
    NzDrawerModule,
    NzDividerModule,
    NzIconModule,
    NzInputModule,
    NzCardModule,
    NzTabsModule,
    NzDropDownModule,
    NzTableModule,
    NzModalModule,
    NzRadioModule,
    SocketIoModule.forRoot(config),
    NzResultModule,
    NzTagModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
