/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BrexCashDetailsAllOf } from './brex-cash-details-all-of';
import { ReceivingAccount } from './receiving-account';
import { ReceivingAccountType } from './receiving-account-type';

/**
 * @type BrexCashDetails
 * @export
 */
export type BrexCashDetails = BrexCashDetailsAllOf & ReceivingAccount;


