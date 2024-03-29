import React, { Fragment } from 'react';
import Spreadsheet from '@symbols/v1/SpreadSheet';

export default () => {
  const exampleOne = {};

  exampleOne.initialData = {
    rows: [
      ['', '', '', '', '', '', '', ''],
      ['', 1, 2, 3, 4, 5, 6, 7],
      ['', 1, '', 3, 4, 5, 6, 7],
      ['', 1, 2, 3, 4, 5, 6, 7],
      ['', 1, 2, 3, 4, 5, 6, 7]
    ]
  };

  exampleOne.config = {
    rows: 5,
    columns: 8,
    hasHeadColumn: true,
    isHeadColumnString: true,
    hasHeadRow: true,
    isHeadRowString: true,
    canAddRow: true,
    canAddColumn: true,
    emptyValueSymbol: '-',
    hasLetterNumberHeads: true
  };

  // Example Two
  const exampleTwo = {};
  exampleTwo.initialData = {
    rows: [
      ['Customer', 'Job', 'Contact', 'City', 'Revenue'],
      ['iDiscovery', 'Build', 'John Doe', 'Boston, MA', '500,000'],
      ['SxSW', 'Build', 'Tom Fuller', 'San Francisco, CA', '600,000'],
      ['CapitalTwo', 'Failed', 'Eric Pixel', 'Seattle, WA', '450,000']
    ]
  };

  exampleTwo.cellClasses = {
    rows: [
      ['', '', '', '', '', '', '', ''],
      ['green', '', '', '', '', '', '', 'dollar'],
      ['purple', '', '', '', '', '', '', 'dollar'],
      ['yellow', 'failed', '', '', '', '', '', 'dollar']
    ]
  };

  exampleTwo.config = {
    rows: 5,
    columns: 5,
    headColumn: true,
    headColumnIsString: true,
    headRow: true,
    headRowIsString: true,
    canAddRow: false,
    canAddColumn: false,
    emptyValueSymbol: '-',
    letterNumberHeads: false
  };
  // Render
  return (
    <Fragment>
      <div className="SpreadSheet">
        <Spreadsheet
          initialData={exampleTwo.initialData}
          config={exampleTwo.config}
          cellClasses={exampleTwo.cellClasses}
        />
      </div>
      <div className="SpreadSheet__excel">
        <Spreadsheet
          initialData={exampleOne.initialData}
          config={exampleOne.config}
          cellClasses={exampleOne.cellClasses}
        />
      </div>
    </Fragment>
  );
};
// Example One
