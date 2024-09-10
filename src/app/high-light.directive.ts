import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class HighLightDirective {

  @Input() HighlightColor: string = ''
  constructor(private el: ElementRef) {
    console.log('in highlight')
   }

  @HostListener('mouseenter') onMpuseEnter() {
    this.highlight(this.HighlightColor || 'yellow')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}


