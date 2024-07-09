import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'color-and-shape';

  @ViewChild('AM') AM!: ElementRef<HTMLCanvasElement>;

  BG() {
    this.AM.nativeElement.style.backgroundImage = `linear-gradient(${Math.ceil(
      Math.random() * 360
    )}deg, rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 255)}), rgb(${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}))`;
  }

  private ctx!: CanvasRenderingContext2D | null;

  circle() {
    this!.ctx!.beginPath();
    this!.ctx!.arc(
      Math.ceil(Math.random() * window.innerWidth),
      Math.ceil(Math.random() * window.innerHeight),
      Math.ceil(Math.random() * window.innerWidth) / 2,
      0,
      2 * Math.PI
    );
    this!.ctx!.strokeStyle = `rgb(${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)})`;
    this!.ctx!.lineWidth = Math.ceil(Math.random() * 15);
    this!.ctx!.stroke();
  }

  circleFilled() {
    this!.ctx!.beginPath();
    this!.ctx!.arc(
      Math.ceil(Math.random() * window.innerWidth),
      Math.ceil(Math.random() * window.innerHeight),
      Math.ceil(Math.random() * window.innerWidth) / 2,
      0,
      2 * Math.PI
    );
    this!.ctx!.fillStyle = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
      Math.random() * 255
    )}, ${Math.ceil(Math.random() * 255)})`;
    this!.ctx!.fill();
  }

  reset() {
    this!.ctx!.clearRect(
      0,
      0,
      this.AM.nativeElement.width,
      this.AM.nativeElement.height
    );
  }

  @ViewChild('lid') lid!: ElementRef;
  @ViewChild('toolBar') toolBar!: ElementRef;

  hover() {
    this.lid.nativeElement.className = 'lidLift';
  }

  endHover() {
    this.lid.nativeElement.className = '';
  }

  myIntId: any = 'default';

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.ctx = this.AM.nativeElement.getContext('2d');
    this.AM.nativeElement.width = window.innerWidth;
    this.AM.nativeElement.height = window.innerHeight;
    this.BG();
    let canvasCopy = this.AM.nativeElement;
    window.addEventListener('resize', function () {
      canvasCopy.width = window.innerWidth;
      canvasCopy.height = window.innerHeight;
    });
    this.myIntId = setInterval(() => {
      this.circleFilled();
    }, 500);
  }

  updateTitle(event: boolean) {
    clearInterval(this.myIntId);
    this.reset();
    this.toolBar.nativeElement.className = 'toolBarVisible';
  }

  constructor() {}
}
