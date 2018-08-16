import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-tag',
    templateUrl: 'tag.component.html'
})
export class TagComponent {

    @Input() tagId='';
    @Input() tagTag='';

}
