/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BankConnection } from './bank-connection';

/**
 * 
 * @export
 * @interface PageBankConnection
 */
export interface PageBankConnection {
    /**
     * 
     * @type {string}
     * @memberof PageBankConnection
     */
    'next_cursor'?: string | null;
    /**
     * 
     * @type {Array<BankConnection>}
     * @memberof PageBankConnection
     */
    'items': Array<BankConnection>;
}

