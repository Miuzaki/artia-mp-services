export interface PaymentData {
    transaction_amount: number;
    payment_method_id: "pix";
    payer: {
        email: string;
        first_name: string;
    };
}
export type PaymentCreateResponseT = {
    id: number;
    date_created: string;
    date_approved: string | null;
    date_last_updated: string;
    date_of_expiration: string;
    money_release_date: string | null;
    money_release_status: string;
    operation_type: string;
    issuer_id: string;
    payment_method_id: string;
    payment_type_id: string;
    payment_method: {
        id: string;
        type: string;
        issuer_id: string;
    };
    status: string;
    status_detail: string;
    currency_id: string;
    description: string | null;
    live_mode: boolean;
    sponsor_id: string | null;
    authorization_code: string | null;
    money_release_schema: string | null;
    taxes_amount: number;
    counter_currency: string | null;
    brand_id: string | null;
    shipping_amount: number;
    build_version: string;
    pos_id: string | null;
    store_id: string | null;
    integrator_id: string | null;
    platform_id: string | null;
    corporation_id: string | null;
    payer: {
        type: string | null;
        id: string;
        operator_id: string | null;
        email: string | null;
        identification: {
            type: string | null;
            number: string | null;
        };
        phone: {
            area_code: string | null;
            number: string | null;
            extension: string | null;
        };
        first_name: string | null;
        last_name: string | null;
        entity_type: string | null;
    };
    collector_id: number;
    marketplace_owner: string | null;
    metadata: Record<string, any>;
    additional_info: {
        available_balance: string | null;
        nsu_processadora: string | null;
        authentication_code: string | null;
    };
    order: Record<string, any>;
    external_reference: string | null;
    transaction_amount: number;
    transaction_amount_refunded: number;
    coupon_amount: number;
    differential_pricing_id: string | null;
    financing_group: string | null;
    deduction_schema: string | null;
    callback_url: string | null;
    installments: number;
    transaction_details: {
        payment_method_reference_id: string | null;
        acquirer_reference: string | null;
        net_received_amount: number;
        total_paid_amount: number;
        overpaid_amount: number;
        external_resource_url: string | null;
        installment_amount: number;
        financial_institution: string | null;
        payable_deferral_period: string | null;
        bank_transfer_id: string | null;
        transaction_id: string | null;
    };
    fee_details: any[];
    charges_details: any[];
    captured: boolean;
    binary_mode: boolean;
    call_for_authorize_id: string | null;
    statement_descriptor: string | null;
    card: Record<string, any>;
    notification_url: string | null;
    refunds: any[];
    processing_mode: string;
    merchant_account_id: string | null;
    merchant_number: string | null;
    acquirer_reconciliation: any[];
    point_of_interaction: {
        type: string;
        business_info: {
            unit: string;
            sub_unit: string;
        };
        location: {
            state_id: string | null;
            source: string | null;
        };
        application_data: {
            name: string | null;
            version: string | null;
        };
        transaction_data: {
            qr_code: string;
            bank_transfer_id: string | null;
            transaction_id: string | null;
            e2e_id: string | null;
            financial_institution: string | null;
            ticket_url: string;
            bank_info: {
                payer: {
                    account_id: string | null;
                    id: string | null;
                    long_name: string | null;
                    identification: Record<string, any>;
                    external_account_id: string | null;
                };
                collector: {
                    account_id: string | null;
                    long_name: string | null;
                    account_holder_name: string;
                    transfer_account_id: string | null;
                };
                is_same_bank_account_owner: string | null;
                origin_bank_id: string | null;
                origin_wallet_id: string | null;
            };
            qr_code_base64: string;
        };
    };
    accounts_info: any;
    tags: any;
};
export type PaymentGetInfoT = {
    id: number;
    date_created: string;
    date_approved: null | string;
    date_last_updated: string;
    date_of_expiration: string;
    money_release_date: null | string;
    money_release_status: string;
    operation_type: string;
    issuer_id: string;
    payment_method_id: string;
    payment_type_id: string;
    payment_method: {
        id: string;
        type: string;
        issuer_id: string;
    };
    status: string;
    status_detail: string;
    currency_id: string;
    description: null | string;
    live_mode: boolean;
    sponsor_id: null | string;
    authorization_code: null | string;
    money_release_schema: null | string;
    taxes_amount: number;
    counter_currency: null | string;
    brand_id: null | string;
    shipping_amount: number;
    build_version: string;
    pos_id: null | string;
    store_id: null | string;
    integrator_id: null | string;
    platform_id: null | string;
    corporation_id: null | string;
    payer: {
        type: null | string;
        id: string;
        operator_id: null | string;
        email: null | string;
        identification: {
            type: null | string;
            number: null | string;
        };
        phone: {
            area_code: null | string;
            number: null | string;
            extension: null | string;
        };
        first_name: null | string;
        last_name: null | string;
        entity_type: null | string;
    };
    collector_id: number;
    marketplace_owner: null | string;
    metadata: Record<string, any>;
    additional_info: {
        available_balance: null | string;
        nsu_processadora: null | string;
        authentication_code: null | string;
    };
    order: Record<string, any>;
    external_reference: null | string;
    transaction_amount: number;
    transaction_amount_refunded: number;
    coupon_amount: number;
    differential_pricing_id: null | string;
    financing_group: null | string;
    deduction_schema: null | string;
    callback_url: null | string;
    installments: number;
    transaction_details: {
        payment_method_reference_id: null | string;
        acquirer_reference: null | string;
        net_received_amount: number;
        total_paid_amount: number;
        overpaid_amount: number;
        external_resource_url: null | string;
        installment_amount: number;
        financial_institution: null | string;
        payable_deferral_period: null | string;
        bank_transfer_id: null | string;
        transaction_id: null | string;
    };
    fee_details: any[];
    charges_details: any[];
    captured: boolean;
    binary_mode: boolean;
    call_for_authorize_id: null | string;
    statement_descriptor: null | string;
    card: Record<string, any>;
    notification_url: null | string;
    refunds: any[];
    processing_mode: string;
    merchant_account_id: null | string;
    merchant_number: null | string;
    acquirer_reconciliation: any[];
    point_of_interaction: {
        type: string;
        business_info: {
            unit: string;
            sub_unit: string;
        };
        location: {
            state_id: null | string;
            source: null | string;
        };
        application_data: {
            name: null | string;
            version: null | string;
        };
        transaction_data: {
            qr_code: string;
            bank_transfer_id: null | string;
            transaction_id: null | string;
            e2e_id: null | string;
            financial_institution: null | string;
            ticket_url: string;
            bank_info: {
                payer: {
                    account_id: null | string;
                    id: null | string;
                    long_name: null | string;
                    identification: Record<string, any>;
                    external_account_id: null | string;
                };
                collector: {
                    account_id: null | string;
                    long_name: null | string;
                    account_holder_name: string;
                    transfer_account_id: null | string;
                };
                is_same_bank_account_owner: null | string;
                origin_bank_id: null | string;
                origin_wallet_id: null | string;
            };
            infringement_notification: {
                type: null | string;
                status: null | string;
            };
            qr_code_base64: string;
        };
    };
    accounts_info: null | Record<string, any>;
    tags: null | Record<string, any>;
};
//# sourceMappingURL=PaymentResponse.d.ts.map