import {
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

export class TitleComponent implements OnInit {
  constructor() {}

  @ViewChild('T1') T1!: ElementRef;
  @ViewChild('T2') T2!: ElementRef;
  @ViewChild('T3') T3!: ElementRef;
  @ViewChild('T4') T4!: ElementRef;
  @ViewChild('T5') T5!: ElementRef;
  @ViewChild('T6') T6!: ElementRef;
  @ViewChild('T7') T7!: ElementRef;
  @ViewChild('T8') T8!: ElementRef;
  @ViewChild('T9') T9!: ElementRef;
  @ViewChild('T10') T10!: ElementRef;
  @ViewChild('T11') T11!: ElementRef;
  @ViewChild('titleWrapper') titleWrapper!: ElementRef;

  explode() {
    this.titleWrapper.nativeElement.className = 'TWHidden';
  }

  @Output() titleActive = new EventEmitter<boolean>();

  killTitle() {
    this.explode();
    this.titleActive.emit(false);
  }

  finishTitle!: Function;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let titleArray = [
      this.T1.nativeElement,
      this.T2.nativeElement,
      this.T3.nativeElement,
      this.T4.nativeElement,
      this.T5.nativeElement,
      this.T6.nativeElement,
      this.T7.nativeElement,
      this.T8.nativeElement,
      this.T9.nativeElement,
      this.T10.nativeElement,
      this.T11.nativeElement,
    ];

    for (let letter of titleArray) {
      letter.style.color = `rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
        Math.random() * 255
      )}, ${Math.ceil(Math.random() * 255)})`;
      if (letter.id !== 'T6') {
        letter.style.animation = `letterFloat ${Math.ceil(
          Math.random() * 3
        )}s ease-out 0s infinite alternate forwards`;
      }
    }
    const TWCopy = this.titleWrapper;
    const finishTitle = function (e: any) {
      if (e.propertyName === 'transform') {
        TWCopy.nativeElement.style.display = 'none';
      }
    };

    this.titleWrapper.nativeElement.addEventListener(
      'transitionend',
      finishTitle
    );
  }
}
