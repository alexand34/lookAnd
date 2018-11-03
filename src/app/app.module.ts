import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPage } from '../pages/camera/camera';
import { HttpClientModule } from '@angular/common/http'; 
import { Camera } from '@ionic-native/camera';
import { CameraPreview } from '@ionic-native/camera-preview';
import { ModalController } from 'ionic-angular' 
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    Camera,
    CameraPreview,
    ModalController,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
