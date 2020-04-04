import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AmplifyService } from "aws-amplify-angular";

@Component({
  selector: "conpono-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private amplifyService: AmplifyService, private router: Router) {}

  ngOnInit() {
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === "signedIn") {
        this.router.navigate(["/new-store"]);
      }
    });
  }
}
