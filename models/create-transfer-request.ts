/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApprovalType } from './approval-type';
import { CounterParty } from './counter-party';
import { CreateTransferRequestOriginatingAccount } from './create-transfer-request-originating-account';
import { Money } from './money';

/**
 * 
 * @export
 * @interface CreateTransferRequest
 */
export interface CreateTransferRequest {
    /**
     * Description of the transfer for internal use. Not exposed externally.
     * @type {string}
     * @memberof CreateTransferRequest
     */
    'description': string;
    /**
     * 
     * @type {CounterParty}
     * @memberof CreateTransferRequest
     */
    'counterparty': CounterParty;
    /**
     * 
     * @type {Money}
     * @memberof CreateTransferRequest
     */
    'amount': Money;
    /**
     * External memo for the transfer. `Payment Instructions` for Wires and the `Entry Description` for ACH payments.  Must be at most 90 characters for `ACH` and `WIRE` transactions and at most 40 characters for `CHEQUES` 
     * @type {string}
     * @memberof CreateTransferRequest
     */
    'external_memo': string;
    /**
     * 
     * @type {CreateTransferRequestOriginatingAccount}
     * @memberof CreateTransferRequest
     */
    'originating_account': CreateTransferRequestOriginatingAccount;
    /**
     * 
     * @type {ApprovalType}
     * @memberof CreateTransferRequest
     */
    'approval_type'?: ApprovalType;
}

