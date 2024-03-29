/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Address } from './address';
import { PaymentDetailsTypeRequest } from './payment-details-type-request';

/**
 * 
 * @export
 * @interface ChequeDetailsRequestAllOf
 */
export interface ChequeDetailsRequestAllOf {
    /**
     * 
     * @type {PaymentDetailsTypeRequest}
     * @memberof ChequeDetailsRequestAllOf
     */
    'type': PaymentDetailsTypeRequest;
    /**
     * 
     * @type {Address}
     * @memberof ChequeDetailsRequestAllOf
     */
    'mailing_address': Address;
    /**
     * 
     * @type {string}
     * @memberof ChequeDetailsRequestAllOf
     */
    'recipient_name': string;
    /**
     * 
     * @type {string}
     * @memberof ChequeDetailsRequestAllOf
     */
    'beneficiary_name'?: string | null;
}

