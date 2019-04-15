/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ExampleModule} from '../example/example-module';
import {TableDemo} from './table-demo';

@NgModule({
  imports: [
    ExampleModule,
    RouterModule.forChild([{path: '', component: TableDemo}]),
  ],
  declarations: [TableDemo],
})
export class TableDemoModule {
}
