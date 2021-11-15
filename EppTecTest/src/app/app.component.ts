import { ProviderAstType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {NgDecisionrulesService, SolverStrategyEnum, SolverTypeEnum } from '@decisionrules/ng-decisionrules';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  monthly(){
    document.getElementById("ID1")!.innerHTML = "$" + this.price1 
    document.getElementById("ID2")!.innerHTML = "$" + this.price3 
    document.getElementById("ID3")!.innerHTML = "$" + this.price5 
    document.getElementById("ID4")!.innerHTML = "$" + this.price7 
  }

  yearly(){
    document.getElementById("ID1")!.innerHTML = "$" + this.price2
    document.getElementById("ID2")!.innerHTML = "$" + this.price4
    document.getElementById("ID3")!.innerHTML = "$" + this.price6
    document.getElementById("ID4")!.innerHTML = "$" + this.price8
  }

  
  public inf1: string | undefined;
  public inf2: string | undefined;
  public inf3: string | undefined;
  public inf4: string | undefined;
  public inf5: string | undefined;
  public inf6: string | undefined;
  public inf7: string | undefined;
  public inf8: string | undefined;
  public price1: string | undefined;
  public price2: string | undefined;
  public price3: string | undefined;
  public price4: string | undefined;
  public price5: string | undefined;
  public price6: string | undefined;
  public price7: string | undefined;
  public price8: string | undefined;

  constructor(private decisionrulesService: NgDecisionrulesService, ) {
  }

  ngOnInit(): void {
    const inputData1 = 
    {IDprodukty:"P1",Period:1};

    const inputData2 = 
    {IDprodukty:"P1",Period:2};

    const inputData3 = 
    {IDprodukty:"P2",Period:1};

    const inputData4 = 
    {IDprodukty:"P2",Period:2};

    const inputData5 = 
    {IDprodukty:"P3",Period:1};

    const inputData6 = 
    {IDprodukty:"P3",Period:2};

    const inputData7 = 
    {IDprodukty:"P4",Period:1};

    const inputData8 = 
    {IDprodukty:"P4",Period:2};

    this.decisionrulesService.solveRule(inputData1, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf1 = JSON.stringify(data[0]);
      this.price1 = this.inf1.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData2, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf2 = JSON.stringify(data[0]);
      this.price2 = this.inf2.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData3, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf3 = JSON.stringify(data[0]);
      this.price3 = this.inf3.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData4, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf4 = JSON.stringify(data[0]);
      this.price4 = this.inf4.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData5, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf5 = JSON.stringify(data[0]);
      this.price5 = this.inf5.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData6, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf6 = JSON.stringify(data[0]);
      this.price6 = this.inf6.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData7, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf7 = JSON.stringify(data[0]);
      this.price7 = this.inf7.slice(9, -1)
    });
    this.decisionrulesService.solveRule(inputData8, 'ca0fbb72-60a9-29cf-dbc2-4b56cba3aa0b', SolverStrategyEnum.STANDARD, SolverTypeEnum.RULE).then(data => {
      console.log(data);

      this.inf8 = JSON.stringify(data[0]);
      this.price8 = this.inf8.slice(9, -1)
    });
  } 

  
}