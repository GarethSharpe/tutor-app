import { Component, OnInit } from '@angular/core';

import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	message: string;

 	constructor(private snackBar: MdSnackBar) { }

 	openSnackBar(email: string, action: string) {
 		//console.log("clicked");
    	this.snackBar.open(email, action, { 
    		duration: 5000, 
    	});
    }

    ngOnInit() {

    }

}
