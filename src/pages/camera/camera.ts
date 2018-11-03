import { Component, OnInit, OnDestroy } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'camera-ionic',
  templateUrl: 'camera.html'
})
export class CameraPage implements OnInit, OnDestroy {

  private image: string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public alertCtrl: AlertController,
    private domSanitizer: DomSanitizer,
    private http: HTTP) {
  }

  ngOnInit() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true
    }
    this.http.setHeader('*', 'Content-Type', 'application/octet-stream');
    this.http.setHeader('*', 'Ocp-Apim-Subscription-Key', '8a9c440964b64b07bc84a1b2af6b6384');
    // this.camera.getPicture(options).then((imageData) => {
      //this.image = 'data:image/jpeg;base64,' + imageData;
      //var image = new Image();
      //image.src = 'data:image/jpeg;base64,' + imageData;
      // let binArray = this.binEncode(imageData.replace(/data\:image\/jpeg;base64,/, ''));
      // this.displayErrorAlert(binArray);
      // this.http.post('https://westeurope.api.cognitive.microsoft.com/vision/v1.0/analyze?visualFeatures=color&language=en', { binArray }, {})
    //     .then(data => {
    //       this.displayErrorAlert(data.data);
    //     })
    //     .catch(error => {
    //       this.displayErrorAlert(error.error);
    //       console.log(error.status);
    //       console.log(error.error); // error message as string
    //       console.log(error.headers);
    //     });
    // }, (err) => {
    //   alert(JSON.stringify(err, null, 4));
    //   this.displayErrorAlert(err);
    // });
  }

  ngOnDestroy() {
    this.image = '';
  }

  displayErrorAlert(err) {
    console.log(err);
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: err,
      buttons: ['OK']
    });
    alert.present();
  }
}
