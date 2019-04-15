import {Routes} from '@angular/router';
import {BlockScrollStrategyE2E} from '../block-scroll-strategy/block-scroll-strategy-e2e';
import {ButtonToggleE2e} from '../button-toggle/button-toggle-e2e';
import {ButtonE2E} from '../button/button-e2e';
import {CardE2e} from '../card/card-e2e';
import {SimpleCheckboxes} from '../checkbox/checkbox-e2e';
import {DialogE2E} from '../dialog/dialog-e2e';
import {ExpansionE2e} from '../expansion/expansion-e2e';
import {GridListE2E} from '../grid-list/grid-list-e2e';
import {IconE2E} from '../icon/icon-e2e';
import {InputE2E} from '../input/input-e2e';
import {ListE2e} from '../list/list-e2e';
import {MenuE2E} from '../menu/menu-e2e';
import {ProgressBarE2E} from '../progress-bar/progress-bar-e2e';
import {ProgressSpinnerE2E} from '../progress-spinner/progress-spinner-e2e';
import {SimpleRadioButtons} from '../radio/radio-e2e';
import {SidenavE2E} from '../sidenav/sidenav-e2e';
import {SlideToggleE2E} from '../slide-toggle/slide-toggle-e2e';
import {StepperE2e} from '../stepper/stepper-e2e';
import {BasicTabs} from '../tabs/tabs-e2e';
import {ToolbarE2e} from '../toolbar/toolbar-e2e';
import {VirtualScrollE2E} from '../virtual-scroll/virtual-scroll-e2e';
import {Home} from './e2e-app-layout';

export const E2E_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'block-scroll-strategy', component: BlockScrollStrategyE2E},
  {path: 'button', component: ButtonE2E},
  {path: 'button-toggle', component: ButtonToggleE2e},
  {path: 'checkbox', component: SimpleCheckboxes},
  {path: 'dialog', component: DialogE2E},
  {path: 'expansion', component: ExpansionE2e},
  {path: 'grid-list', component: GridListE2E},
  {path: 'icon', component: IconE2E},
  {path: 'input', component: InputE2E},
  {path: 'list', component: ListE2e},
  {path: 'menu', component: MenuE2E},
  {path: 'progress-bar', component: ProgressBarE2E},
  {path: 'progress-spinner', component: ProgressSpinnerE2E},
  {path: 'radio', component: SimpleRadioButtons},
  {path: 'sidenav', component: SidenavE2E},
  {path: 'slide-toggle', component: SlideToggleE2E},
  {path: 'stepper', component: StepperE2e},
  {path: 'tabs', component: BasicTabs},
  {path: 'cards', component: CardE2e},
  {path: 'toolbar', component: ToolbarE2e},
  {path: 'virtual-scroll', component: VirtualScrollE2E},
];