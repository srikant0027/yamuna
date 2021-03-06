import { Injectable, EventEmitter } from '@angular/core';
import { Http , Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Constants } from '../utils/constants';
import { Package } from '../components/share/package.model';

@Injectable()
export class InquiryService {

    constructor(private _http: Http) {}

    vinSearch(vinNumber) {
        return this._http.get(Constants.URL.host_url + Constants.URL.inquiry_url + vinNumber)
        .map((response: Response) => {
            const userResponse = response.json();
            return userResponse;
        })
        .catch(this._vinSearchErrorHandler);
    }
    _vinSearchErrorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error || 'server error');
    }

}
