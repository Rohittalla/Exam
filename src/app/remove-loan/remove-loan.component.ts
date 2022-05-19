import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
@Component({
  selector: 'app-remove-loan',
  templateUrl: './remove-loan.component.html',
  styleUrls: ['./remove-loan.component.css']
})
export class RemoveLoanComponent implements OnInit {

  constructor(private re:Service) { }
 
  ngOnInit() {
  }
  public loan;
  remove(id){
    this.loan=this.re.deleteLoan(id);
  }
}
