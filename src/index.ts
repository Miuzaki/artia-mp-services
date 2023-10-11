import axios from "axios";
import {
  PaymentCreateResponseT,
  PaymentData,
  PaymentGetInfoT,
} from "./interfaces/PaymentResponse";

export class MercadoPagoManager {
  private accessToken: string;

  constructor(accessToken: string) {
    // @param accessToken: The Mercado Pago API access token.
    this.accessToken = accessToken;
  }

  /**
   * Create a payment.
   *
   * @param {object} params - The parameters for creating a payment.
   * @param {PaymentData} params.paymentData - The payment data to be sent.
   * @returns {Promise<PaymentCreateResponseT>} A promise that resolves to the payment creation response.
   */
  async createPayment({
    paymentData,
  }: {
    paymentData: PaymentData;
  }): Promise<PaymentCreateResponseT> {
    try {
      let data = JSON.stringify(paymentData);

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://api.mercadopago.com/v1/payments",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);

      return response.data as PaymentCreateResponseT;
    } catch (error) {
      throw new Error("Error creating payment: " + error);
    }
  }

  /**
   * Get payment information by ID.
   *
   * @param {string} paymentId - The ID of the payment to retrieve information for.
   * @returns {Promise<PaymentGetInfoT>} A promise that resolves to the payment information.
   */
  async getPaymentInfo(paymentId: string): Promise<PaymentGetInfoT> {
    try {
      const response = await axios.get(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );

      return response.data as PaymentGetInfoT;
    } catch (error) {
      throw new Error("Error retrieving payment information.");
    }
  }

  /**
   * Cancel a payment by ID.
   *
   * @param {string} paymentId - The ID of the payment to be canceled.
   * @returns {Promise<boolean>} A promise that resolves to true if the payment is successfully canceled, or false if there is an error.
   */
  async cancelPayment(paymentId: string): Promise<boolean> {
    try {
      await axios.put(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        { status: "cancelled" },
        {
          headers: {
            Authorization: `Bearer ${this.accessToken}`,
          },
        }
      );

      return true;
    } catch (error) {
      return false;
    }
  }
}
