/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BankAccountDetailsResponseAllOf } from './bank-account-details-response-all-of';
import { BeneficiaryBank } from './beneficiary-bank';
import { CounterPartyResponse } from './counter-party-response';
import { CounterPartyResponseType } from './counter-party-response-type';

/**
 * @type BankAccountDetailsResponse
 * @export
 */
export type BankAccountDetailsResponse = BankAccountDetailsResponseAllOf & CounterPartyResponse;


