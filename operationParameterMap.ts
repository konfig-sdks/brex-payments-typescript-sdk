type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/linked_accounts-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v1/incoming_transfers-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'counterparty'
            },
            {
                name: 'receiving_account'
            },
            {
                name: 'amount'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
    '/v1/transfers-POST': {
        parameters: [
            {
                name: 'description'
            },
            {
                name: 'counterparty'
            },
            {
                name: 'amount'
            },
            {
                name: 'external_memo'
            },
            {
                name: 'originating_account'
            },
            {
                name: 'Idempotency-Key'
            },
            {
                name: 'approval_type'
            },
        ]
    },
    '/v1/transfers/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/transfers-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
        ]
    },
    '/v1/vendors-POST': {
        parameters: [
            {
                name: 'company_name'
            },
            {
                name: 'Idempotency-Key'
            },
            {
                name: 'email'
            },
            {
                name: 'phone'
            },
            {
                name: 'payment_accounts'
            },
        ]
    },
    '/v1/vendors/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/vendors/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/v1/vendors-GET': {
        parameters: [
            {
                name: 'cursor'
            },
            {
                name: 'limit'
            },
            {
                name: 'name'
            },
        ]
    },
    '/v1/vendors/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'company_name'
            },
            {
                name: 'email'
            },
            {
                name: 'phone'
            },
            {
                name: 'payment_accounts'
            },
            {
                name: 'beneficiary_name'
            },
            {
                name: 'Idempotency-Key'
            },
        ]
    },
}