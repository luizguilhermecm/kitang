import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Tag } from "./tag";

// const API = 'http://localhost:3000';
// const API = 'http://localhost:4567/kit_api/tags';
const API = 'http://lgcm.com.br/kit_api/tags';

@Injectable({ providedIn: 'root' })
export class TagService {

    constructor(private http: HttpClient) {}

    listTags() {
        // return this.http.get<Object[]>(API);       
        return this.http.get<Tag[]>(API);       
    }
}
