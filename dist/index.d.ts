import { PaymentCreateResponseT, PaymentData, PaymentGetInfoT } from "./interfaces/PaymentResponse";
export declare class MercadoPagoManager {
    private accessToken;
    constructor(accessToken: string);
    /**
     * Create a payment.
     *
     * @param {object} params - The parameters for creating a payment.
     * @param {PaymentData} params.paymentData - The payment data to be sent.
     * @returns {Promise<PaymentCreateResponseT>} A promise that resolves to the payment creation response.
     */
    createPayment({ paymentData, }: {
        paymentData: PaymentData;
    }): Promise<PaymentCreateResponseT>;
    /**
     * Get payment information by ID.
     *
     * @param {string} paymentId - The ID of the payment to retrieve information for.
     * @returns {Promise<PaymentGetInfoT>} A promise that resolves to the payment information.
     */
    getPaymentInfo(paymentId: string): Promise<PaymentGetInfoT>;
    /**
     * Cancel a payment by ID.
     *
     * @param {string} paymentId - The ID of the payment to be canceled.
     * @returns {Promise<boolean>} A promise that resolves to true if the payment is successfully canceled, or false if there is an error.
     */
    cancelPayment(paymentId: string): Promise<boolean>;
}
//# sourceMappingURL=index.d.ts.map