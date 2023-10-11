# MercadoPagoManager

![GitHub License](https://img.shields.io/badge/license-ISC-blue.svg)

MercadoPagoManager is a lightweight and efficient library for managing payments with the Mercado Pago API.

## Índice

- [Installation](#installation)
- [Usage](#usage)
  - [Example in JavaScript](#example-in-javascript)
  - [Example in TypeScript](#example-in-typescript)
- [API reference](#api-reference)
  - [Constructor](#constructor)
  - [createPayment](#createpayment)
  - [getPaymentInfo](#getpaymentinfo)
  - [cancelPayment](#cancelpayment)
- [Contributing](#contributing)
- [License](#license)

# Installation

You can install MercadoPagoManager using npm or yarn.

```shell
npm install artia-mp-services
```

## or

```shell
yarn add artia-mp-services
```

# Usage

To get started with MercadoPagoManager, you will need an API access token from Mercado Pago. Make sure to have it on hand before proceeding.

## Example in JavaScript

```js
import { MercadoPagoManager } from "artia-mp-services";

const accessToken = "YOUR_ACCESS_TOKEN";
const mercadoPago = new MercadoPagoManager(accessToken);

const data = {
 transaction_amount: 10;
  payment_method_id: "pix";
  payer: {
    email: "test@test.com";
    first_name: "John doe";
  };
};

const payment = mercadePago.createPayment({ paymentData: data });
console.log(payment.id);
```

## Example in TypeScript

```ts
import { MercadoPagoManager, PaymentData } from "artia-mp-services";

const accessToken = "YOUR_ACCESS_TOKEN";
const mercadoPago = new MercadoPagoManager(accessToken);

const data: PaymentData = {
 transaction_amount: 10;
  payment_method_id: "pix";
  payer: {
    email: "test@test.com";
    first_name: "John doe";
  };
};

const payment = mercadePago.createPayment({ paymentData: data });
console.log(payment.id);
```

Make sure to replace 'YOUR_ACCESS_TOKEN' with your actual access token.

# API Reference

Here's the API reference for **MercadoPagoManager**.

## Constructor

The constructor of the **MercadoPagoManager** class accepts a single parameter:

- `accessToken` (string): The Mercado Pago API access token.

## createPayment

Creates a payment based on the provided data.

```js
mercadePago
  .createPayment({ paymentData: PaymentData })
  .then((response) => {
    // Handle the response for the created payment.
  })
  .catch((error) => {
    // Handle errors in payment creation.
  });
```

## getPaymentInfo

Retrieves information about a payment based on the payment ID.

```js
mercadePago.getPaymentInfo(paymentId: string)
  .then((response) => {
    // Handle the response for payment information.
  })
  .catch((error) => {
    // Handle errors in obtaining payment information.
  });
```

## cancelPayment

Cancels a payment based on the payment ID.

```js
const response = mercadePago.cancelPayment(paymentId: string)
  if (response !== true) {
  // Handle errors in cancel payment.
  }
```

# Contributing

If you want to contribute to the development of this library, please feel free to open issues and pull requests on the GitHub repository.

# License

This project is licensed under the ISC License - refer to the LICENSE file for details.
