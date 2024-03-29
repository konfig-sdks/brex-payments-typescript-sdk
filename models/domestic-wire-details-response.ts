/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccountClass } from './account-class';
import { AccountType } from './account-type';
import { Address } from './address';
import { DomesticWireDetailsResponseAllOf } from './domestic-wire-details-response-all-of';
import { PaymentAccountDetailsResponse } from './payment-account-details-response';
import { PaymentDetailsTypeResponse } from './payment-details-type-response';

/**
 * @type DomesticWireDetailsResponse
 * @export
 */
export type DomesticWireDetailsResponse = DomesticWireDetailsResponseAllOf & PaymentAccountDetailsResponse;


