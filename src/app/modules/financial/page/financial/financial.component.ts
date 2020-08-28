import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
