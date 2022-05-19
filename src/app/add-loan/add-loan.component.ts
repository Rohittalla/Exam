import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Loan } from '../loan';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  constructor(private rs:Loan,private rb:FormBuilder) { }
  public loanForm=this.rb.group({
    loanid:['',[Validators.required]],
    loanCustomerName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    loanAmount:['',[Validators.required]],
    dateOfLoan:['',[Validators.required]],
    tenure:['',[Validators.required]],
    
    rateOfInterest:['',[Validators.required]]
    
  });

  ngOnInit() {
   
  }}
