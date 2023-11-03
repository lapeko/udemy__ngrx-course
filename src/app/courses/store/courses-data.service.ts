import {DefaultDataService, HttpUrlGenerator} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

import {Course} from "../model/course";

@Injectable()
export class CoursesDataService extends DefaultDataService<Course>{
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super("Course", http, httpUrlGenerator);
  }

  getAll(): Observable<Course[]> {
    return super.getAll().pipe(map(res => res["payload"]));
  }
}
