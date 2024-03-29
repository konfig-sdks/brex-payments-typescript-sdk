/*
Payments API


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


The version of the OpenAPI document: 1.0
Contact: developer-access@brex.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  LinkedAccountsApi,
  TransfersApi,
  VendorsApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { BrexPaymentsCustom } from "./client-custom";

export class BrexPayments extends BrexPaymentsCustom {
  readonly linkedAccounts: LinkedAccountsApi;
  readonly transfers: TransfersApi;
  readonly vendors: VendorsApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.linkedAccounts = new LinkedAccountsApi(configuration);
    this.transfers = new TransfersApi(configuration);
    this.vendors = new VendorsApi(configuration);
  }

}
