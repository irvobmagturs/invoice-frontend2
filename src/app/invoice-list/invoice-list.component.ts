import { Component, OnInit } from '@angular/core';
import {Invoice002} from '../invoice002';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  //public invoice: Invoice = {id: 1, name: 'Invoice001'};
  /* invoices = [
       {id:'1', invoiceNumber:'201800ab',  recipient: 'Mustermann GmbH', invoiceDate:'2018-01-01', timeSpan:'2017-01-01 bis 2017-12-31',
          invoiceState:'Entwurf', wholeCost:'3000,00€', countReminders:'0'   },
       {id:'2', invoiceNumber:'201800ab',  recipient: 'Mustermann GmbH', invoiceDate:'2018-01-01', timeSpan:'2017-01-01 bis 2017-12-31',
           invoiceState:'Entwurf', wholeCost:'3000,00€', countReminders:'0'   }

    ]; */

  invoices: Invoice002[] = [

      {id:1, invoiceDate: new Date("Februasry 4, 2016 10:13:00"), invoiceNumber:'2018abcd', recipient: 'DusselGmbH', invoiceState:'Entwurf',
      wholeCost: 1111.11, countReminders: 0, timeSpan: '2017-01-01 bis 2017-12-31'}
  ];

  constructor() { }

  ngOnInit() {
  }

}