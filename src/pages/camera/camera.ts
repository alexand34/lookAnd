import { Component, OnInit, OnDestroy } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'camera-ionic',
  templateUrl: 'camera.html'
})
export class CameraPage implements OnInit, OnDestroy{

  private image: string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public alertCtrl: AlertController,
    private domSanitizer: DomSanitizer) {
  }

  ngOnInit(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.displayErrorAlert(err);
      });
  }

  ngOnDestroy(){
    this.image = '';
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
  }
}
