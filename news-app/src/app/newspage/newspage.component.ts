import { Component, ViewChild, OnInit } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.scss']
})
export class NewspageComponent {


  name = 'Angular';
  img = '';
  div =document.getElementById("news");
  body = document.body;
  imgBase64:any='';
  base64Image: string = 'your-base64-image-string'; // Replace with your actual base64 image
  phoneNumber: string = '+919676415887'; // Replace with the recipient's phone number
  dataUrl:any;

  @ViewChild('screen', { static: true }) screen: any;

  @ViewChild('news', { static: true }) news: any;
  constructor(private captureService: NgxCaptureService) {}

  ngOnInit() {}
  divCapture() {
    this.captureService
      .getImage(this.screen.nativeElement, true)
      .pipe(
        tap((img: string) => {
          this.img = img;
          console.log(img);
        })
      )
      .subscribe();
  }
  fullCapture() {
    this.captureService
      .getImage(this.body, true)
      .pipe(
        tap((img: string) => {
          this.img = img;
          console.log(img);
        })
      )
      .subscribe();
  }

  fullCaptureWithDownload() {
    this.captureService
      .getImage(this.body, true)
      .pipe(
        tap((img: string) => {
          this.img = img;
          console.log(img);
        }),
        tap((img) => this.captureService.downloadImage(img))
      )
      .subscribe();
  }
  newsCapture(){
    this.captureService
    .getImage(this.news.nativeElement, true)
    .pipe(
      tap((img: string) => {
       
        // this.imgBase64=img;
        console.log("image",img);
        this.dataUrl = img;
        console.log("dataURL",this.dataUrl);
      }),
      
      // tap((img) => this.captureService.downloadImage(img))
    )
    .subscribe();
   
  
  }

Share(){
  // this.fullCaptureWithDownload();
 this.newsCapture();

  console.log("sharing news")

}
// base64ToDataUrl(base64: string): string {
//   return `data:image/png;base64,${base64}`;
// }
getWhatsappShareLink(): string {
  const encodedMessage = encodeURIComponent('VENKAT TEST IMAGE');
  const encodedImageLink = encodeURIComponent('https://fastly.picsum.photos/id/415/200/300.jpg?hmac=vDE4_1ZCOkfLaRouF0AzF45LoTcdscIgb0stDNZ460k');

  return `https://wa.me/?text=${encodedMessage}%0A${encodedImageLink}`;

  // return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent('Check out this image:')}&image=${encodeURIComponent(this.dataUrl)}`;
}
}
