/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  CdkPopoverEdit,
  CdkRowHoverContent,
  CdkEditable,
  CdkEditOpen,
  CdkEditOpenButton
} from './table-directives';
import {CdkEditControl,
  CdkEditRevert,
  CdkEditClose
} from './lens-directives';
import {
  DefaultPopoverEditPositionStrategyFactory,
  PopoverEditPositionStrategyFactory
} from './popover-edit-position-strategy-factory';

const EXPORTED_DECLARATIONS = [
  CdkPopoverEdit,
  CdkRowHoverContent,
  CdkEditControl,
  CdkEditRevert,
  CdkEditClose,
  CdkEditable,
  CdkEditOpen,
  CdkEditOpenButton,
];

@NgModule({
  imports: [
    OverlayModule,
  ],
  exports: EXPORTED_DECLARATIONS,
  declarations: EXPORTED_DECLARATIONS,
  providers: [{
    provide: PopoverEditPositionStrategyFactory,
    useClass: DefaultPopoverEditPositionStrategyFactory
  }],
})
export class CdkPopoverEditModule { }
