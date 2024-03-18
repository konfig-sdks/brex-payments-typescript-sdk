/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CounterPartyResponseType } from './counter-party-response-type';

/**
 * 
 * @export
 * @interface BookTransferDetailsResponseAllOf
 */
export interface BookTransferDetailsResponseAllOf {
    /**
     * 
     * @type {CounterPartyResponseType}
     * @memberof BookTransferDetailsResponseAllOf
     */
    'type': CounterPartyResponseType;
    /**
     * This feature is currently limited to certain customers, please reach out if you are interested
     * @type {string}
     * @memberof BookTransferDetailsResponseAllOf
     */
    'deposit_account_id': string;
}
