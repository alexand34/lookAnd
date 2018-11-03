import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview';
@Component({
  selector: 'camera-ionic',
  templateUrl: 'camera.html'
})
export class CameraPage implements OnInit {
  picture: any;
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
  constructor(public modalCtrl: ModalController,
    private camera: CameraPreview,
    private http: HttpClient,
    public viewCtrl : ViewController) {
  }
  ngOnInit() {
    // start camera
    this.camera.startCamera(this.cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });
  }

  presentProfileModal() {
    const modal = this.modalCtrl.create('ModalBasicPage');
    modal.present();
  }

  takePicture() {
    // take a picture
    this.camera.takePicture(this.cameraPreviewOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
      let imgString = this.picture;
      this.http.post("http://lookandweb.azurewebsites.net/api/values", '"' + imgString + '"', { headers: {'Access-Control-Allow-Origin': '*', 'Content-Type' : 'application/json'}})
      .subscribe(data => {
        console.log(data['_body']);
        //this.camera.stopCamera();
        this.presentProfileModal();
       }, error => {
        console.log(error);
      });     
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }
}