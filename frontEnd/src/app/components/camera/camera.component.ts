import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit, OnDestroy {
  @ViewChild('video') videoElement!: ElementRef;
  @ViewChild('canvas') canvasElement!: ElementRef;
  public photo: string | null = null;
  private videoStream: MediaStream | null = null;

  ngOnInit(): void {
    this.initCamera();
  }

  initCamera() {
    const constraints = {
      video: {
        facingMode: 'environment',
        width: { ideal: 1280 }, 
        height: { ideal: 720 }
      }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        this.videoStream = stream;
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch(err => {
        console.error('Error al acceder a la cámara: ', err);
      });
  }

  takePicture() {
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (window.innerWidth < window.innerHeight) {
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(90 * Math.PI / 180);
      context.drawImage(video, -canvas.height / 2, -canvas.width / 2, canvas.height, canvas.width);
    } else {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    this.photo = canvas.toDataURL('image/png');
  }

  ngOnDestroy(): void {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
    }
  }
}
