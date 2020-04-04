import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'conpono';
  signedIn: boolean = false;
  constructor(private amplifyService: AmplifyService) {}

  ngOnInit() {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === "signedIn";
    });
  }

}
