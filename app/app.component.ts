import { Component,ViewEncapsulation } from '@angular/core';
import { HTTP_PROVIDERS, Http, Response } from '@angular/http';
import 'rxjs/Rx';   // Load all features

@Component({
    selector: 'my-app',
    template: `
    <div>
        <div class='container'>
            <h1>{{pageTitle}}</h1>
        </div>
     </div>
     `,
    providers: [HTTP_PROVIDERS],
    styleUrls: ['app/app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    pageTitle: string = 'Hello World';
    constructor(private _http : Http) {
        
    }
}
