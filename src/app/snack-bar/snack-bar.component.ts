import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

}
