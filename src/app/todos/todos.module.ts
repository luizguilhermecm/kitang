import { NgModule } from "@angular/core";

import { TagComponent } from "./tag/tag.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ TagComponent ],
    exports: [ TagComponent ],
    imports: [ HttpClientModule ]
})
export class TodosModule {}
