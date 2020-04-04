import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'conpono';
  signedIn: boolean = false;
  constructor(private amplifyService: AmplifyService, private router: Router) {}

  ngOnInit() {
    this.amplifyService.authStateChange$.subscribe(authState => {
      this.signedIn = authState.state === "signedIn";
    });
  }

  public signOut(): void {
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['']);
    })
    .catch(err => console.log(err));
  }

}
