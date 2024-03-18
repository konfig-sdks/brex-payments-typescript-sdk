/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Company business address (must be in the US; no PO box or virtual/forwarding addresses allowed).
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * Address line 1, no PO Box.
     * @type {string}
     * @memberof Address
     */
    'line1'?: string | null;
    /**
     * Address line 2 (e.g., apartment, suite, unit, or building).
     * @type {string}
     * @memberof Address
     */
    'line2'?: string | null;
    /**
     * City, district, suburb, town, or village.
     * @type {string}
     * @memberof Address
     */
    'city'?: string | null;
    /**
     * For US-addressed the 2-letter State abbreviation. For international-addresses the county, providence, or region.
     * @type {string}
     * @memberof Address
     */
    'state'?: string | null;
    /**
     * Two-letter country code (ISO 3166-1 alpha-2).
     * @type {string}
     * @memberof Address
     */
    'country'?: string | null;
    /**
     * ZIP or postal code.
     * @type {string}
     * @memberof Address
     */
    'postal_code'?: string | null;
    /**
     * Phone number.
     * @type {string}
     * @memberof Address
     */
    'phone_number'?: string | null;
}
