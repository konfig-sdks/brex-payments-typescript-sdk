/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Transfer } from './transfer';

/**
 * 
 * @export
 * @interface PageTransfer
 */
export interface PageTransfer {
    /**
     * 
     * @type {string}
     * @memberof PageTransfer
     */
    'next_cursor'?: string | null;
    /**
     * 
     * @type {Array<Transfer>}
     * @memberof PageTransfer
     */
    'items': Array<Transfer>;
}

