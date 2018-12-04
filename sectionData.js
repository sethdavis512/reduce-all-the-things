const sectionData = {
    id: 263,
    agencyId: 1,
    name: 'Nov 29 - Test Fees',
    mspFormId: 16737,
    mspFormName: 'AFQ1841-1543509041276',
    status: 'ACTIVE',
    configScheme: {
        entity: { type: 'PERSON', label: 'Individual' },
        identity: { type: 'EMAIL', label: 'Non-Authenticated' },
        workflow: {
            enabled: false,
            label: 'Review',
            templateName: 'submissionReview',
            deployedProcessId: null,
            deployedDateTime: null,
            definitionId: null,
            definitionName: null,
            definitionKey: null,
            definitionTenantId: null,
            definitionVariables: []
        },
        documentUpload: {
            enabled: false,
            label: 'Document Upload',
            fieldSetName: 'DocumentUpload'
        },
        payment: { enabled: true },
        licensePermit: {
            enabled: false,
            type: null,
            label: null,
            lnpNotificationConfig: null
        },
        applicant: {
            enabled: true,
            personalInformation: { enabled: true },
            identificationInformation: {
                enabled: false,
                label: 'Identification Information',
                fieldSetName: 'IdentificationInformation'
            },
            businessInformation: { enabled: false },
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
    vanityURL: 'b7SDZssSSiuaptS9JoJNvQ',
    formNumber: '4848',
    identityType: 'EMAIL',
    category: 'permits',
    createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    createdDt: 1543509041737,
    updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    updatedDt: 1543959994134,
    publishedDt: 1543865614903,
    publishedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    afqVersionId: 292,
    mspFormVersionId: 25629,
    label: 'Nov 29 - Test Fees',
    subTitle: null,
    description: 'qwekrqkwerk',
    moreInfoUrl: '',
    primaryAddress: 'MailingAddress',
    afqVersionStatus: 'LIVE',
    submissionCompleteExpirationDays: 0,
    submissionDraftExpirationDays: 0,
    submissionEndDate: null,
    submissionStartDate: null,
    flatMeta: null,
    metadata: [],
    afqPaymentProviders: [
        {
            id: 159,
            paymentProvider: null,
            paymentMethodTypes: '["CC"]',
            version: 0,
            createdDt: 1543509153629,
            createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
            updatedDt: 1543509153629,
            updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1'
        }
    ],
    afqVersionCreatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    afqVersionCreatedDt: 1543509041743,
    afqVersionUpdatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    afqVersionUpdatedDt: 1543865614889,
    licensePermit: null,
    rules: [],
    fees: [],
    afqVersionMetaList: [],
    displaySections: [
        {
            name: 'infoCollection',
            label: 'Information Collection',
            index: 10,
            conditionalDisplay: false,
            type: 'PAGES',
            pages: [
                {
                    index: 1,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FIELDSETS',
                    fieldsets: [
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1543865618013,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618014,
                                    defaultValue: 'First Name',
                                    id: 627108,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618014,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618015,
                                    defaultValue: 'Last Name',
                                    id: 627109,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618015,
                                    visible: true
                                }
                            ],
                            formVersionId: 25969,
                            id: 148398,
                            instructions: '',
                            label: 'Personal Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'PersonalInformation',
                            order: 1,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1543865618013,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1543865618016,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618018,
                                    defaultValue: 'Email Address',
                                    id: 627110,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618018,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618019,
                                    defaultValue: 'Re-Enter Email Address',
                                    id: 627111,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618019,
                                    visible: true
                                }
                            ],
                            formVersionId: 25969,
                            id: 148399,
                            instructions: '',
                            label: 'Contact Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'ContactInformation',
                            order: 2,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1543865618016,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1543865618020,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618021,
                                    defaultValue: 'Address Line 1',
                                    id: 627112,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618021,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618022,
                                    defaultValue: 'City',
                                    id: 627113,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618022,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618023,
                                    defaultValue: 'State',
                                    id: 627114,
                                    index: 1,
                                    instructions: '',
                                    label: 'State',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'mailingState',
                                    options: [
                                        { display: 'AP', value: 'AP' },
                                        { display: 'AA', value: 'AA' },
                                        { display: 'AE', value: 'AE' },
                                        { display: 'Alabama', value: 'AL' },
                                        { display: 'Alaska', value: 'AK' },
                                        { display: 'Arizona', value: 'AZ' },
                                        { display: 'Arkansas', value: 'AR' },
                                        { display: 'California', value: 'CA' },
                                        { display: 'Colorado', value: 'CO' },
                                        { display: 'Connecticut', value: 'CT' },
                                        { display: 'Delaware', value: 'DE' },
                                        {
                                            display: 'District of Columbia',
                                            value: 'DC'
                                        },
                                        { display: 'Florida', value: 'FL' },
                                        { display: 'Georgia', value: 'GA' },
                                        { display: 'Hawaii', value: 'HI' },
                                        { display: 'Idaho', value: 'ID' },
                                        { display: 'Illinois', value: 'IL' },
                                        { display: 'Indiana', value: 'IN' },
                                        { display: 'Iowa', value: 'IA' },
                                        { display: 'Kansas', value: 'KS' },
                                        { display: 'Kentucky', value: 'KY' },
                                        { display: 'Lousiana', value: 'LA' },
                                        { display: 'Maine', value: 'ME' },
                                        { display: 'Maryland', value: 'MD' },
                                        {
                                            display: 'Massachusetts',
                                            value: 'MA'
                                        },
                                        { display: 'Michigan', value: 'MI' },
                                        { display: 'Minnesota', value: 'MN' },
                                        { display: 'Mississippi', value: 'MS' },
                                        { display: 'Missouri', value: 'MO' },
                                        { display: 'Montana', value: 'MT' },
                                        { display: 'Nebraska', value: 'NE' },
                                        { display: 'Nevada', value: 'NV' },
                                        {
                                            display: 'New Hampshire',
                                            value: 'NH'
                                        },
                                        { display: 'New Jersey', value: 'NJ' },
                                        { display: 'New Mexico', value: 'NM' },
                                        { display: 'New York', value: 'NY' },
                                        {
                                            display: 'North Carolina',
                                            value: 'NC'
                                        },
                                        {
                                            display: 'North Dakota',
                                            value: 'ND'
                                        },
                                        { display: 'Ohio', value: 'OH' },
                                        { display: 'Oklahoma', value: 'OK' },
                                        { display: 'Oregon', value: 'OR' },
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
                                        { display: 'Tennessee', value: 'TN' },
                                        { display: 'Texas', value: 'TX' },
                                        { display: 'Utah', value: 'UT' },
                                        { display: 'Vermont', value: 'VT' },
                                        { display: 'Virginia', value: 'VA' },
                                        { display: 'Washington', value: 'WA' },
                                        {
                                            display: 'West Virginia',
                                            value: 'WV'
                                        },
                                        { display: 'Wisconsin', value: 'WI' },
                                        { display: 'Wyoming', value: 'WY' }
                                    ],
                                    order: 3,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1543865618023,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1543865618045,
                                    defaultValue: 'ZIP Code',
                                    id: 627115,
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
                                    updatedBy: 0,
                                    updatedDate: 1543865618045,
                                    visible: true
                                }
                            ],
                            formVersionId: 25969,
                            id: 148400,
                            instructions: null,
                            label: 'Mailing Address',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'MailingAddress',
                            order: 3,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1543865618020,
                            visible: true
                        }
                    ],
                    feeOptions: null
                }
            ]
        },
        {
            name: 'questionsAndFees',
            label: 'Questions & Fees',
            index: 20,
            conditionalDisplay: false,
            type: 'PAGES',
            pages: [
                {
                    index: 1,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FIELDSETS',
                    fieldsets: [],
                    feeOptions: null
                },
                {
                    index: 2,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FEE_OPTIONS',
                    fieldsets: null,
                    feeOptions: [
                        {
                            id: 171,
                            feeType: 'LNP',
                            name: 'Nov 29 - Test Fees',
                            required: true,
                            requiredLineitemCount: 1,
                            displayOrder: 1,
                            label: 'Nov 29 - Test Fees',
                            description: '',
                            createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            createdDt: 1543864778423,
                            updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            updatedDt: 1543864778423,
                            feeLineitemList: [
                                {
                                    id: 368,
                                    name: 'a',
                                    description: '',
                                    sku: 'NR Fishing 04',
                                    label: 'a',
                                    price: '0.09',
                                    displayOrder: 0
                                },
                                {
                                    id: 369,
                                    name: 'b',
                                    description: '',
                                    sku: 'NR Fishing 04',
                                    label: 'b',
                                    price: '0.33',
                                    displayOrder: 1
                                }
                            ]
                        },
                        {
                            id: 125,
                            feeType: 'PROCESSOR',
                            name: 'JetPay Fee',
                            required: true,
                            requiredLineitemCount: 1,
                            displayOrder: null,
                            label: 'JetPay Fee',
                            description: 'JetPay Fee',
                            createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            createdDt: 1543510421351,
                            updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            updatedDt: 1543510421351,
                            feeLineitemList: [
                                {
                                    id: 276,
                                    name: 'JetPay Fee',
                                    description: 'JetPay Fee',
                                    sku: 'JetPay Fee',
                                    label: 'JetPay Fee',
                                    price: '0.00',
                                    displayOrder: 1
                                }
                            ]
                        },
                        {
                            id: 167,
                            feeType: 'APP',
                            name: 'Nov 29 - Test Fees',
                            required: true,
                            requiredLineitemCount: 1,
                            label: 'Nov 29 - Test Fees',
                            description: 'App Fee',
                            createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            createdDt: 1543862008119,
                            updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
                            updatedDt: 1543862008119,
                            displayOrder: 1,
                            feeLineitemList: [
                                {
                                    id: 360,
                                    name: 'abc',
                                    description: 'App Fee',
                                    sku: 'NR Fishing 04',
                                    label: 'abc',
                                    price: '0.00',
                                    displayOrder: 0
                                },
                                {
                                    id: 367,
                                    name: 'a',
                                    description: 'App Fee',
                                    sku: 'NR Fishing 04',
                                    label: 'a',
                                    price: '0.00',
                                    displayOrder: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'infoSummary',
            label: 'Information Summary',
            index: 30,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        },
        {
            name: 'payment',
            label: 'Payment',
            index: 40,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        },
        {
            name: 'confirmation',
            label: 'Confirmation',
            index: 50,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        }
    ]
};

module.exports.default = sectionData;
