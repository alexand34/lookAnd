import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import {SelectMalePage} from '../pages/select-male/select-male';
import { ListPage } from '../pages/list/list';
import { File } from '@ionic-native/file';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPage } from '../pages/camera/camera';
import { HTTP } from '@ionic-native/http';
import { FileTransfer } from '@ionic-native/file-transfer';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
import { ModalController } from 'ionic-angular'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CameraPage,
    SelectMalePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CameraPage,
    SelectMalePage
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
