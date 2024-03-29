/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BrexCashDetails } from './brex-cash-details';
import { ReceivingAccountType } from './receiving-account-type';

/**
 * @type ReceivingAccount
 * Receiving account details for the transfer
 * @export
 */
export type ReceivingAccount = { type: 'BREX_CASH' } & BrexCashDetails;


