import { NgModule } from '@angular/core';
import { KeysPipe } from './keyPipe';
import { StaticValuesPipe } from './staticValuesPipe';

@NgModule({
  declarations: [KeysPipe, StaticValuesPipe],
  exports: [KeysPipe, StaticValuesPipe]
})
export class SharedModule {

}