<div align="left">

[![Visit Brex](./header.png)](https://brex.com)

# [Brex](https://brex.com)<a id="brex"></a>


The payments API allows you to initiate and manage payments and vendors from your Brex business accounts.


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`brexpayments.linkedAccounts.list`](#brexpaymentslinkedaccountslist)
  * [`brexpayments.transfers.createIncomingTransfer`](#brexpaymentstransferscreateincomingtransfer)
  * [`brexpayments.transfers.createTransfer`](#brexpaymentstransferscreatetransfer)
  * [`brexpayments.transfers.getById`](#brexpaymentstransfersgetbyid)
  * [`brexpayments.transfers.list`](#brexpaymentstransferslist)
  * [`brexpayments.vendors.createNewVendor`](#brexpaymentsvendorscreatenewvendor)
  * [`brexpayments.vendors.deleteVendorById`](#brexpaymentsvendorsdeletevendorbyid)
  * [`brexpayments.vendors.getById`](#brexpaymentsvendorsgetbyid)
  * [`brexpayments.vendors.list`](#brexpaymentsvendorslist)
  * [`brexpayments.vendors.updateById`](#brexpaymentsvendorsupdatebyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Brex&serviceName=Payments&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { BrexPayments } from "brex-payments-typescript-sdk";

const brexpayments = new BrexPayments({
  // Defining the base path is optional and defaults to https://platform.brexapis.com
  // basePath: "https://platform.brexapis.com",
});

const listResponse = await brexpayments.linkedAccounts.list({});

console.log(listResponse);
```

## Reference<a id="reference"></a>


### `brexpayments.linkedAccounts.list`<a id="brexpaymentslinkedaccountslist"></a>


This endpoint lists all bank connections that are eligible to make ACH transfers to Brex business account


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexpayments.linkedAccounts.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageBankConnection](./models/page-bank-connection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/linked_accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.transfers.createIncomingTransfer`<a id="brexpaymentstransferscreateincomingtransfer"></a>


This endpoint creates a new incoming transfer. You may use use any eligible bank account connection to fund (ACH Debit) 
any active Brex business account.

**Reminder**: You may not use the Brex API for any activity that requires a license or registration from any 
governmental authority without Brex's prior review and approval. This includes but is not limited to any money services
business or money transmission activity.

Please review the <a href="https://www.brex.com/legal/developer-portal/">Brex Access Agreement</a> and contact us if 
you have any questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIncomingTransferResponse =
  await brexpayments.transfers.createIncomingTransfer({
    IdempotencyKey: "IdempotencyKey_example",
    description: "description_example",
    counterparty: {},
    receiving_account: {},
    amount: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

  Description of the transfer for internal use. Not exposed externally.  

##### counterparty: [`CounterPartyIncomingTransfer`](./models/counter-party-incoming-transfer.ts)<a id="counterparty-counterpartyincomingtransfermodelscounter-party-incoming-transferts"></a>

##### receiving_account: [`ReceivingAccount`](./models/receiving-account.ts)<a id="receiving_account-receivingaccountmodelsreceiving-accountts"></a>

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incoming_transfers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.transfers.createTransfer`<a id="brexpaymentstransferscreatetransfer"></a>


This endpoint creates a new transfer.

Currently, the API can only create transfers for the following payment rails:
- ACH
- DOMESTIC_WIRE
- CHEQUE
- INTERNATIONAL_WIRES (For vendors already created through dashboard. Rate limited to 100/day - Please reach out to developer-support@brex.com if you need to do more)

**Transaction Descriptions**
* For outgoing check payments, a successful transfer will return a response containing a description value with a format of `Check #<check number> to <recipient_name> - <external_memo>`.
* For book transfers (from one Brex Business account to another), the recipient value will have a format of `<customer_account.dba_name> - <external_memo>` and the sender will have a format of `<target customer account's dba name> - <external_memo>`.
* For other payment rails, the format will be `<counterparty_name> - <external_memo>`, where Counterparty name is `payment_instrument.beneficiary_name` or `contact.name`
For vendors created from the Payments API, the `counterparty_name` will be the `company_name` [field](https://developer.brex.com/openapi/payments_api/).

**Reminder**: You may not use the Brex API for any activity that requires a license or registration from any 
governmental authority without Brex's prior review and approval. This includes but is not limited to any money services
business or money transmission activity.

Please review the <a href="https://www.brex.com/legal/developer-portal/">Brex Access Agreement</a> and contact us if 
you have any questions.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTransferResponse = await brexpayments.transfers.createTransfer({
  IdempotencyKey: "IdempotencyKey_example",
  description: "description_example",
  counterparty: {},
  amount: {},
  external_memo: "external_memo_example",
  originating_account: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

Description of the transfer for internal use. Not exposed externally.

##### counterparty: [`CounterParty`](./models/counter-party.ts)<a id="counterparty-counterpartymodelscounter-partyts"></a>

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### external_memo: `string`<a id="external_memo-string"></a>

External memo for the transfer. `Payment Instructions` for Wires and the `Entry Description` for ACH payments.  Must be at most 90 characters for `ACH` and `WIRE` transactions and at most 40 characters for `CHEQUES` 

##### originating_account: [`CreateTransferRequestOriginatingAccount`](./models/create-transfer-request-originating-account.ts)<a id="originating_account-createtransferrequestoriginatingaccountmodelscreate-transfer-request-originating-accountts"></a>

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### approval_type: [`ApprovalType`](./models/approval-type.ts)<a id="approval_type-approvaltypemodelsapproval-typets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/transfers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.transfers.getById`<a id="brexpaymentstransfersgetbyid"></a>


This endpoint gets a transfer by ID.

Currently, the API can only return transfers for the following payment rails:
- ACH
- DOMESTIC_WIRE
- CHEQUE
- INTERNATIONAL_WIRE


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexpayments.transfers.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Transfer](./models/transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/transfers/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.transfers.list`<a id="brexpaymentstransferslist"></a>


This endpoint lists existing transfers for an account.

Currently, the API can only return transfers for the following payment rails:
- ACH
- DOMESTIC_WIRE
- CHEQUE
- INTERNATIONAL_WIRE


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexpayments.transfers.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageTransfer](./models/page-transfer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/transfers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.vendors.createNewVendor`<a id="brexpaymentsvendorscreatenewvendor"></a>


This endpoint creates a new vendor.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewVendorResponse = await brexpayments.vendors.createNewVendor({
  IdempotencyKey: "IdempotencyKey_example",
  company_name: "company_name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### company_name: `string`<a id="company_name-string"></a>

Name for vendor. The name must be unique.

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

##### email: `string`<a id="email-string"></a>

Email for vendor.

##### phone: `string`<a id="phone-string"></a>

Phone number for vendor.

##### payment_accounts: [`PaymentAccountRequest`](./models/payment-account-request.ts)[]<a id="payment_accounts-paymentaccountrequestmodelspayment-account-requestts"></a>

Payment accounts associated with the vendor.

#### 🔄 Return<a id="🔄-return"></a>

[VendorResponse](./models/vendor-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vendors` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.vendors.deleteVendorById`<a id="brexpaymentsvendorsdeletevendorbyid"></a>


This endpoint deletes a vendor by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVendorByIdResponse = await brexpayments.vendors.deleteVendorById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vendors/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.vendors.getById`<a id="brexpaymentsvendorsgetbyid"></a>


This endpoint gets a vendor by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await brexpayments.vendors.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[VendorResponse](./models/vendor-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vendors/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.vendors.list`<a id="brexpaymentsvendorslist"></a>


This endpoint lists all existing vendors for an account.
Takes an optional parameter to match by vendor name.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await brexpayments.vendors.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### name: `string`<a id="name-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PageVendorResponse](./models/page-vendor-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vendors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `brexpayments.vendors.updateById`<a id="brexpaymentsvendorsupdatebyid"></a>


    Updates an existing vendor by ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await brexpayments.vendors.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### company_name: `string`<a id="company_name-string"></a>

Name for vendor

##### email: `string`<a id="email-string"></a>

Email for vendor

##### phone: `string`<a id="phone-string"></a>

Phone number for vendor

##### payment_accounts: [`PaymentAccountRequest`](./models/payment-account-request.ts)[]<a id="payment_accounts-paymentaccountrequestmodelspayment-account-requestts"></a>

To update payment instruments, we require the entire payload for each payment instrument that is being updated. 

##### beneficiary_name: `string`<a id="beneficiary_name-string"></a>

Name for the Beneficiary

##### IdempotencyKey: `string`<a id="idempotencykey-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[VendorResponse](./models/vendor-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/vendors/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
