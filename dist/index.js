"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPagoManager = void 0;
const axios_1 = __importDefault(require("axios"));
class MercadoPagoManager {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }
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
            throw new Error("Erro ao criar o pagamento: " + error);
        }
    }
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
            throw new Error("Erro ao obter informações de pagamento.");
        }
    }
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