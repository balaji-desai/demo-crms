import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { LoginService } from "~/shared/login.service";
import { Login } from "~/Framework/login.model";
import { TokenProvider } from "~/Framework/token.provider";

@Component({
    moduleId: module.id,
    selector: 'app-shared',
    templateUrl: './shared.component.html',
    styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
    public loginObj: Login = new Login();
    public loginform: FormGroup;
    constructor(private routerExtensions: RouterExtensions,
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private tokenProvider: TokenProvider) {
        this.loginform = this.formBuilder.group({
            Email: ['', [
                Validators.required,
                //Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
            ]
            ]
            ,
            Password: ['',
                [Validators.required,
                Validators.maxLength(8),
                    //Validators.minLength(4)    
                ]
            ]
        });
    }

    ngOnInit() {

    }

    submit() {
        this.loginObj.username = this.loginform.get("Email").value;
        this.loginObj.password = this.loginform.get("Password").value;
        var _me = this;
        this.loginService.Login(this.loginObj).then(
            function (result) {
                //this.router.navigate(["/admin"]);
                if (result.UserTypeId == 3) {
                    _me.routerExtensions.navigate(["admin"], {
                        transition: {
                            name: "none",
                            duration: 2000,
                            curve: "linear"
                        },
                        clearHistory: true
                    });
                }

            },
            function (error) {

            }
        );
    }

}
