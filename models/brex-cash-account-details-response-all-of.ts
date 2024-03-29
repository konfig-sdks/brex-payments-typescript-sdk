/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OriginatingAccountResponseType } from './originating-account-response-type';

/**
 * 
 * @export
 * @interface BrexCashAccountDetailsResponseAllOf
 */
export interface BrexCashAccountDetailsResponseAllOf {
    /**
     * 
     * @type {OriginatingAccountResponseType}
     * @memberof BrexCashAccountDetailsResponseAllOf
     */
    'type': OriginatingAccountResponseType;
    /**
     *  ID of the Brex Business account. 
     * @type {string}
     * @memberof BrexCashAccountDetailsResponseAllOf
     */
    'id': string;
}

