import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input() rhTitle?: string | TemplateRef<void>;
  @Input() rhExtra?: string | TemplateRef<void>;
}
