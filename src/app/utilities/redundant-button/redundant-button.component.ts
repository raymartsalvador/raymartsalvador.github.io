import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-redundant-button',
  templateUrl: './redundant-button.component.html',
  styleUrls: ['./redundant-button.component.scss'],
})
export class RedundantButtonComponent {
  @Input() buttonText = '';
  @Input() function: Function | undefined;
  @Input() fontAwesome = '';


  _ASSETS = environment._ASSETS;

  whatFunction() {
    // Create a link element
    const link = document.createElement('a');
    // Set the target attribute to '_blank' to open the file in a new tab
    link.setAttribute('target', '_blank');
    // Set the href attribute to the URL of the file you want to download
    link.setAttribute('href', this._ASSETS +'/assets/files/RaymartSalvador.pdf');
    // Set the download attribute to the desired filename for the downloaded file
    link.setAttribute('download', 'RaymartSalvador.pdf');
    // Append the link element to the body of the page
    document.body.appendChild(link);
    // Simulate a click on the link to initiate the download
    link.click();
    // Remove the link element from the page once the download has started
    link.remove();
    // Log a message to the console to indicate that the download has started
    console.log('Download started');
  }
}
