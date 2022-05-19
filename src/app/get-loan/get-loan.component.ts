import { Component, OnInit } from '@angular/core';

import { Service } from '../service';
@Component({
  selector: 'app-get-loan',
  templateUrl: './get-loan.component.html',
  styleUrls: ['./get-loan.component.css']
})
export class GetLoanComponent implements OnInit {

  constructor(private rs:Service) { }
  public even:boolean=true;
  public allLoans=[];
  ngOnInit() {
    this.allLoans=this.rs.getloans();
  }

}
