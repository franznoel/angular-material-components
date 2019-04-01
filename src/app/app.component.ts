import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Material Components';
    theme: string = 'Deep Purple Amber';

    @HostBinding('class') componentCssClass;

    constructor(public overlayContainer: OverlayContainer) {}

    onSetTheme(theme: string) {
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
}
