/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BeneficiaryBank } from './beneficiary-bank';
import { CounterPartyResponseType } from './counter-party-response-type';

/**
 * 
 * @export
 * @interface BankAccountDetailsResponseAllOf
 */
export interface BankAccountDetailsResponseAllOf {
    /**
     * Description of the transfer.
     * @type {string}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'description'?: string | null;
    /**
     * 
     * @type {CounterPartyResponseType}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'type': CounterPartyResponseType;
    /**
     * Routing number of a bank account (or SWIFT/BIC code for international transfer). For incoming cheques, this field might be null.
     * @type {string}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'routing_number'?: string | null;
    /**
     * Account number of a bank account (or IBAN code for international transfer). For incoming cheques, this field might be null.
     * @type {string}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'account_number'?: string | null;
    /**
     * 
     * @type {BeneficiaryBank}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'beneficiary_bank'?: BeneficiaryBank;
    /**
     * Fed reference number for incoming wires
     * @type {string}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'fed_reference_number'?: string | null;
    /**
     * External Memo populated by the sender
     * @type {string}
     * @memberof BankAccountDetailsResponseAllOf
     */
    'external_memo'?: string | null;
}

