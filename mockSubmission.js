const resource = {
    afqResource: {
        id: 265,
        agencyId: 2,
        name: 'December 3 - Test Workflow',
        mspFormId: 16954,
        mspFormName: 'AFQ1843-1543871523418',
        status: 'ACTIVE',
        configScheme: {
            entity: {
                type: 'PERSON',
                label: 'Individual'
            },
            identity: {
                type: 'USER',
                label: 'Authenticated'
            },
            workflow: {
                enabled: true,
                label: 'Review',
                templateName: 'submissionReview',
                deployedProcessId: '1',
                deployedDateTime: '2018-12-03T15:13:26.356-06:00',
                definitionId: 'AFQ1843-1543871523418_295_submissionReview:1:4',
                definitionName: 'Submission Review',
                definitionKey: 'AFQ1843-1543871523418_295_submissionReview',
                definitionTenantId: 'illinois_dol',
                definitionVariables: []
            },
            documentUpload: {
                enabled: false,
                label: 'Document Upload',
                fieldSetName: 'DocumentUpload'
            },
            payment: {
                enabled: true
            },
            licensePermit: {
                enabled: false,
                type: null,
                label: null,
                lnpNotificationConfig: null
            },
            applicant: {
                enabled: true,
                personalInformation: {
                    enabled: true
                },
                identificationInformation: {
                    enabled: false,
                    label: 'Identification Information',
                    fieldSetName: 'IdentificationInformation'
                },
                businessInformation: {
                    enabled: false
                },
                businessBranchInformation: {
                    enabled: false,
                    label: 'Business Branch Information',
                    fieldSetName: 'BusinessBranchInformation'
                }
            },
            electronicSignature: {
                enabled: false,
                label: 'Signature',
                fieldsetName: 'ElectronicSignature'
            },
            displaySectionConfigList: null
        },
        vanityURL: 'inJdSzzST52W7P6X3iqfQ',
        formNumber: '444',
        identityType: 'USER',
        category: 'permits',
        createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
        createdDt: 1543871523774,
        updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
        updatedDt: 1543873380452,
        publishedDt: 1543871607945,
        publishedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
        afqVersionId: 295,
        mspFormVersionId: 25985,
        label: 'December 3 - Test Workflow',
        subTitle: null,
        description: 'qwerkqwker',
        moreInfoUrl: '',
        primaryAddress: 'MailingAddress',
        afqVersionStatus: 'LIVE',
        submissionCompleteExpirationDays: 0,
        submissionDraftExpirationDays: 0,
        submissionEndDate: null,
        submissionStartDate: null,
        flatMeta: null,
        metadata: [],
        fieldsets: [
            {
                category: 'APPLICANT',
                createdBy: 75,
                createdDate: 1543871533818,
                fields: [
                    {
                        createdBy: 75,
                        createdDate: 1543871535429,
                        defaultValue: 'First Name',
                        id: 627547,
                        index: 1,
                        instructions: '',
                        label: 'First Name',
                        maskFormat: null,
                        max: 30,
                        min: 1,
                        name: 'firstName',
                        options: null,
                        order: 1,
                        pattern:
                            "^['a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'TEXT',
                        updatedBy: 75,
                        updatedDate: 1543871535429,
                        visible: true
                    },
                    {
                        createdBy: 75,
                        createdDate: 1543871535431,
                        defaultValue: 'Last Name',
                        id: 627548,
                        index: 1,
                        instructions: '',
                        label: 'Last Name',
                        maskFormat: null,
                        max: 30,
                        min: 1,
                        name: 'lastName',
                        options: null,
                        order: 2,
                        pattern:
                            "^['a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'TEXT',
                        updatedBy: 75,
                        updatedDate: 1543871535431,
                        visible: true
                    }
                ],
                formVersionId: 25985,
                id: 148507,
                instructions: '',
                label: 'Personal Information',
                maxRepeatable: null,
                minRepeatable: null,
                name: 'PersonalInformation',
                order: 1,
                page: 1,
                repeatable: false,
                sensitive: false,
                updatedBy: 75,
                updatedDate: 1543871533818,
                visible: true
            },
            {
                category: 'APPLICANT',
                createdBy: 75,
                createdDate: 1543871541813,
                fields: [
                    {
                        createdBy: 75,
                        createdDate: 1543871543540,
                        defaultValue: 'Email Address',
                        id: 627552,
                        index: 1,
                        instructions: '',
                        label: 'Email Address',
                        maskFormat: null,
                        max: 50,
                        min: 1,
                        name: 'emailAddress',
                        options: null,
                        order: 1,
                        pattern: '',
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'EMAIL',
                        updatedBy: 75,
                        updatedDate: 1543871543540,
                        visible: true
                    },
                    {
                        createdBy: 75,
                        createdDate: 1543871543543,
                        defaultValue: 'Re-Enter Email Address',
                        id: 627553,
                        index: 1,
                        instructions: '',
                        label: 'Re-Enter Email Address',
                        maskFormat: null,
                        max: 50,
                        min: 1,
                        name: 'reEnterEmailAddress',
                        options: null,
                        order: 2,
                        pattern: '',
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'EMAIL',
                        updatedBy: 75,
                        updatedDate: 1543871543543,
                        visible: true
                    }
                ],
                formVersionId: 25985,
                id: 148510,
                instructions: '',
                label: 'Contact Information',
                maxRepeatable: null,
                minRepeatable: null,
                name: 'ContactInformation',
                order: 2,
                page: 1,
                repeatable: false,
                sensitive: false,
                updatedBy: 75,
                updatedDate: 1543871541813,
                visible: true
            },
            {
                category: 'APPLICANT',
                createdBy: 75,
                createdDate: 1543871552005,
                fields: [
                    {
                        createdBy: 75,
                        createdDate: 1543871553600,
                        defaultValue: 'Address Line 1',
                        id: 627554,
                        index: 1,
                        instructions: '',
                        label: 'Address Line 1',
                        maskFormat: null,
                        max: 70,
                        min: 1,
                        name: 'mailingAddressLine1',
                        options: null,
                        order: 1,
                        pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'TEXT',
                        updatedBy: 75,
                        updatedDate: 1543871553600,
                        visible: true
                    },
                    {
                        createdBy: 75,
                        createdDate: 1543871553602,
                        defaultValue: 'City',
                        id: 627555,
                        index: 1,
                        instructions: '',
                        label: 'City',
                        maskFormat: null,
                        max: 58,
                        min: 1,
                        name: 'mailingCity',
                        options: null,
                        order: 2,
                        pattern: "^[a-zA-Z'.\\s-]{1,58}$",
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'TEXT',
                        updatedBy: 75,
                        updatedDate: 1543871553602,
                        visible: true
                    },
                    {
                        createdBy: 75,
                        createdDate: 1543871553604,
                        defaultValue: 'State',
                        id: 627556,
                        index: 1,
                        instructions: '',
                        label: 'State',
                        maskFormat: null,
                        max: 50,
                        min: 1,
                        name: 'mailingState',
                        options: [
                            {
                                display: 'AP',
                                value: 'AP'
                            },
                            {
                                display: 'AA',
                                value: 'AA'
                            },
                            {
                                display: 'AE',
                                value: 'AE'
                            },
                            {
                                display: 'Alabama',
                                value: 'AL'
                            },
                            {
                                display: 'Alaska',
                                value: 'AK'
                            },
                            {
                                display: 'Arizona',
                                value: 'AZ'
                            },
                            {
                                display: 'Arkansas',
                                value: 'AR'
                            },
                            {
                                display: 'California',
                                value: 'CA'
                            },
                            {
                                display: 'Colorado',
                                value: 'CO'
                            },
                            {
                                display: 'Connecticut',
                                value: 'CT'
                            },
                            {
                                display: 'Delaware',
                                value: 'DE'
                            },
                            {
                                display: 'District of Columbia',
                                value: 'DC'
                            },
                            {
                                display: 'Florida',
                                value: 'FL'
                            },
                            {
                                display: 'Georgia',
                                value: 'GA'
                            },
                            {
                                display: 'Hawaii',
                                value: 'HI'
                            },
                            {
                                display: 'Idaho',
                                value: 'ID'
                            },
                            {
                                display: 'Illinois',
                                value: 'IL'
                            },
                            {
                                display: 'Indiana',
                                value: 'IN'
                            },
                            {
                                display: 'Iowa',
                                value: 'IA'
                            },
                            {
                                display: 'Kansas',
                                value: 'KS'
                            },
                            {
                                display: 'Kentucky',
                                value: 'KY'
                            },
                            {
                                display: 'Lousiana',
                                value: 'LA'
                            },
                            {
                                display: 'Maine',
                                value: 'ME'
                            },
                            {
                                display: 'Maryland',
                                value: 'MD'
                            },
                            {
                                display: 'Massachusetts',
                                value: 'MA'
                            },
                            {
                                display: 'Michigan',
                                value: 'MI'
                            },
                            {
                                display: 'Minnesota',
                                value: 'MN'
                            },
                            {
                                display: 'Mississippi',
                                value: 'MS'
                            },
                            {
                                display: 'Missouri',
                                value: 'MO'
                            },
                            {
                                display: 'Montana',
                                value: 'MT'
                            },
                            {
                                display: 'Nebraska',
                                value: 'NE'
                            },
                            {
                                display: 'Nevada',
                                value: 'NV'
                            },
                            {
                                display: 'New Hampshire',
                                value: 'NH'
                            },
                            {
                                display: 'New Jersey',
                                value: 'NJ'
                            },
                            {
                                display: 'New Mexico',
                                value: 'NM'
                            },
                            {
                                display: 'New York',
                                value: 'NY'
                            },
                            {
                                display: 'North Carolina',
                                value: 'NC'
                            },
                            {
                                display: 'North Dakota',
                                value: 'ND'
                            },
                            {
                                display: 'Ohio',
                                value: 'OH'
                            },
                            {
                                display: 'Oklahoma',
                                value: 'OK'
                            },
                            {
                                display: 'Oregon',
                                value: 'OR'
                            },
                            {
                                display: 'Pennsylvania',
                                value: 'PA'
                            },
                            {
                                display: 'Rhode Island',
                                value: 'RI'
                            },
                            {
                                display: 'South Carolina',
                                value: 'SC'
                            },
                            {
                                display: 'South Dakota',
                                value: 'SD'
                            },
                            {
                                display: 'Tennessee',
                                value: 'TN'
                            },
                            {
                                display: 'Texas',
                                value: 'TX'
                            },
                            {
                                display: 'Utah',
                                value: 'UT'
                            },
                            {
                                display: 'Vermont',
                                value: 'VT'
                            },
                            {
                                display: 'Virginia',
                                value: 'VA'
                            },
                            {
                                display: 'Washington',
                                value: 'WA'
                            },
                            {
                                display: 'West Virginia',
                                value: 'WV'
                            },
                            {
                                display: 'Wisconsin',
                                value: 'WI'
                            },
                            {
                                display: 'Wyoming',
                                value: 'WY'
                            }
                        ],
                        order: 3,
                        pattern: '',
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'SELECT',
                        updatedBy: 75,
                        updatedDate: 1543871553604,
                        visible: true
                    },
                    {
                        createdBy: 75,
                        createdDate: 1543871553653,
                        defaultValue: 'ZIP Code',
                        id: 627557,
                        index: 1,
                        instructions: '',
                        label: 'ZIP Code',
                        maskFormat: null,
                        max: 10,
                        min: 1,
                        name: 'mailingZipCode',
                        options: null,
                        order: 4,
                        pattern: '^\\d{5}(?:[-]\\d{4})?$',
                        primitiveType: 'STRING',
                        required: true,
                        sensitive: false,
                        type: 'TEXT',
                        updatedBy: 75,
                        updatedDate: 1543871553653,
                        visible: true
                    }
                ],
                formVersionId: 25985,
                id: 148511,
                instructions: null,
                label: 'Mailing Address',
                maxRepeatable: null,
                minRepeatable: null,
                name: 'MailingAddress',
                order: 3,
                page: 1,
                repeatable: false,
                sensitive: false,
                updatedBy: 75,
                updatedDate: 1543871552005,
                visible: true
            }
        ],
        questions: [],
        afqPaymentProviders: [
            {
                id: 162,
                paymentProvider: null,
                paymentMethodTypes: '["CC","ACH"]',
                version: 0,
                createdDt: 1543871589229,
                createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                updatedDt: 1543871589229,
                updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5'
            }
        ],
        afqVersionCreatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
        afqVersionCreatedDt: 1543871523782,
        afqVersionUpdatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
        afqVersionUpdatedDt: 1543871607939,
        licensePermit: null,
        rules: [],
        fees: [],
        feeOptions: [
            {
                id: 178,
                name: 'December 3 - Test Workflow',
                label: 'December 3 - Test Workflow',
                description: "Here's your description.",
                required: true,
                requiredLineitemCount: 1,
                displayOrder: 1,
                createdDt: 1543871589237,
                createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                updatedDt: 1543871589237,
                updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                feeLineitemList: [
                    {
                        id: 380,
                        name: 'Little Fee',
                        description: "Here's your description.",
                        sku: '2018',
                        label: 'Little Fee',
                        price: '0.10',
                        displayOrder: 0
                    }
                ],
                handler: {},
                feeType: 'LNP',
                hibernateLazyInitializer: {}
            },
            {
                id: 180,
                name: 'ConvenienceFee',
                label: 'Convenience Fee',
                description: 'Convenience Fee',
                required: true,
                requiredLineitemCount: 1,
                displayOrder: 1,
                createdDt: 1543871593463,
                createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                updatedDt: 1543871593463,
                updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                feeLineitemList: [
                    {
                        id: 382,
                        name: 'ConvenienceFee',
                        description: 'Convenience Fee',
                        sku: 'ConvenienceFee',
                        label: 'Convenience Fee',
                        price: '2.00',
                        displayOrder: 1
                    }
                ],
                handler: {},
                feeType: 'SERVICE',
                hibernateLazyInitializer: {}
            },
            {
                id: 179,
                name: 'December 3 - Test Workflow',
                label: 'December 3 - Test Workflow',
                description: 'App Fee',
                required: true,
                requiredLineitemCount: 1,
                displayOrder: 1,
                createdDt: 1543871589684,
                createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                updatedDt: 1543871589684,
                updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr5',
                feeLineitemList: [
                    {
                        id: 381,
                        name: 'Big Fee',
                        description: 'App Fee',
                        sku: '2018',
                        label: 'Big Fee',
                        price: '100.00',
                        displayOrder: 0
                    }
                ],
                handler: {},
                feeType: 'APP',
                hibernateLazyInitializer: {}
            }
        ],
        endorsementOptionResource: null,
        afqVersionMetaList: [],
        searchTerms: null
    },
    mspSubmission: {
        completedDate: 1543871852880,
        createdDate: 1543871808138,
        email: 'seth.davis@egov.com',
        formId: 16954,
        formVersionId: 25985,
        id: 19054,
        processedDate: null,
        submissionAnswers: [
            {
                fieldName: 'firstName',
                fieldValue: 'Seth',
                fieldsetName: null,
                id: 688759,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'lastName',
                fieldValue: 'Davis',
                fieldsetName: null,
                id: 688760,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'emailAddress',
                fieldValue: 'seth.davis@egov.com',
                fieldsetName: null,
                id: 688761,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'reEnterEmailAddress',
                fieldValue: 'seth.davis@egov.com',
                fieldsetName: null,
                id: 688762,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'mailingAddressLine1',
                fieldValue: '100 Street',
                fieldsetName: null,
                id: 688763,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'mailingCity',
                fieldValue: 'Austin',
                fieldsetName: null,
                id: 688764,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'mailingState',
                fieldValue: 'TX',
                fieldsetName: null,
                id: 688765,
                index: null,
                submissionId: 19054
            },
            {
                fieldName: 'mailingZipCode',
                fieldValue: '78750',
                fieldsetName: null,
                id: 688766,
                index: null,
                submissionId: 19054
            }
        ],
        submissionStatus: 'COMPLETE',
        test: false,
        updatedDate: 1543871812765,
        userId: 4165
    },
    afqPaymentSubmissions: null,
    documents: [],
    paymentSummaryList: [
        {
            id: 85,
            paymentStatusAbbrev: 'PAID',
            paymentRefKey: '730000401',
            uniqueTransactionKey: '730000399',
            totalAmount: 104.35,
            statusChangeComments: 'Payment verified successfully',
            paymentOrder: {
                instantSale: true,
                orderId: '39532112',
                orderStatus: 'COMPLETE',
                orderCommitted: true,
                orderAmount: 104.35,
                paymentRefKey: '730000401',
                paymentTime: '2018-12-03T21:17:25Z',
                mspCertificateInstanceId: null,
                paymentImplementTypeString: 'CC',
                paymentImplementTypeId: '1',
                lastFourDigitOf: '*1111',
                accountType: 'VISA',
                avsResponse: null,
                cvv2Response: null,
                authCode: 'TEST123',
                clientTrace: '730000401',
                failure: false,
                failureCode: null,
                failureMessage: null,
                customerNumber: null,
                constituentFirstName: 'Seth',
                constituentLastName: 'Davis',
                businessName: '',
                businessDbaName: '',
                customerAddress: {
                    name: 'Seth Davis',
                    firstName: null,
                    lastName: null,
                    address1: '100 STREET',
                    address2: null,
                    city: 'AUSTIN',
                    state: 'TX',
                    zip: '78750',
                    country: 'US'
                },
                ccpLineItems: [
                    {
                        sku: '2018',
                        description: 'Big Fee',
                        unitPrice: 100.0,
                        quantity: 1,
                        itemAttributes: [
                            {
                                fieldName: 'type',
                                fieldValue: 'APP'
                            }
                        ]
                    },
                    {
                        sku: 'ConvenienceFee',
                        description: 'Convenience Fee',
                        unitPrice: 4.25,
                        quantity: 1,
                        itemAttributes: [
                            {
                                fieldName: 'type',
                                fieldValue: 'SERVICE'
                            }
                        ]
                    },
                    {
                        sku: '2018',
                        description: 'Little Fee',
                        unitPrice: 0.1,
                        quantity: 1,
                        itemAttributes: [
                            {
                                fieldName: 'type',
                                fieldValue: 'LNP'
                            }
                        ]
                    }
                ],
                afqFees: []
            },
            feeLineitemCollectedSummaryList: [
                {
                    id: 42,
                    displayLabel: 'Big Fee',
                    price: 100.0,
                    quantity: 1,
                    afqPaymentId: 85,
                    feeLineitemId: 381,
                    name: 'Big Fee',
                    description: 'App Fee',
                    sku: '2018',
                    label: 'Big Fee',
                    displayOrder: 0,
                    feeType: 'APP',
                    feeName: 'December 3 - Test Workflow',
                    feeLabel: 'December 3 - Test Workflow',
                    feeDescription: 'App Fee',
                    feeDisplayOrder: null,
                    feeRequired: true,
                    feeRequiredLineitemCount: 1
                },
                {
                    id: 43,
                    displayLabel: 'Little Fee',
                    price: 0.1,
                    quantity: 1,
                    afqPaymentId: 85,
                    feeLineitemId: 380,
                    name: 'Little Fee',
                    description: "Here's your description.",
                    sku: '2018',
                    label: 'Little Fee',
                    displayOrder: 0,
                    feeType: 'LNP',
                    feeName: 'December 3 - Test Workflow',
                    feeLabel: 'December 3 - Test Workflow',
                    feeDescription: "Here's your description.",
                    feeDisplayOrder: null,
                    feeRequired: true,
                    feeRequiredLineitemCount: 1
                },
                {
                    id: 44,
                    displayLabel: 'Convenience Fee',
                    price: 4.25,
                    quantity: 1,
                    afqPaymentId: 85,
                    feeLineitemId: 382,
                    name: 'ConvenienceFee',
                    description: 'Convenience Fee',
                    sku: 'ConvenienceFee',
                    label: 'Convenience Fee',
                    displayOrder: 1,
                    feeType: 'SERVICE',
                    feeName: 'ConvenienceFee',
                    feeLabel: 'Convenience Fee',
                    feeDescription: 'Convenience Fee',
                    feeDisplayOrder: null,
                    feeRequired: true,
                    feeRequiredLineitemCount: 1
                }
            ]
        }
    ]
};

module.exports.default = resource;
