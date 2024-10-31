import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-scrolling-banner',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './scrolling-banner.component.html',
  styleUrl: './scrolling-banner.component.scss'
})
export class ScrollingBannerComponent {

}
