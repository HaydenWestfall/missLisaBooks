import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ButtonComponent {

  @Input('text')text: string;
  @Input('btn-bg')backgroundColor: string;
  @Input('btn-border')border: string;
  @Input('btn-color')color: string;
  @Input('hoverBg')hoverBg: string;
  @Input('hoverBorder')hoverBorder: string;
  @Input('hoverColor')hoverColor: string;

  @Output('buttonClicked')buttonClicked = new EventEmitter<any>();
}
