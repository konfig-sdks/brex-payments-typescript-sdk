/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CounterPartyBankDetails } from './counter-party-bank-details';
import { CounterPartyIncomingTransferType } from './counter-party-incoming-transfer-type';

/**
 * @type CounterPartyIncomingTransfer
 * Counterparty Details for the transfer
 * @export
 */
export type CounterPartyIncomingTransfer = { type: 'BANK' } & CounterPartyBankDetails;


