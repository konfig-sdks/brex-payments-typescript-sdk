/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OriginatingAccountType } from './originating-account-type';

/**
 * 
 * @export
 * @interface BrexCashAccountDetailsAllOf
 */
export interface BrexCashAccountDetailsAllOf {
    /**
     * 
     * @type {OriginatingAccountType}
     * @memberof BrexCashAccountDetailsAllOf
     */
    'type': OriginatingAccountType;
    /**
     *  ID of the Brex Business account: Can be found from the `/accounts` endpoint where instrument type is `CASH`. 
     * @type {string}
     * @memberof BrexCashAccountDetailsAllOf
     */
    'id': string;
}

