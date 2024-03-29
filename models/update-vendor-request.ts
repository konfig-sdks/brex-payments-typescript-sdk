/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PaymentAccountRequest } from './payment-account-request';

/**
 * 
 * @export
 * @interface UpdateVendorRequest
 */
export interface UpdateVendorRequest {
    /**
     * Name for vendor
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    'company_name'?: string | null;
    /**
     * Email for vendor
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    'email'?: string | null;
    /**
     * Phone number for vendor
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    'phone'?: string | null;
    /**
     * To update payment instruments, we require the entire payload for each payment instrument that is being updated. 
     * @type {Array<PaymentAccountRequest>}
     * @memberof UpdateVendorRequest
     */
    'payment_accounts'?: Array<PaymentAccountRequest> | null;
    /**
     * Name for the Beneficiary
     * @type {string}
     * @memberof UpdateVendorRequest
     */
    'beneficiary_name'?: string | null;
}

