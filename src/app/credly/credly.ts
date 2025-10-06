import { Component, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-credly-badge',
  template: `
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      [attr.data-share-badge-id]="badgeId"
      data-share-badge-host="https://www.credly.com"
    ></div>
  `,
})
export class CredlyBadgeComponent implements OnInit, OnDestroy {
  private scriptElement?: HTMLScriptElement;
  @Input() badgeId!: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Crea y adjunta el script como en React
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    this.scriptElement.async = true;
    document.body.appendChild(this.scriptElement);
  }

  ngOnDestroy(): void {
    // Limpieza al desmontar el componente
    if (this.scriptElement && document.body.contains(this.scriptElement)) {
      document.body.removeChild(this.scriptElement);
    }
  }
}
