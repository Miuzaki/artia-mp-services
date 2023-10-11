import { PaymentCreateResponseT, PaymentGetInfoT } from "./interfaces/PaymentResponse";
interface PaymentData {
    transaction_amount: number;
    payment_method_id: "pix";
    payer: {
        email: string;
        first_name: string;
    };
}
export declare class MercadoPagoManager {
    private accessToken;
    constructor(accessToken: string);
    createPayment({ paymentData, }: {
        paymentData: PaymentData;
    }): Promise<PaymentCreateResponseT>;
    getPaymentInfo(paymentId: string): Promise<PaymentGetInfoT>;
    cancelPayment(paymentId: string): Promise<boolean>;
}
export {};
//# sourceMappingURL=index.d.ts.map