import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-angular-accordion-table',
  templateUrl: './custom-angular-accordion-table.component.html',
  styleUrls: ['./custom-angular-accordion-table.component.scss'],
})
export class CustomAngularAccordionTableComponent implements OnInit {
  constructor() {}

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // prrReferralRosterRows$: Observable<PrrReferralRosterResponseModel[]>;

  ngOnInit(): void {}

  ngOnChanges(): void {
    // this.prrReferralRosterRows$ = of(this.tableData);
  }

  expandPanel(matExpansionPanel, event): void {
    event.stopPropagation();

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.close();
    }
  }

  private _isExpansionIndicator(target: EventTarget): boolean {
    const expansionIndicatorClass = 'mat-expansion-indicator';

    return (
      target['classList'] &&
      target['classList'].contains(expansionIndicatorClass)
    );
  }
}
