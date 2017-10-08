import {Component, Input} from "@angular/core";
@Component({
  selector: 'available-icon',
  templateUrl: './available-icon.component.html'
})
export class AvailableIconComponent {
  @Input()
  private available: boolean;

  getIconName() {
    return this.available ? "checkmark" : "close";
  }

  getButtonColor() {
    return this.available ? "secondary" : "danger";
  }

  getAvailableText() {
    return this.available ? "Available" : "Unavailable";
  }
}
