"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoManager = void 0;
const axios_1 = __importDefault(require("axios"));
class MercadoPagoManager {
    constructor(accessToken) {
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
    async createPayment({ paymentData, }) {
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
            const response = await axios_1.default.request(config);
            return response.data;
        }
        catch (error) {
            throw new Error("Error creating payment: " + error);
        }
    }
    /**
     * Get payment information by ID.
     *
     * @param {string} paymentId - The ID of the payment to retrieve information for.
     * @returns {Promise<PaymentGetInfoT>} A promise that resolves to the payment information.
     */
    async getPaymentInfo(paymentId) {
        try {
            const response = await axios_1.default.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new Error("Error retrieving payment information.");
        }
    }
    /**
     * Cancel a payment by ID.
     *
     * @param {string} paymentId - The ID of the payment to be canceled.
     * @returns {Promise<boolean>} A promise that resolves to true if the payment is successfully canceled, or false if there is an error.
     */
    async cancelPayment(paymentId) {
        try {
            await axios_1.default.put(`https://api.mercadopago.com/v1/payments/${paymentId}`, { status: "cancelled" }, {
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                },
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }
}
exports.MercadoPagoManager = MercadoPagoManager;
//# sourceMappingURL=index.js.map