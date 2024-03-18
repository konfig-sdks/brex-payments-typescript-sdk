/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentAccountDetailsResponse } from './payment-account-details-response';

/**
 * 
 * @export
 * @interface PaymentAccountResponse
 */
export interface PaymentAccountResponse {
    /**
     * 
     * @type {PaymentAccountDetailsResponse}
     * @memberof PaymentAccountResponse
     */
    'details': PaymentAccountDetailsResponse;
}
