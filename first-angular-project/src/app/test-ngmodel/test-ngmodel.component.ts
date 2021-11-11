import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-ngmodel',
  templateUrl: './test-ngmodel.component.html',
  styleUrls: ['./test-ngmodel.component.css']
})
export class TestNgmodelComponent implements OnInit {
  product: string;

  constructor() { 
    this.product = " ";
  }

  ngOnInit(): void {
  }

}
