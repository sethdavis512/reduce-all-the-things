const submissionData = {
    id: 291,
    agencyId: 1,
    name: 'A Really Big App',
    mspFormId: 17141,
    mspFormName: 'AFQ2061-1544042701919',
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
            enabled: true,
            label: 'Document Upload',
            fieldSetName: 'DocumentUpload'
        },
        payment: { enabled: true },
        licensePermit: {
            enabled: true,
            type: 'CERTIFICATE',
            label: 'Certificate',
            lnpNotificationConfig: {
                notificationTitle: 'Notification Title',
                notificationDescription: 'Notification Description'
            }
        },
        applicant: {
            enabled: true,
            personalInformation: { enabled: true },
            identificationInformation: {
                enabled: true,
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
            enabled: true,
            label: 'Signature',
            fieldsetName: 'ElectronicSignature'
        },
        displaySectionConfigList: null
    },
    vanityURL: '0yK3saHSMSumSii6LXmTQ',
    formNumber: '8919',
    identityType: 'EMAIL',
    category: 'permits',
    createdBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    createdDt: 1544042702139,
    updatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    updatedDt: 1544136131441,
    publishedDt: 1544136126918,
    publishedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    afqVersionId: 324,
    mspFormVersionId: 26281,
    label: 'A Really Big App',
    subTitle: 'A really great subtitle',
    description:
        'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
    moreInfoUrl: 'http://reallyimportanturl.com',
    primaryAddress: 'MailingAddress',
    afqVersionStatus: 'LIVE',
    submissionCompleteExpirationDays: 0,
    submissionDraftExpirationDays: 0,
    submissionEndDate: 1546322399999,
    submissionStartDate: null,
    flatMeta: null,
    metadata: [],
    afqPaymentProviders: [
        {
            id: 191,
            paymentProvider: null,
            paymentMethodTypes: '["CC"]',
            version: 0,
            createdDt: 1544043012007,
            createdBy: 'lnp-user',
            updatedDt: 1544043012007,
            updatedBy: 'lnp-user'
        }
    ],
    afqVersionCreatedBy: 'lnp-user',
    afqVersionCreatedDt: 1544043012000,
    afqVersionUpdatedBy: 'IllinoisTest_ILLINOIS\\ELP.TestUsr1',
    afqVersionUpdatedDt: 1544136131440,
    licensePermit: {
        id: 132,
        mspCertificateId: 5912,
        mspCertificateVersionId: 11701,
        validityDatesRangeType: 'START_DT_TO_END_DT',
        lnpValidityDatesConfig: {
            type: 'START_DT_TO_END_DT',
            startDate: '2019-02-01T06:00:00.001Z',
            endDate: '2019-03-01T05:59:59.999Z',
            duration: { type: null, value: null },
            submissionCutOffDate: null,
            onOrBeforeExpirationDate: null,
            afterExpirationDate: null,
            validatedISODateTime: '2018-12-05T20:49:05.180Z'
        },
        templates: [
            {
                id: 132,
                lnpProductTemplate: {
                    id: 5,
                    name: 'simplelandscapetemplate',
                    image_URL:
                        'https://localhost:9191/images/img/simplelandscapetemplate.png',
                    thumbnail_URL:
                        'https://localhost:9191/images/img/simplelandscapetemplate-t.png',
                    disclaimer_URL:
                        'https://localhost:9191/images/img/simplelandscapetemplate-disclaimer.png',
                    label: '1.',
                    description:
                        '<p>Simple - Landscape <br /> <br /> Select this option for a simplified view of the Certificate/License/Permit information. This includes items such as Agency Name, Agency Logo, Start Dates, Expiration Dates, Customer Information, Transaction Number and Total.</p>',
                    entityType: 'PERSON',
                    displayOrder: 1,
                    status: 'ACTIVE',
                    createdDt: 1536938395796,
                    createdBy: 'lnp-user',
                    updatedDt: 1536938395796,
                    updatedBy: 'lnp-user',
                    version: 0
                },
                mspCertTemplateId: 10982,
                disclaimerText:
                    'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham',
                version: 2,
                createdDt: 1544043012040,
                createdBy: 'lnp-user',
                updatedDt: 1544043012040,
                updatedBy: 'lnp-user'
            }
        ],
        version: 1,
        createdDt: 1544043012028,
        createdBy: 'lnp-user',
        updatedDt: 1544043012028,
        updatedBy: 'lnp-user'
    },
    rules: [
        {
            actions: [
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingPostalCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingState'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingZipCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingCounty'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingWard'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001688,
            id: 76070,
            label: 'mailingCountryNotUS',
            name: 'mailingCountryNotUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001688,
            value: "params.mailingCountry != 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingPostalCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingState'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingZipCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingCounty'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'mailingWard'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001695,
            id: 76071,
            label: 'mailingCountryUS',
            name: 'mailingCountryUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001695,
            value: "params.mailingCountry == 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalPostalCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalState'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalZipCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalCounty'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001706,
            id: 76072,
            label: 'physicalCountryUS',
            name: 'physicalCountryUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001706,
            value: "params.physicalCountry == 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternatePostalCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateState'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateZipCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateCounty'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001713,
            id: 76073,
            label: 'alternateCountryNotUS',
            name: 'alternateCountryNotUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001713,
            value: "params.alternateCountry != 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternatePostalCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateState'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateZipCode'
                },
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'alternateCounty'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001719,
            id: 76074,
            label: 'alternateCountryUS',
            name: 'alternateCountryUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001719,
            value: "params.alternateCountry == 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalPostalCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalState'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalZipCode'
                },
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'physicalCounty'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001725,
            id: 76075,
            label: 'physicalCountryNotUS',
            name: 'physicalCountryNotUS-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001725,
            value: "params.physicalCountry != 'United States'"
        },
        {
            actions: [
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'stateSelectInt'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001731,
            id: 76076,
            label: 'InternationalIdTypeDisplayStateYes',
            name: 'InternationalIdTypeDisplayStateYes-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001731,
            value: "params.internationalIdType == 'State ID'"
        },
        {
            actions: [
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'stateSelectInt'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001734,
            id: 76077,
            label: 'InternationalIdTypeDisplayStateNo',
            name: 'InternationalIdTypeDisplayStateNo-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001734,
            value: "params.internationalIdType != 'State ID'"
        },
        {
            actions: [
                {
                    actionType: 'VISIBLE',
                    targetElement: 'FIELD',
                    targetElementName: 'stateSelectUS'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001737,
            id: 76078,
            label: 'UsIdTypeDisplayStateYes',
            name: 'UsIdTypeDisplayStateYes-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001737,
            value:
                "params.usIdType == 'Driver License' || params.usIdType == 'State ID'"
        },
        {
            actions: [
                {
                    actionType: 'HIDE',
                    targetElement: 'FIELD',
                    targetElementName: 'stateSelectUS'
                }
            ],
            category: 'applicant',
            createdBy: 0,
            createdDate: 1544043001740,
            id: 76079,
            label: 'UsIdTypeDisplayStateNo',
            name: 'UsIdTypeDisplayStateNo-Rule',
            ruleLevel: 'PLATFORM',
            ruleType: 'GROOVYEXP',
            sourceElementName: null,
            updatedBy: 0,
            updatedDate: 1544043001740,
            value:
                "params.usIdType != 'Driver License' || params.usIdType != 'State ID'"
        }
    ],
    fees: [],
    endorsementOptionResource: null,
    afqVersionMetaList: [
        { id: 167, key: 'NotificationTitle', value: 'Notification Title' },
        {
            id: 168,
            key: 'NotificationDescription',
            value:
                'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham'
        }
    ],
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
                            createdDate: 1544043000257,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000259,
                                    defaultValue: 'Prefix',
                                    id: 637050,
                                    index: 1,
                                    instructions: '',
                                    label: 'Prefix',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'prefix',
                                    options: [
                                        { display: 'Mr.', value: 'Mr' },
                                        { display: 'Ms.', value: 'Ms' },
                                        { display: 'Mrs.', value: 'Mrs' }
                                    ],
                                    order: 1,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000259,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000269,
                                    defaultValue: 'First Name',
                                    id: 637051,
                                    index: 1,
                                    instructions: '',
                                    label: 'First Name',
                                    maskFormat: null,
                                    max: 30,
                                    min: 1,
                                    name: 'firstName',
                                    options: null,
                                    order: 2,
                                    pattern:
                                        "^['a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000269,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000271,
                                    defaultValue: 'Middle Name',
                                    id: 637052,
                                    index: 1,
                                    instructions: '',
                                    label: 'Middle Name',
                                    maskFormat: null,
                                    max: 25,
                                    min: 1,
                                    name: 'middleName',
                                    options: null,
                                    order: 3,
                                    pattern:
                                        "^['a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000271,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000273,
                                    defaultValue: 'Last Name',
                                    id: 637053,
                                    index: 1,
                                    instructions: '',
                                    label: 'Last Name',
                                    maskFormat: null,
                                    max: 30,
                                    min: 1,
                                    name: 'lastName',
                                    options: null,
                                    order: 4,
                                    pattern:
                                        "^['a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000273,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000275,
                                    defaultValue: 'Suffix',
                                    id: 637054,
                                    index: 1,
                                    instructions: '',
                                    label: 'Suffix',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'suffix',
                                    options: [
                                        { display: 'Sr', value: 'Sr' },
                                        { display: 'Jr', value: 'Jr' },
                                        { display: 'I', value: 'I' },
                                        { display: 'II', value: 'II' },
                                        { display: 'III', value: 'III' },
                                        { display: 'IV', value: 'IV' },
                                        { display: 'V', value: 'V' },
                                        { display: 'VI', value: 'VI' },
                                        { display: 'VII', value: 'VII' },
                                        { display: 'VIII', value: 'VIII' },
                                        { display: 'IX', value: 'IX' },
                                        { display: 'X', value: 'X' }
                                    ],
                                    order: 5,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000275,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150680,
                            instructions: '',
                            label: 'Personal Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'PersonalInformation',
                            order: 2,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043000257,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043000287,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000289,
                                    defaultValue: 'Phone Number',
                                    id: 637055,
                                    index: 1,
                                    instructions: '',
                                    label: 'Phone Number',
                                    maskFormat: null,
                                    max: 10,
                                    min: 10,
                                    name: 'phoneNumber',
                                    options: null,
                                    order: 1,
                                    pattern:
                                        '\\(([1-9]\\d{2})\\)[ ]([0-9]{3})[-]([0-9]{4})',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEL',
                                    updatedBy: 0,
                                    updatedDate: 1544043000289,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000291,
                                    defaultValue: 'Alternate Phone Number',
                                    id: 637056,
                                    index: 1,
                                    instructions: '',
                                    label: 'Alternate Phone Number',
                                    maskFormat: null,
                                    max: 10,
                                    min: 10,
                                    name: 'alternatePhoneNumber',
                                    options: null,
                                    order: 2,
                                    pattern:
                                        '\\(([1-9]\\d{2})\\)[ ]([0-9]{3})[-]([0-9]{4})',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEL',
                                    updatedBy: 0,
                                    updatedDate: 1544043000291,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000293,
                                    defaultValue: 'Email Address',
                                    id: 637057,
                                    index: 1,
                                    instructions: '',
                                    label: 'Email Address',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'emailAddress',
                                    options: null,
                                    order: 3,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'EMAIL',
                                    updatedBy: 0,
                                    updatedDate: 1544043000293,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000295,
                                    defaultValue: 'Re-Enter Email Address',
                                    id: 637058,
                                    index: 1,
                                    instructions: '',
                                    label: 'Re-Enter Email Address',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'reEnterEmailAddress',
                                    options: null,
                                    order: 4,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'EMAIL',
                                    updatedBy: 0,
                                    updatedDate: 1544043000295,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150681,
                            instructions: '',
                            label: 'Contact Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'ContactInformation',
                            order: 3,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043000287,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043000298,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000300,
                                    defaultValue: 'Address Line 1',
                                    id: 637059,
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
                                    updatedDate: 1544043000300,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000302,
                                    defaultValue: 'Address Line 2',
                                    id: 637060,
                                    index: 1,
                                    instructions: '',
                                    label: 'Address Line 2',
                                    maskFormat: null,
                                    max: 70,
                                    min: 1,
                                    name: 'mailingAddressLine2',
                                    options: null,
                                    order: 2,
                                    pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000302,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000304,
                                    defaultValue: 'City',
                                    id: 637061,
                                    index: 1,
                                    instructions: '',
                                    label: 'City',
                                    maskFormat: null,
                                    max: 58,
                                    min: 1,
                                    name: 'mailingCity',
                                    options: null,
                                    order: 3,
                                    pattern: "^[a-zA-Z'.\\s-]{1,58}$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000304,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000306,
                                    defaultValue: 'State',
                                    id: 637062,
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
                                    order: 4,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000306,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000355,
                                    defaultValue: 'ZIP Code',
                                    id: 637063,
                                    index: 1,
                                    instructions: '',
                                    label: 'ZIP Code',
                                    maskFormat: null,
                                    max: 10,
                                    min: 1,
                                    name: 'mailingZipCode',
                                    options: null,
                                    order: 5,
                                    pattern: '^\\d{5}(?:[-]\\d{4})?$',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000355,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000357,
                                    defaultValue: 'Ward',
                                    id: 637064,
                                    index: 1,
                                    instructions: '',
                                    label: 'Ward',
                                    maskFormat: null,
                                    max: 25,
                                    min: 1,
                                    name: 'mailingWard',
                                    options: null,
                                    order: 6,
                                    pattern: "^[a-zA-Z0-9'\\s-]{1,25}$",
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000357,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000359,
                                    defaultValue: 'County',
                                    id: 637065,
                                    index: 1,
                                    instructions: '',
                                    label: 'County',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'mailingCounty',
                                    options: [
                                        { display: 'Adams', value: 'Adams' },
                                        {
                                            display: 'Alexander',
                                            value: 'Alexander'
                                        },
                                        { display: 'Bond', value: 'Bond' },
                                        { display: 'Boone', value: 'Boone' },
                                        { display: 'Brown', value: 'Brown' },
                                        { display: 'Bureau', value: 'Bureau' },
                                        {
                                            display: 'Calhoun',
                                            value: 'Calhoun'
                                        },
                                        {
                                            display: 'Carroll',
                                            value: 'Carroll'
                                        },
                                        { display: 'Cass', value: 'Cass' },
                                        {
                                            display: 'Champaign',
                                            value: 'Champaign'
                                        },
                                        {
                                            display: 'Christian',
                                            value: 'Christian'
                                        },
                                        { display: 'Clark', value: 'Clark' },
                                        { display: 'Clay', value: 'Clay' },
                                        {
                                            display: 'Clinton',
                                            value: 'Clinton'
                                        },
                                        { display: 'Coles', value: 'Coles' },
                                        { display: 'Cook', value: 'Cook' },
                                        {
                                            display: 'Crawford',
                                            value: 'Crawford'
                                        },
                                        {
                                            display: 'Cumberland',
                                            value: 'Cumberland'
                                        },
                                        {
                                            display: 'De Witt',
                                            value: 'De Witt'
                                        },
                                        { display: 'DeKalb', value: 'DeKalb' },
                                        {
                                            display: 'Douglas',
                                            value: 'Douglas'
                                        },
                                        { display: 'DuPage', value: 'DuPage' },
                                        { display: 'Edgar', value: 'Edgar' },
                                        {
                                            display: 'Edwards',
                                            value: 'Edwards'
                                        },
                                        {
                                            display: 'Effingham',
                                            value: 'Effingham'
                                        },
                                        {
                                            display: 'Fayette',
                                            value: 'Fayette'
                                        },
                                        { display: 'Ford', value: 'Ford' },
                                        {
                                            display: 'Franklin',
                                            value: 'Franklin'
                                        },
                                        { display: 'Fulton', value: 'Fulton' },
                                        {
                                            display: 'Gallatin',
                                            value: 'Gallatin'
                                        },
                                        { display: 'Greene', value: 'Greene' },
                                        { display: 'Grundy', value: 'Grundy' },
                                        {
                                            display: 'Hamilton',
                                            value: 'Hamilton'
                                        },
                                        {
                                            display: 'Hancock',
                                            value: 'Hancock'
                                        },
                                        { display: 'Hardin', value: 'Hardin' },
                                        {
                                            display: 'Henderson',
                                            value: 'Henderson'
                                        },
                                        { display: 'Henry', value: 'Henry' },
                                        {
                                            display: 'Iroquois',
                                            value: 'Iroquois'
                                        },
                                        {
                                            display: 'Jackson',
                                            value: 'Jackson'
                                        },
                                        { display: 'Jasper', value: 'Jasper' },
                                        {
                                            display: 'Jefferson',
                                            value: 'Jefferson'
                                        },
                                        { display: 'Jersey', value: 'Jersey' },
                                        {
                                            display: 'Jo Daviess',
                                            value: 'Jo Daviess'
                                        },
                                        {
                                            display: 'Johnson',
                                            value: 'Johnson'
                                        },
                                        { display: 'Kane', value: 'Kane' },
                                        {
                                            display: 'Kankakee',
                                            value: 'Kankakee'
                                        },
                                        {
                                            display: 'Kendall',
                                            value: 'Kendall'
                                        },
                                        { display: 'Knox', value: 'Knox' },
                                        {
                                            display: 'La Salle',
                                            value: 'La Salle'
                                        },
                                        { display: 'Lake', value: 'Lake' },
                                        {
                                            display: 'Lawrence',
                                            value: 'Lawrence'
                                        },
                                        { display: 'Lee', value: 'Lee' },
                                        {
                                            display: 'Livingston',
                                            value: 'Livingston'
                                        },
                                        { display: 'Logan', value: 'Logan' },
                                        { display: 'Macon', value: 'Macon' },
                                        {
                                            display: 'Macoupin',
                                            value: 'Macoupin'
                                        },
                                        {
                                            display: 'Madison',
                                            value: 'Madison'
                                        },
                                        { display: 'Marion', value: 'Marion' },
                                        {
                                            display: 'Marshall',
                                            value: 'Marshall'
                                        },
                                        { display: 'Mason', value: 'Mason' },
                                        { display: 'Massac', value: 'Massac' },
                                        {
                                            display: 'McDonough',
                                            value: 'McDonough'
                                        },
                                        {
                                            display: 'McHenry',
                                            value: 'McHenry'
                                        },
                                        { display: 'McLean', value: 'McLean' },
                                        { display: 'Menard', value: 'Menard' },
                                        { display: 'Mercer', value: 'Mercer' },
                                        { display: 'Monroe', value: 'Monroe' },
                                        {
                                            display: 'Montgomery',
                                            value: 'Montgomery'
                                        },
                                        { display: 'Morgan', value: 'Morgan' },
                                        {
                                            display: 'Moultrie',
                                            value: 'Moultrie'
                                        },
                                        { display: 'Ogle', value: 'Ogle' },
                                        { display: 'Peoria', value: 'Peoria' },
                                        { display: 'Perry', value: 'Perry' },
                                        { display: 'Piatt', value: 'Piatt' },
                                        { display: 'Pike', value: 'Pike' },
                                        { display: 'Pope', value: 'Pope' },
                                        {
                                            display: 'Pulaski',
                                            value: 'Pulaski'
                                        },
                                        { display: 'Putnam', value: 'Putnam' },
                                        {
                                            display: 'Randolph',
                                            value: 'Randolph'
                                        },
                                        {
                                            display: 'Richland',
                                            value: 'Richland'
                                        },
                                        {
                                            display: 'Rock Island',
                                            value: 'Rock Island'
                                        },
                                        { display: 'Saline', value: 'Saline' },
                                        {
                                            display: 'Sangamon',
                                            value: 'Sangamon'
                                        },
                                        {
                                            display: 'Schuyler',
                                            value: 'Schuyler'
                                        },
                                        { display: 'Scott', value: 'Scott' },
                                        { display: 'Shelby', value: 'Shelby' },
                                        {
                                            display: 'St. Clair',
                                            value: 'St. Clair'
                                        },
                                        { display: 'Stark', value: 'Stark' },
                                        {
                                            display: 'Stephenson',
                                            value: 'Stephenson'
                                        },
                                        {
                                            display: 'Tazewell',
                                            value: 'Tazewell'
                                        },
                                        { display: 'Union', value: 'Union' },
                                        {
                                            display: 'Vermilion',
                                            value: 'Vermilion'
                                        },
                                        { display: 'Wabash', value: 'Wabash' },
                                        { display: 'Warren', value: 'Warren' },
                                        {
                                            display: 'Washington',
                                            value: 'Washington'
                                        },
                                        { display: 'Wayne', value: 'Wayne' },
                                        { display: 'White', value: 'White' },
                                        {
                                            display: 'Whiteside',
                                            value: 'Whiteside'
                                        },
                                        { display: 'Will', value: 'Will' },
                                        {
                                            display: 'Williamson',
                                            value: 'Williamson'
                                        },
                                        {
                                            display: 'Winnebago',
                                            value: 'Winnebago'
                                        },
                                        {
                                            display: 'Woodford',
                                            value: 'Woodford'
                                        }
                                    ],
                                    order: 7,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000359,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000451,
                                    defaultValue: 'Country',
                                    id: 637066,
                                    index: 1,
                                    instructions: '',
                                    label: 'Country',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'mailingCountry',
                                    options: [
                                        {
                                            display: 'United States',
                                            value: 'United States'
                                        },
                                        { display: 'Canada', value: 'CA' },
                                        { display: 'Mexico', value: 'MX' },
                                        { display: 'Afghanistan', value: 'AF' },
                                        {
                                            display: 'Åland Islands',
                                            value: 'AX'
                                        },
                                        { display: 'Albania', value: 'AL' },
                                        { display: 'Algeria', value: 'DZ' },
                                        {
                                            display: 'American Samoa',
                                            value: 'AS'
                                        },
                                        { display: 'AndorrA', value: 'AD' },
                                        { display: 'Angola', value: 'AO' },
                                        { display: 'Anguilla', value: 'AI' },
                                        { display: 'Antarctica', value: 'AQ' },
                                        {
                                            display: 'Antigua and Barbuda',
                                            value: 'AG'
                                        },
                                        { display: 'Argentina', value: 'AR' },
                                        { display: 'Armenia', value: 'AM' },
                                        { display: 'Aruba', value: 'AW' },
                                        { display: 'Australia', value: 'AU' },
                                        { display: 'Austria', value: 'AT' },
                                        { display: 'Azerbaijan', value: 'AZ' },
                                        { display: 'Bahamas', value: 'BS' },
                                        { display: 'Bahrain', value: 'BH' },
                                        { display: 'Bangladesh', value: 'BD' },
                                        { display: 'Barbados', value: 'BB' },
                                        { display: 'Belarus', value: 'BY' },
                                        { display: 'Belgium', value: 'BE' },
                                        { display: 'Belize', value: 'BZ' },
                                        { display: 'Benin', value: 'BJ' },
                                        { display: 'Bermuda', value: 'BM' },
                                        { display: 'Bhutan', value: 'BT' },
                                        { display: 'Bolivia', value: 'BO' },
                                        {
                                            display: 'Bosnia and Herzegovina',
                                            value: 'BA'
                                        },
                                        { display: 'Botswana', value: 'BW' },
                                        {
                                            display: 'Bouvet Island',
                                            value: 'BV'
                                        },
                                        { display: 'Brazil', value: 'BR' },
                                        {
                                            display:
                                                'British Indian Ocean Territory',
                                            value: 'IO'
                                        },
                                        {
                                            display: 'Brunei Darussalam',
                                            value: 'BN'
                                        },
                                        { display: 'Bulgaria', value: 'BG' },
                                        {
                                            display: 'Burkina Faso',
                                            value: 'BF'
                                        },
                                        { display: 'Burundi', value: 'BI' },
                                        { display: 'Cambodia', value: 'KH' },
                                        { display: 'Cameroon', value: 'CM' },
                                        { display: 'Cape Verde', value: 'CV' },
                                        {
                                            display: 'Cayman Islands',
                                            value: 'KY'
                                        },
                                        {
                                            display: 'Central African Republic',
                                            value: 'CF'
                                        },
                                        { display: 'Chad', value: 'TD' },
                                        { display: 'Chile', value: 'CL' },
                                        { display: 'China', value: 'CN' },
                                        {
                                            display: 'Christmas Island',
                                            value: 'CX'
                                        },
                                        {
                                            display: 'Cocos (Keeling) Islands',
                                            value: 'CC'
                                        },
                                        { display: 'Colombia', value: 'CO' },
                                        { display: 'Comoros', value: 'KM' },
                                        { display: 'Congo', value: 'CG' },
                                        {
                                            display:
                                                'Congo, The Democratic Republic of the',
                                            value: 'CD'
                                        },
                                        {
                                            display: 'Cook Islands',
                                            value: 'CK'
                                        },
                                        { display: 'Costa Rica', value: 'CR' },
                                        {
                                            display: "Cote D'Ivoire",
                                            value: 'CI'
                                        },
                                        { display: 'Croatia', value: 'HR' },
                                        { display: 'Cuba', value: 'CU' },
                                        { display: 'Cyprus', value: 'CY' },
                                        {
                                            display: 'Czech Republic',
                                            value: 'CZ'
                                        },
                                        { display: 'Denmark', value: 'DK' },
                                        { display: 'Djibouti', value: 'DJ' },
                                        { display: 'Dominica', value: 'DM' },
                                        {
                                            display: 'Dominican Republic',
                                            value: 'DO'
                                        },
                                        { display: 'Ecuador', value: 'EC' },
                                        { display: 'Egypt', value: 'EG' },
                                        { display: 'El Salvador', value: 'SV' },
                                        {
                                            display: 'Equatorial Guinea',
                                            value: 'GQ'
                                        },
                                        { display: 'Eritrea', value: 'ER' },
                                        { display: 'Estonia', value: 'EE' },
                                        { display: 'Ethiopia', value: 'ET' },
                                        {
                                            display:
                                                'Falkland Islands (Malvinas)',
                                            value: 'FK'
                                        },
                                        {
                                            display: 'Faroe Islands',
                                            value: 'FO'
                                        },
                                        { display: 'Fiji', value: 'FJ' },
                                        { display: 'Finland', value: 'FI' },
                                        { display: 'France', value: 'FR' },
                                        {
                                            display: 'French Guiana',
                                            value: 'GF'
                                        },
                                        {
                                            display: 'French Polynesia',
                                            value: 'PF'
                                        },
                                        {
                                            display:
                                                'French Southern Territories',
                                            value: 'TF'
                                        },
                                        { display: 'Gabon', value: 'GA' },
                                        { display: 'Gambia', value: 'GM' },
                                        { display: 'Georgia', value: 'GE' },
                                        { display: 'Germany', value: 'DE' },
                                        { display: 'Ghana', value: 'GH' },
                                        { display: 'Gibraltar', value: 'GI' },
                                        { display: 'Greece', value: 'GR' },
                                        { display: 'Greenland', value: 'GL' },
                                        { display: 'Grenada', value: 'GD' },
                                        { display: 'Guadeloupe', value: 'GP' },
                                        { display: 'Guam', value: 'GU' },
                                        { display: 'Guatemala', value: 'GT' },
                                        { display: 'Guernsey', value: 'GG' },
                                        { display: 'Guinea', value: 'GN' },
                                        {
                                            display: 'Guinea-Bissau',
                                            value: 'GW'
                                        },
                                        { display: 'Guyana', value: 'GY' },
                                        { display: 'Haiti', value: 'HT' },
                                        {
                                            display:
                                                'Heard Island and Mcdonald Islands',
                                            value: 'HM'
                                        },
                                        {
                                            display:
                                                'Holy See (Vatican City State)',
                                            value: 'VA'
                                        },
                                        { display: 'Honduras', value: 'HN' },
                                        { display: 'Hong Kong', value: 'HK' },
                                        { display: 'Hungary', value: 'HU' },
                                        { display: 'Iceland', value: 'IS' },
                                        { display: 'India', value: 'IN' },
                                        { display: 'Indonesia', value: 'ID' },
                                        {
                                            display:
                                                'Iran, Islamic Republic Of',
                                            value: 'IR'
                                        },
                                        { display: 'Iraq', value: 'IQ' },
                                        { display: 'Ireland', value: 'IE' },
                                        { display: 'Isle of Man', value: 'IM' },
                                        { display: 'Israel', value: 'IL' },
                                        { display: 'Italy', value: 'IT' },
                                        { display: 'Jamaica', value: 'JM' },
                                        { display: 'Japan', value: 'JP' },
                                        { display: 'Jersey', value: 'JE' },
                                        { display: 'Jordan', value: 'JO' },
                                        { display: 'Kazakhstan', value: 'KZ' },
                                        { display: 'Kenya', value: 'KE' },
                                        { display: 'Kiribati', value: 'KI' },
                                        {
                                            display:
                                                "Korea, Democratic People'S Republic of",
                                            value: 'KP'
                                        },
                                        {
                                            display: 'Korea, Republic of',
                                            value: 'KR'
                                        },
                                        { display: 'Kuwait', value: 'KW' },
                                        { display: 'Kyrgyzstan', value: 'KG' },
                                        {
                                            display:
                                                "Lao People'S Democratic Republic",
                                            value: 'LA'
                                        },
                                        { display: 'Latvia', value: 'LV' },
                                        { display: 'Lebanon', value: 'LB' },
                                        { display: 'Lesotho', value: 'LS' },
                                        { display: 'Liberia', value: 'LR' },
                                        {
                                            display: 'Libyan Arab Jamahiriya',
                                            value: 'LY'
                                        },
                                        {
                                            display: 'Liechtenstein',
                                            value: 'LI'
                                        },
                                        { display: 'Lithuania', value: 'LT' },
                                        { display: 'Luxembourg', value: 'LU' },
                                        { display: 'Macao', value: 'MO' },
                                        {
                                            display:
                                                'Macedonia, The Former Yugoslav Republic of',
                                            value: 'MK'
                                        },
                                        { display: 'Madagascar', value: 'MG' },
                                        { display: 'Malawi', value: 'MW' },
                                        { display: 'Malaysia', value: 'MY' },
                                        { display: 'Maldives', value: 'MV' },
                                        { display: 'Mali', value: 'ML' },
                                        { display: 'Malta', value: 'MT' },
                                        {
                                            display: 'Marshall Islands',
                                            value: 'MH'
                                        },
                                        { display: 'Martinique', value: 'MQ' },
                                        { display: 'Mauritania', value: 'MR' },
                                        { display: 'Mauritius', value: 'MU' },
                                        { display: 'Mayotte', value: 'YT' },
                                        {
                                            display:
                                                'Micronesia, Federated States of',
                                            value: 'FM'
                                        },
                                        {
                                            display: 'Moldova, Republic of',
                                            value: 'MD'
                                        },
                                        { display: 'Monaco', value: 'MC' },
                                        { display: 'Mongolia', value: 'MN' },
                                        { display: 'Montserrat', value: 'MS' },
                                        { display: 'Morocco', value: 'MA' },
                                        { display: 'Mozambique', value: 'MZ' },
                                        { display: 'Myanmar', value: 'MM' },
                                        { display: 'Namibia', value: 'NA' },
                                        { display: 'Nauru', value: 'NR' },
                                        { display: 'Nepal', value: 'NP' },
                                        { display: 'Netherlands', value: 'NL' },
                                        {
                                            display: 'Netherlands Antilles',
                                            value: 'AN'
                                        },
                                        {
                                            display: 'New Caledonia',
                                            value: 'NC'
                                        },
                                        { display: 'New Zealand', value: 'NZ' },
                                        { display: 'Nicaragua', value: 'NI' },
                                        { display: 'Niger', value: 'NE' },
                                        { display: 'Nigeria', value: 'NG' },
                                        { display: 'Niue', value: 'NU' },
                                        {
                                            display: 'Norfolk Island',
                                            value: 'NF'
                                        },
                                        {
                                            display: 'Northern Mariana Islands',
                                            value: 'MP'
                                        },
                                        { display: 'Norway', value: 'NO' },
                                        { display: 'Oman', value: 'OM' },
                                        { display: 'Pakistan', value: 'PK' },
                                        { display: 'Palau', value: 'PW' },
                                        {
                                            display:
                                                'Palestinian Territory, Occupied',
                                            value: 'PS'
                                        },
                                        { display: 'Panama', value: 'PA' },
                                        {
                                            display: 'Papua New Guinea',
                                            value: 'PG'
                                        },
                                        { display: 'Paraguay', value: 'PY' },
                                        { display: 'Peru', value: 'PE' },
                                        { display: 'Philippines', value: 'PH' },
                                        { display: 'Pitcairn', value: 'PN' },
                                        { display: 'Poland', value: 'PL' },
                                        { display: 'Portugal', value: 'PT' },
                                        { display: 'Puerto Rico', value: 'PR' },
                                        { display: 'Qatar', value: 'QA' },
                                        { display: 'Reunion', value: 'RE' },
                                        { display: 'Romania', value: 'RO' },
                                        {
                                            display: 'Russian Federation',
                                            value: 'RU'
                                        },
                                        { display: 'RWANDA', value: 'RW' },
                                        {
                                            display: 'Saint Helena',
                                            value: 'SH'
                                        },
                                        {
                                            display: 'Saint Kitts and Nevis',
                                            value: 'KN'
                                        },
                                        { display: 'Saint Lucia', value: 'LC' },
                                        {
                                            display:
                                                'Saint Pierre and Miquelon',
                                            value: 'PM'
                                        },
                                        {
                                            display:
                                                'Saint Vincent and the Grenadines',
                                            value: 'VC'
                                        },
                                        { display: 'Samoa', value: 'WS' },
                                        { display: 'San Marino', value: 'SM' },
                                        {
                                            display: 'Sao Tome and Principe',
                                            value: 'ST'
                                        },
                                        {
                                            display: 'Saudi Arabia',
                                            value: 'SA'
                                        },
                                        { display: 'Senegal', value: 'SN' },
                                        {
                                            display: 'Serbia and Montenegro',
                                            value: 'CS'
                                        },
                                        { display: 'Seychelles', value: 'SC' },
                                        {
                                            display: 'Sierra Leone',
                                            value: 'SL'
                                        },
                                        { display: 'Singapore', value: 'SG' },
                                        { display: 'Slovakia', value: 'SK' },
                                        { display: 'Slovenia', value: 'SI' },
                                        {
                                            display: 'Solomon Islands',
                                            value: 'SB'
                                        },
                                        { display: 'Somalia', value: 'SO' },
                                        {
                                            display: 'South Africa',
                                            value: 'ZA'
                                        },
                                        {
                                            display:
                                                'South Georgia and the South Sandwich Islands',
                                            value: 'GS'
                                        },
                                        { display: 'Spain', value: 'ES' },
                                        { display: 'Sri Lanka', value: 'LK' },
                                        { display: 'Sudan', value: 'SD' },
                                        { display: 'Suridisplay', value: 'SR' },
                                        {
                                            display: 'Svalbard and Jan Mayen',
                                            value: 'SJ'
                                        },
                                        { display: 'Swaziland', value: 'SZ' },
                                        { display: 'Sweden', value: 'SE' },
                                        { display: 'Switzerland', value: 'CH' },
                                        {
                                            display: 'Syrian Arab Republic',
                                            value: 'SY'
                                        },
                                        {
                                            display:
                                                'Taiwan, Province of China',
                                            value: 'TW'
                                        },
                                        { display: 'Tajikistan', value: 'TJ' },
                                        {
                                            display:
                                                'Tanzania, United Republic of',
                                            value: 'TZ'
                                        },
                                        { display: 'Thailand', value: 'TH' },
                                        { display: 'Timor-Leste', value: 'TL' },
                                        { display: 'Togo', value: 'TG' },
                                        { display: 'Tokelau', value: 'TK' },
                                        { display: 'Tonga', value: 'TO' },
                                        {
                                            display: 'Trinidad and Tobago',
                                            value: 'TT'
                                        },
                                        { display: 'Tunisia', value: 'TN' },
                                        { display: 'Turkey', value: 'TR' },
                                        {
                                            display: 'Turkmenistan',
                                            value: 'TM'
                                        },
                                        {
                                            display: 'Turks and Caicos Islands',
                                            value: 'TC'
                                        },
                                        { display: 'Tuvalu', value: 'TV' },
                                        { display: 'Uganda', value: 'UG' },
                                        { display: 'Ukraine', value: 'UA' },
                                        {
                                            display: 'United Arab Emirates',
                                            value: 'AE'
                                        },
                                        {
                                            display: 'United Kingdom',
                                            value: 'GB'
                                        },
                                        {
                                            display:
                                                'United States Minor Outlying Islands',
                                            value: 'UM'
                                        },
                                        { display: 'Uruguay', value: 'UY' },
                                        { display: 'Uzbekistan', value: 'UZ' },
                                        { display: 'Vanuatu', value: 'VU' },
                                        { display: 'Venezuela', value: 'VE' },
                                        { display: 'Viet Nam', value: 'VN' },
                                        {
                                            display: 'Virgin Islands, British',
                                            value: 'VG'
                                        },
                                        {
                                            display: 'Virgin Islands, U.S.',
                                            value: 'VI'
                                        },
                                        {
                                            display: 'Wallis and Futuna',
                                            value: 'WF'
                                        },
                                        {
                                            display: 'Western Sahara',
                                            value: 'EH'
                                        },
                                        { display: 'Yemen', value: 'YE' },
                                        { display: 'Zambia', value: 'ZM' },
                                        { display: 'Zimbabwe', value: 'ZW' }
                                    ],
                                    order: 8,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000451,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000665,
                                    defaultValue: 'Postal Code',
                                    id: 637067,
                                    index: 1,
                                    instructions: '',
                                    label: 'Postal Code',
                                    maskFormat: null,
                                    max: 20,
                                    min: 1,
                                    name: 'mailingPostalCode',
                                    options: null,
                                    order: 9,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043000665,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150682,
                            instructions: null,
                            label: 'Mailing Address',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'MailingAddress',
                            order: 4,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043000298,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043000667,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000669,
                                    defaultValue: 'Address Line 1',
                                    id: 637068,
                                    index: 1,
                                    instructions: '',
                                    label: 'Address Line 1',
                                    maskFormat: null,
                                    max: 70,
                                    min: 1,
                                    name: 'physicalAddressLine1',
                                    options: null,
                                    order: 1,
                                    pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000669,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000671,
                                    defaultValue: 'Address Line 2',
                                    id: 637069,
                                    index: 1,
                                    instructions: '',
                                    label: 'Address Line 2',
                                    maskFormat: null,
                                    max: 70,
                                    min: 1,
                                    name: 'physicalAddressLine2',
                                    options: null,
                                    order: 2,
                                    pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000671,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000673,
                                    defaultValue: 'City',
                                    id: 637070,
                                    index: 1,
                                    instructions: '',
                                    label: 'City',
                                    maskFormat: null,
                                    max: 58,
                                    min: 1,
                                    name: 'physicalCity',
                                    options: null,
                                    order: 3,
                                    pattern: "^[a-zA-Z'.\\s-]{1,58}$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000673,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000675,
                                    defaultValue: 'State',
                                    id: 637071,
                                    index: 1,
                                    instructions: '',
                                    label: 'State',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'physicalState',
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
                                    order: 4,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000675,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000727,
                                    defaultValue: 'ZIP Code',
                                    id: 637072,
                                    index: 1,
                                    instructions: '',
                                    label: 'ZIP Code',
                                    maskFormat: null,
                                    max: 10,
                                    min: 1,
                                    name: 'physicalZipCode',
                                    options: null,
                                    order: 5,
                                    pattern: '^\\d{5}(?:[-]\\d{4})?$',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000727,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000729,
                                    defaultValue: 'County',
                                    id: 637073,
                                    index: 1,
                                    instructions: '',
                                    label: 'County',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'physicalCounty',
                                    options: [
                                        { display: 'Adams', value: 'Adams' },
                                        {
                                            display: 'Alexander',
                                            value: 'Alexander'
                                        },
                                        { display: 'Bond', value: 'Bond' },
                                        { display: 'Boone', value: 'Boone' },
                                        { display: 'Brown', value: 'Brown' },
                                        { display: 'Bureau', value: 'Bureau' },
                                        {
                                            display: 'Calhoun',
                                            value: 'Calhoun'
                                        },
                                        {
                                            display: 'Carroll',
                                            value: 'Carroll'
                                        },
                                        { display: 'Cass', value: 'Cass' },
                                        {
                                            display: 'Champaign',
                                            value: 'Champaign'
                                        },
                                        {
                                            display: 'Christian',
                                            value: 'Christian'
                                        },
                                        { display: 'Clark', value: 'Clark' },
                                        { display: 'Clay', value: 'Clay' },
                                        {
                                            display: 'Clinton',
                                            value: 'Clinton'
                                        },
                                        { display: 'Coles', value: 'Coles' },
                                        { display: 'Cook', value: 'Cook' },
                                        {
                                            display: 'Crawford',
                                            value: 'Crawford'
                                        },
                                        {
                                            display: 'Cumberland',
                                            value: 'Cumberland'
                                        },
                                        {
                                            display: 'De Witt',
                                            value: 'De Witt'
                                        },
                                        { display: 'DeKalb', value: 'DeKalb' },
                                        {
                                            display: 'Douglas',
                                            value: 'Douglas'
                                        },
                                        { display: 'DuPage', value: 'DuPage' },
                                        { display: 'Edgar', value: 'Edgar' },
                                        {
                                            display: 'Edwards',
                                            value: 'Edwards'
                                        },
                                        {
                                            display: 'Effingham',
                                            value: 'Effingham'
                                        },
                                        {
                                            display: 'Fayette',
                                            value: 'Fayette'
                                        },
                                        { display: 'Ford', value: 'Ford' },
                                        {
                                            display: 'Franklin',
                                            value: 'Franklin'
                                        },
                                        { display: 'Fulton', value: 'Fulton' },
                                        {
                                            display: 'Gallatin',
                                            value: 'Gallatin'
                                        },
                                        { display: 'Greene', value: 'Greene' },
                                        { display: 'Grundy', value: 'Grundy' },
                                        {
                                            display: 'Hamilton',
                                            value: 'Hamilton'
                                        },
                                        {
                                            display: 'Hancock',
                                            value: 'Hancock'
                                        },
                                        { display: 'Hardin', value: 'Hardin' },
                                        {
                                            display: 'Henderson',
                                            value: 'Henderson'
                                        },
                                        { display: 'Henry', value: 'Henry' },
                                        {
                                            display: 'Iroquois',
                                            value: 'Iroquois'
                                        },
                                        {
                                            display: 'Jackson',
                                            value: 'Jackson'
                                        },
                                        { display: 'Jasper', value: 'Jasper' },
                                        {
                                            display: 'Jefferson',
                                            value: 'Jefferson'
                                        },
                                        { display: 'Jersey', value: 'Jersey' },
                                        {
                                            display: 'Jo Daviess',
                                            value: 'Jo Daviess'
                                        },
                                        {
                                            display: 'Johnson',
                                            value: 'Johnson'
                                        },
                                        { display: 'Kane', value: 'Kane' },
                                        {
                                            display: 'Kankakee',
                                            value: 'Kankakee'
                                        },
                                        {
                                            display: 'Kendall',
                                            value: 'Kendall'
                                        },
                                        { display: 'Knox', value: 'Knox' },
                                        {
                                            display: 'La Salle',
                                            value: 'La Salle'
                                        },
                                        { display: 'Lake', value: 'Lake' },
                                        {
                                            display: 'Lawrence',
                                            value: 'Lawrence'
                                        },
                                        { display: 'Lee', value: 'Lee' },
                                        {
                                            display: 'Livingston',
                                            value: 'Livingston'
                                        },
                                        { display: 'Logan', value: 'Logan' },
                                        { display: 'Macon', value: 'Macon' },
                                        {
                                            display: 'Macoupin',
                                            value: 'Macoupin'
                                        },
                                        {
                                            display: 'Madison',
                                            value: 'Madison'
                                        },
                                        { display: 'Marion', value: 'Marion' },
                                        {
                                            display: 'Marshall',
                                            value: 'Marshall'
                                        },
                                        { display: 'Mason', value: 'Mason' },
                                        { display: 'Massac', value: 'Massac' },
                                        {
                                            display: 'McDonough',
                                            value: 'McDonough'
                                        },
                                        {
                                            display: 'McHenry',
                                            value: 'McHenry'
                                        },
                                        { display: 'McLean', value: 'McLean' },
                                        { display: 'Menard', value: 'Menard' },
                                        { display: 'Mercer', value: 'Mercer' },
                                        { display: 'Monroe', value: 'Monroe' },
                                        {
                                            display: 'Montgomery',
                                            value: 'Montgomery'
                                        },
                                        { display: 'Morgan', value: 'Morgan' },
                                        {
                                            display: 'Moultrie',
                                            value: 'Moultrie'
                                        },
                                        { display: 'Ogle', value: 'Ogle' },
                                        { display: 'Peoria', value: 'Peoria' },
                                        { display: 'Perry', value: 'Perry' },
                                        { display: 'Piatt', value: 'Piatt' },
                                        { display: 'Pike', value: 'Pike' },
                                        { display: 'Pope', value: 'Pope' },
                                        {
                                            display: 'Pulaski',
                                            value: 'Pulaski'
                                        },
                                        { display: 'Putnam', value: 'Putnam' },
                                        {
                                            display: 'Randolph',
                                            value: 'Randolph'
                                        },
                                        {
                                            display: 'Richland',
                                            value: 'Richland'
                                        },
                                        {
                                            display: 'Rock Island',
                                            value: 'Rock Island'
                                        },
                                        { display: 'Saline', value: 'Saline' },
                                        {
                                            display: 'Sangamon',
                                            value: 'Sangamon'
                                        },
                                        {
                                            display: 'Schuyler',
                                            value: 'Schuyler'
                                        },
                                        { display: 'Scott', value: 'Scott' },
                                        { display: 'Shelby', value: 'Shelby' },
                                        {
                                            display: 'St. Clair',
                                            value: 'St. Clair'
                                        },
                                        { display: 'Stark', value: 'Stark' },
                                        {
                                            display: 'Stephenson',
                                            value: 'Stephenson'
                                        },
                                        {
                                            display: 'Tazewell',
                                            value: 'Tazewell'
                                        },
                                        { display: 'Union', value: 'Union' },
                                        {
                                            display: 'Vermilion',
                                            value: 'Vermilion'
                                        },
                                        { display: 'Wabash', value: 'Wabash' },
                                        { display: 'Warren', value: 'Warren' },
                                        {
                                            display: 'Washington',
                                            value: 'Washington'
                                        },
                                        { display: 'Wayne', value: 'Wayne' },
                                        { display: 'White', value: 'White' },
                                        {
                                            display: 'Whiteside',
                                            value: 'Whiteside'
                                        },
                                        { display: 'Will', value: 'Will' },
                                        {
                                            display: 'Williamson',
                                            value: 'Williamson'
                                        },
                                        {
                                            display: 'Winnebago',
                                            value: 'Winnebago'
                                        },
                                        {
                                            display: 'Woodford',
                                            value: 'Woodford'
                                        }
                                    ],
                                    order: 7,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000729,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000828,
                                    defaultValue: 'Country',
                                    id: 637074,
                                    index: 1,
                                    instructions: '',
                                    label: 'Country',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'physicalCountry',
                                    options: [
                                        {
                                            display: 'United States',
                                            value: 'United States'
                                        },
                                        { display: 'Canada', value: 'CA' },
                                        { display: 'Mexico', value: 'MX' },
                                        { display: 'Afghanistan', value: 'AF' },
                                        {
                                            display: 'Åland Islands',
                                            value: 'AX'
                                        },
                                        { display: 'Albania', value: 'AL' },
                                        { display: 'Algeria', value: 'DZ' },
                                        {
                                            display: 'American Samoa',
                                            value: 'AS'
                                        },
                                        { display: 'AndorrA', value: 'AD' },
                                        { display: 'Angola', value: 'AO' },
                                        { display: 'Anguilla', value: 'AI' },
                                        { display: 'Antarctica', value: 'AQ' },
                                        {
                                            display: 'Antigua and Barbuda',
                                            value: 'AG'
                                        },
                                        { display: 'Argentina', value: 'AR' },
                                        { display: 'Armenia', value: 'AM' },
                                        { display: 'Aruba', value: 'AW' },
                                        { display: 'Australia', value: 'AU' },
                                        { display: 'Austria', value: 'AT' },
                                        { display: 'Azerbaijan', value: 'AZ' },
                                        { display: 'Bahamas', value: 'BS' },
                                        { display: 'Bahrain', value: 'BH' },
                                        { display: 'Bangladesh', value: 'BD' },
                                        { display: 'Barbados', value: 'BB' },
                                        { display: 'Belarus', value: 'BY' },
                                        { display: 'Belgium', value: 'BE' },
                                        { display: 'Belize', value: 'BZ' },
                                        { display: 'Benin', value: 'BJ' },
                                        { display: 'Bermuda', value: 'BM' },
                                        { display: 'Bhutan', value: 'BT' },
                                        { display: 'Bolivia', value: 'BO' },
                                        {
                                            display: 'Bosnia and Herzegovina',
                                            value: 'BA'
                                        },
                                        { display: 'Botswana', value: 'BW' },
                                        {
                                            display: 'Bouvet Island',
                                            value: 'BV'
                                        },
                                        { display: 'Brazil', value: 'BR' },
                                        {
                                            display:
                                                'British Indian Ocean Territory',
                                            value: 'IO'
                                        },
                                        {
                                            display: 'Brunei Darussalam',
                                            value: 'BN'
                                        },
                                        { display: 'Bulgaria', value: 'BG' },
                                        {
                                            display: 'Burkina Faso',
                                            value: 'BF'
                                        },
                                        { display: 'Burundi', value: 'BI' },
                                        { display: 'Cambodia', value: 'KH' },
                                        { display: 'Cameroon', value: 'CM' },
                                        { display: 'Cape Verde', value: 'CV' },
                                        {
                                            display: 'Cayman Islands',
                                            value: 'KY'
                                        },
                                        {
                                            display: 'Central African Republic',
                                            value: 'CF'
                                        },
                                        { display: 'Chad', value: 'TD' },
                                        { display: 'Chile', value: 'CL' },
                                        { display: 'China', value: 'CN' },
                                        {
                                            display: 'Christmas Island',
                                            value: 'CX'
                                        },
                                        {
                                            display: 'Cocos (Keeling) Islands',
                                            value: 'CC'
                                        },
                                        { display: 'Colombia', value: 'CO' },
                                        { display: 'Comoros', value: 'KM' },
                                        { display: 'Congo', value: 'CG' },
                                        {
                                            display:
                                                'Congo, The Democratic Republic of the',
                                            value: 'CD'
                                        },
                                        {
                                            display: 'Cook Islands',
                                            value: 'CK'
                                        },
                                        { display: 'Costa Rica', value: 'CR' },
                                        {
                                            display: "Cote D'Ivoire",
                                            value: 'CI'
                                        },
                                        { display: 'Croatia', value: 'HR' },
                                        { display: 'Cuba', value: 'CU' },
                                        { display: 'Cyprus', value: 'CY' },
                                        {
                                            display: 'Czech Republic',
                                            value: 'CZ'
                                        },
                                        { display: 'Denmark', value: 'DK' },
                                        { display: 'Djibouti', value: 'DJ' },
                                        { display: 'Dominica', value: 'DM' },
                                        {
                                            display: 'Dominican Republic',
                                            value: 'DO'
                                        },
                                        { display: 'Ecuador', value: 'EC' },
                                        { display: 'Egypt', value: 'EG' },
                                        { display: 'El Salvador', value: 'SV' },
                                        {
                                            display: 'Equatorial Guinea',
                                            value: 'GQ'
                                        },
                                        { display: 'Eritrea', value: 'ER' },
                                        { display: 'Estonia', value: 'EE' },
                                        { display: 'Ethiopia', value: 'ET' },
                                        {
                                            display:
                                                'Falkland Islands (Malvinas)',
                                            value: 'FK'
                                        },
                                        {
                                            display: 'Faroe Islands',
                                            value: 'FO'
                                        },
                                        { display: 'Fiji', value: 'FJ' },
                                        { display: 'Finland', value: 'FI' },
                                        { display: 'France', value: 'FR' },
                                        {
                                            display: 'French Guiana',
                                            value: 'GF'
                                        },
                                        {
                                            display: 'French Polynesia',
                                            value: 'PF'
                                        },
                                        {
                                            display:
                                                'French Southern Territories',
                                            value: 'TF'
                                        },
                                        { display: 'Gabon', value: 'GA' },
                                        { display: 'Gambia', value: 'GM' },
                                        { display: 'Georgia', value: 'GE' },
                                        { display: 'Germany', value: 'DE' },
                                        { display: 'Ghana', value: 'GH' },
                                        { display: 'Gibraltar', value: 'GI' },
                                        { display: 'Greece', value: 'GR' },
                                        { display: 'Greenland', value: 'GL' },
                                        { display: 'Grenada', value: 'GD' },
                                        { display: 'Guadeloupe', value: 'GP' },
                                        { display: 'Guam', value: 'GU' },
                                        { display: 'Guatemala', value: 'GT' },
                                        { display: 'Guernsey', value: 'GG' },
                                        { display: 'Guinea', value: 'GN' },
                                        {
                                            display: 'Guinea-Bissau',
                                            value: 'GW'
                                        },
                                        { display: 'Guyana', value: 'GY' },
                                        { display: 'Haiti', value: 'HT' },
                                        {
                                            display:
                                                'Heard Island and Mcdonald Islands',
                                            value: 'HM'
                                        },
                                        {
                                            display:
                                                'Holy See (Vatican City State)',
                                            value: 'VA'
                                        },
                                        { display: 'Honduras', value: 'HN' },
                                        { display: 'Hong Kong', value: 'HK' },
                                        { display: 'Hungary', value: 'HU' },
                                        { display: 'Iceland', value: 'IS' },
                                        { display: 'India', value: 'IN' },
                                        { display: 'Indonesia', value: 'ID' },
                                        {
                                            display:
                                                'Iran, Islamic Republic Of',
                                            value: 'IR'
                                        },
                                        { display: 'Iraq', value: 'IQ' },
                                        { display: 'Ireland', value: 'IE' },
                                        { display: 'Isle of Man', value: 'IM' },
                                        { display: 'Israel', value: 'IL' },
                                        { display: 'Italy', value: 'IT' },
                                        { display: 'Jamaica', value: 'JM' },
                                        { display: 'Japan', value: 'JP' },
                                        { display: 'Jersey', value: 'JE' },
                                        { display: 'Jordan', value: 'JO' },
                                        { display: 'Kazakhstan', value: 'KZ' },
                                        { display: 'Kenya', value: 'KE' },
                                        { display: 'Kiribati', value: 'KI' },
                                        {
                                            display:
                                                "Korea, Democratic People'S Republic of",
                                            value: 'KP'
                                        },
                                        {
                                            display: 'Korea, Republic of',
                                            value: 'KR'
                                        },
                                        { display: 'Kuwait', value: 'KW' },
                                        { display: 'Kyrgyzstan', value: 'KG' },
                                        {
                                            display:
                                                "Lao People'S Democratic Republic",
                                            value: 'LA'
                                        },
                                        { display: 'Latvia', value: 'LV' },
                                        { display: 'Lebanon', value: 'LB' },
                                        { display: 'Lesotho', value: 'LS' },
                                        { display: 'Liberia', value: 'LR' },
                                        {
                                            display: 'Libyan Arab Jamahiriya',
                                            value: 'LY'
                                        },
                                        {
                                            display: 'Liechtenstein',
                                            value: 'LI'
                                        },
                                        { display: 'Lithuania', value: 'LT' },
                                        { display: 'Luxembourg', value: 'LU' },
                                        { display: 'Macao', value: 'MO' },
                                        {
                                            display:
                                                'Macedonia, The Former Yugoslav Republic of',
                                            value: 'MK'
                                        },
                                        { display: 'Madagascar', value: 'MG' },
                                        { display: 'Malawi', value: 'MW' },
                                        { display: 'Malaysia', value: 'MY' },
                                        { display: 'Maldives', value: 'MV' },
                                        { display: 'Mali', value: 'ML' },
                                        { display: 'Malta', value: 'MT' },
                                        {
                                            display: 'Marshall Islands',
                                            value: 'MH'
                                        },
                                        { display: 'Martinique', value: 'MQ' },
                                        { display: 'Mauritania', value: 'MR' },
                                        { display: 'Mauritius', value: 'MU' },
                                        { display: 'Mayotte', value: 'YT' },
                                        {
                                            display:
                                                'Micronesia, Federated States of',
                                            value: 'FM'
                                        },
                                        {
                                            display: 'Moldova, Republic of',
                                            value: 'MD'
                                        },
                                        { display: 'Monaco', value: 'MC' },
                                        { display: 'Mongolia', value: 'MN' },
                                        { display: 'Montserrat', value: 'MS' },
                                        { display: 'Morocco', value: 'MA' },
                                        { display: 'Mozambique', value: 'MZ' },
                                        { display: 'Myanmar', value: 'MM' },
                                        { display: 'Namibia', value: 'NA' },
                                        { display: 'Nauru', value: 'NR' },
                                        { display: 'Nepal', value: 'NP' },
                                        { display: 'Netherlands', value: 'NL' },
                                        {
                                            display: 'Netherlands Antilles',
                                            value: 'AN'
                                        },
                                        {
                                            display: 'New Caledonia',
                                            value: 'NC'
                                        },
                                        { display: 'New Zealand', value: 'NZ' },
                                        { display: 'Nicaragua', value: 'NI' },
                                        { display: 'Niger', value: 'NE' },
                                        { display: 'Nigeria', value: 'NG' },
                                        { display: 'Niue', value: 'NU' },
                                        {
                                            display: 'Norfolk Island',
                                            value: 'NF'
                                        },
                                        {
                                            display: 'Northern Mariana Islands',
                                            value: 'MP'
                                        },
                                        { display: 'Norway', value: 'NO' },
                                        { display: 'Oman', value: 'OM' },
                                        { display: 'Pakistan', value: 'PK' },
                                        { display: 'Palau', value: 'PW' },
                                        {
                                            display:
                                                'Palestinian Territory, Occupied',
                                            value: 'PS'
                                        },
                                        { display: 'Panama', value: 'PA' },
                                        {
                                            display: 'Papua New Guinea',
                                            value: 'PG'
                                        },
                                        { display: 'Paraguay', value: 'PY' },
                                        { display: 'Peru', value: 'PE' },
                                        { display: 'Philippines', value: 'PH' },
                                        { display: 'Pitcairn', value: 'PN' },
                                        { display: 'Poland', value: 'PL' },
                                        { display: 'Portugal', value: 'PT' },
                                        { display: 'Puerto Rico', value: 'PR' },
                                        { display: 'Qatar', value: 'QA' },
                                        { display: 'Reunion', value: 'RE' },
                                        { display: 'Romania', value: 'RO' },
                                        {
                                            display: 'Russian Federation',
                                            value: 'RU'
                                        },
                                        { display: 'RWANDA', value: 'RW' },
                                        {
                                            display: 'Saint Helena',
                                            value: 'SH'
                                        },
                                        {
                                            display: 'Saint Kitts and Nevis',
                                            value: 'KN'
                                        },
                                        { display: 'Saint Lucia', value: 'LC' },
                                        {
                                            display:
                                                'Saint Pierre and Miquelon',
                                            value: 'PM'
                                        },
                                        {
                                            display:
                                                'Saint Vincent and the Grenadines',
                                            value: 'VC'
                                        },
                                        { display: 'Samoa', value: 'WS' },
                                        { display: 'San Marino', value: 'SM' },
                                        {
                                            display: 'Sao Tome and Principe',
                                            value: 'ST'
                                        },
                                        {
                                            display: 'Saudi Arabia',
                                            value: 'SA'
                                        },
                                        { display: 'Senegal', value: 'SN' },
                                        {
                                            display: 'Serbia and Montenegro',
                                            value: 'CS'
                                        },
                                        { display: 'Seychelles', value: 'SC' },
                                        {
                                            display: 'Sierra Leone',
                                            value: 'SL'
                                        },
                                        { display: 'Singapore', value: 'SG' },
                                        { display: 'Slovakia', value: 'SK' },
                                        { display: 'Slovenia', value: 'SI' },
                                        {
                                            display: 'Solomon Islands',
                                            value: 'SB'
                                        },
                                        { display: 'Somalia', value: 'SO' },
                                        {
                                            display: 'South Africa',
                                            value: 'ZA'
                                        },
                                        {
                                            display:
                                                'South Georgia and the South Sandwich Islands',
                                            value: 'GS'
                                        },
                                        { display: 'Spain', value: 'ES' },
                                        { display: 'Sri Lanka', value: 'LK' },
                                        { display: 'Sudan', value: 'SD' },
                                        { display: 'Suridisplay', value: 'SR' },
                                        {
                                            display: 'Svalbard and Jan Mayen',
                                            value: 'SJ'
                                        },
                                        { display: 'Swaziland', value: 'SZ' },
                                        { display: 'Sweden', value: 'SE' },
                                        { display: 'Switzerland', value: 'CH' },
                                        {
                                            display: 'Syrian Arab Republic',
                                            value: 'SY'
                                        },
                                        {
                                            display:
                                                'Taiwan, Province of China',
                                            value: 'TW'
                                        },
                                        { display: 'Tajikistan', value: 'TJ' },
                                        {
                                            display:
                                                'Tanzania, United Republic of',
                                            value: 'TZ'
                                        },
                                        { display: 'Thailand', value: 'TH' },
                                        { display: 'Timor-Leste', value: 'TL' },
                                        { display: 'Togo', value: 'TG' },
                                        { display: 'Tokelau', value: 'TK' },
                                        { display: 'Tonga', value: 'TO' },
                                        {
                                            display: 'Trinidad and Tobago',
                                            value: 'TT'
                                        },
                                        { display: 'Tunisia', value: 'TN' },
                                        { display: 'Turkey', value: 'TR' },
                                        {
                                            display: 'Turkmenistan',
                                            value: 'TM'
                                        },
                                        {
                                            display: 'Turks and Caicos Islands',
                                            value: 'TC'
                                        },
                                        { display: 'Tuvalu', value: 'TV' },
                                        { display: 'Uganda', value: 'UG' },
                                        { display: 'Ukraine', value: 'UA' },
                                        {
                                            display: 'United Arab Emirates',
                                            value: 'AE'
                                        },
                                        {
                                            display: 'United Kingdom',
                                            value: 'GB'
                                        },
                                        {
                                            display:
                                                'United States Minor Outlying Islands',
                                            value: 'UM'
                                        },
                                        { display: 'Uruguay', value: 'UY' },
                                        { display: 'Uzbekistan', value: 'UZ' },
                                        { display: 'Vanuatu', value: 'VU' },
                                        { display: 'Venezuela', value: 'VE' },
                                        { display: 'Viet Nam', value: 'VN' },
                                        {
                                            display: 'Virgin Islands, British',
                                            value: 'VG'
                                        },
                                        {
                                            display: 'Virgin Islands, U.S.',
                                            value: 'VI'
                                        },
                                        {
                                            display: 'Wallis and Futuna',
                                            value: 'WF'
                                        },
                                        {
                                            display: 'Western Sahara',
                                            value: 'EH'
                                        },
                                        { display: 'Yemen', value: 'YE' },
                                        { display: 'Zambia', value: 'ZM' },
                                        { display: 'Zimbabwe', value: 'ZW' }
                                    ],
                                    order: 8,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043000828,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001056,
                                    defaultValue: 'Postal Code',
                                    id: 637075,
                                    index: 1,
                                    instructions: '',
                                    label: 'Postal Code',
                                    maskFormat: null,
                                    max: 20,
                                    min: 1,
                                    name: 'physicalPostalCode',
                                    options: null,
                                    order: 9,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001056,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150683,
                            instructions: null,
                            label: 'Physical Address',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'PhysicalAddress',
                            order: 104,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043000667,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043001058,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001060,
                                    defaultValue: 'Address Line 1',
                                    id: 637076,
                                    index: 1,
                                    instructions: '',
                                    label: 'Address Line 1',
                                    maskFormat: null,
                                    max: 70,
                                    min: 1,
                                    name: 'alternateAddressLine1',
                                    options: null,
                                    order: 1,
                                    pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001060,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001062,
                                    defaultValue: 'Address Line 2',
                                    id: 637077,
                                    index: 1,
                                    instructions: '',
                                    label: 'Address Line 2',
                                    maskFormat: null,
                                    max: 70,
                                    min: 1,
                                    name: 'alternateAddressLine2',
                                    options: null,
                                    order: 2,
                                    pattern: "^[A-Za-z0-9#/.\\-,'\\s]+$",
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001062,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001064,
                                    defaultValue: 'City',
                                    id: 637078,
                                    index: 1,
                                    instructions: '',
                                    label: 'City',
                                    maskFormat: null,
                                    max: 58,
                                    min: 1,
                                    name: 'alternateCity',
                                    options: null,
                                    order: 3,
                                    pattern: "^[a-zA-Z'.\\s-]{1,58}$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001064,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001067,
                                    defaultValue: 'State',
                                    id: 637079,
                                    index: 1,
                                    instructions: '',
                                    label: 'State',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'alternateState',
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
                                    order: 4,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001067,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001120,
                                    defaultValue: 'ZIP Code',
                                    id: 637080,
                                    index: 1,
                                    instructions: '',
                                    label: 'ZIP Code',
                                    maskFormat: null,
                                    max: 10,
                                    min: 1,
                                    name: 'alternateZipCode',
                                    options: null,
                                    order: 5,
                                    pattern: '^\\d{5}(?:[-]\\d{4})?$',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001120,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001122,
                                    defaultValue: 'County',
                                    id: 637081,
                                    index: 1,
                                    instructions: '',
                                    label: 'County',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'alternateCounty',
                                    options: [
                                        { display: 'Adams', value: 'Adams' },
                                        {
                                            display: 'Alexander',
                                            value: 'Alexander'
                                        },
                                        { display: 'Bond', value: 'Bond' },
                                        { display: 'Boone', value: 'Boone' },
                                        { display: 'Brown', value: 'Brown' },
                                        { display: 'Bureau', value: 'Bureau' },
                                        {
                                            display: 'Calhoun',
                                            value: 'Calhoun'
                                        },
                                        {
                                            display: 'Carroll',
                                            value: 'Carroll'
                                        },
                                        { display: 'Cass', value: 'Cass' },
                                        {
                                            display: 'Champaign',
                                            value: 'Champaign'
                                        },
                                        {
                                            display: 'Christian',
                                            value: 'Christian'
                                        },
                                        { display: 'Clark', value: 'Clark' },
                                        { display: 'Clay', value: 'Clay' },
                                        {
                                            display: 'Clinton',
                                            value: 'Clinton'
                                        },
                                        { display: 'Coles', value: 'Coles' },
                                        { display: 'Cook', value: 'Cook' },
                                        {
                                            display: 'Crawford',
                                            value: 'Crawford'
                                        },
                                        {
                                            display: 'Cumberland',
                                            value: 'Cumberland'
                                        },
                                        {
                                            display: 'De Witt',
                                            value: 'De Witt'
                                        },
                                        { display: 'DeKalb', value: 'DeKalb' },
                                        {
                                            display: 'Douglas',
                                            value: 'Douglas'
                                        },
                                        { display: 'DuPage', value: 'DuPage' },
                                        { display: 'Edgar', value: 'Edgar' },
                                        {
                                            display: 'Edwards',
                                            value: 'Edwards'
                                        },
                                        {
                                            display: 'Effingham',
                                            value: 'Effingham'
                                        },
                                        {
                                            display: 'Fayette',
                                            value: 'Fayette'
                                        },
                                        { display: 'Ford', value: 'Ford' },
                                        {
                                            display: 'Franklin',
                                            value: 'Franklin'
                                        },
                                        { display: 'Fulton', value: 'Fulton' },
                                        {
                                            display: 'Gallatin',
                                            value: 'Gallatin'
                                        },
                                        { display: 'Greene', value: 'Greene' },
                                        { display: 'Grundy', value: 'Grundy' },
                                        {
                                            display: 'Hamilton',
                                            value: 'Hamilton'
                                        },
                                        {
                                            display: 'Hancock',
                                            value: 'Hancock'
                                        },
                                        { display: 'Hardin', value: 'Hardin' },
                                        {
                                            display: 'Henderson',
                                            value: 'Henderson'
                                        },
                                        { display: 'Henry', value: 'Henry' },
                                        {
                                            display: 'Iroquois',
                                            value: 'Iroquois'
                                        },
                                        {
                                            display: 'Jackson',
                                            value: 'Jackson'
                                        },
                                        { display: 'Jasper', value: 'Jasper' },
                                        {
                                            display: 'Jefferson',
                                            value: 'Jefferson'
                                        },
                                        { display: 'Jersey', value: 'Jersey' },
                                        {
                                            display: 'Jo Daviess',
                                            value: 'Jo Daviess'
                                        },
                                        {
                                            display: 'Johnson',
                                            value: 'Johnson'
                                        },
                                        { display: 'Kane', value: 'Kane' },
                                        {
                                            display: 'Kankakee',
                                            value: 'Kankakee'
                                        },
                                        {
                                            display: 'Kendall',
                                            value: 'Kendall'
                                        },
                                        { display: 'Knox', value: 'Knox' },
                                        {
                                            display: 'La Salle',
                                            value: 'La Salle'
                                        },
                                        { display: 'Lake', value: 'Lake' },
                                        {
                                            display: 'Lawrence',
                                            value: 'Lawrence'
                                        },
                                        { display: 'Lee', value: 'Lee' },
                                        {
                                            display: 'Livingston',
                                            value: 'Livingston'
                                        },
                                        { display: 'Logan', value: 'Logan' },
                                        { display: 'Macon', value: 'Macon' },
                                        {
                                            display: 'Macoupin',
                                            value: 'Macoupin'
                                        },
                                        {
                                            display: 'Madison',
                                            value: 'Madison'
                                        },
                                        { display: 'Marion', value: 'Marion' },
                                        {
                                            display: 'Marshall',
                                            value: 'Marshall'
                                        },
                                        { display: 'Mason', value: 'Mason' },
                                        { display: 'Massac', value: 'Massac' },
                                        {
                                            display: 'McDonough',
                                            value: 'McDonough'
                                        },
                                        {
                                            display: 'McHenry',
                                            value: 'McHenry'
                                        },
                                        { display: 'McLean', value: 'McLean' },
                                        { display: 'Menard', value: 'Menard' },
                                        { display: 'Mercer', value: 'Mercer' },
                                        { display: 'Monroe', value: 'Monroe' },
                                        {
                                            display: 'Montgomery',
                                            value: 'Montgomery'
                                        },
                                        { display: 'Morgan', value: 'Morgan' },
                                        {
                                            display: 'Moultrie',
                                            value: 'Moultrie'
                                        },
                                        { display: 'Ogle', value: 'Ogle' },
                                        { display: 'Peoria', value: 'Peoria' },
                                        { display: 'Perry', value: 'Perry' },
                                        { display: 'Piatt', value: 'Piatt' },
                                        { display: 'Pike', value: 'Pike' },
                                        { display: 'Pope', value: 'Pope' },
                                        {
                                            display: 'Pulaski',
                                            value: 'Pulaski'
                                        },
                                        { display: 'Putnam', value: 'Putnam' },
                                        {
                                            display: 'Randolph',
                                            value: 'Randolph'
                                        },
                                        {
                                            display: 'Richland',
                                            value: 'Richland'
                                        },
                                        {
                                            display: 'Rock Island',
                                            value: 'Rock Island'
                                        },
                                        { display: 'Saline', value: 'Saline' },
                                        {
                                            display: 'Sangamon',
                                            value: 'Sangamon'
                                        },
                                        {
                                            display: 'Schuyler',
                                            value: 'Schuyler'
                                        },
                                        { display: 'Scott', value: 'Scott' },
                                        { display: 'Shelby', value: 'Shelby' },
                                        {
                                            display: 'St. Clair',
                                            value: 'St. Clair'
                                        },
                                        { display: 'Stark', value: 'Stark' },
                                        {
                                            display: 'Stephenson',
                                            value: 'Stephenson'
                                        },
                                        {
                                            display: 'Tazewell',
                                            value: 'Tazewell'
                                        },
                                        { display: 'Union', value: 'Union' },
                                        {
                                            display: 'Vermilion',
                                            value: 'Vermilion'
                                        },
                                        { display: 'Wabash', value: 'Wabash' },
                                        { display: 'Warren', value: 'Warren' },
                                        {
                                            display: 'Washington',
                                            value: 'Washington'
                                        },
                                        { display: 'Wayne', value: 'Wayne' },
                                        { display: 'White', value: 'White' },
                                        {
                                            display: 'Whiteside',
                                            value: 'Whiteside'
                                        },
                                        { display: 'Will', value: 'Will' },
                                        {
                                            display: 'Williamson',
                                            value: 'Williamson'
                                        },
                                        {
                                            display: 'Winnebago',
                                            value: 'Winnebago'
                                        },
                                        {
                                            display: 'Woodford',
                                            value: 'Woodford'
                                        }
                                    ],
                                    order: 7,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001122,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001225,
                                    defaultValue: 'Country',
                                    id: 637082,
                                    index: 1,
                                    instructions: '',
                                    label: 'Country',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'alternateCountry',
                                    options: [
                                        {
                                            display: 'United States',
                                            value: 'United States'
                                        },
                                        { display: 'Canada', value: 'CA' },
                                        { display: 'Mexico', value: 'MX' },
                                        { display: 'Afghanistan', value: 'AF' },
                                        {
                                            display: 'Åland Islands',
                                            value: 'AX'
                                        },
                                        { display: 'Albania', value: 'AL' },
                                        { display: 'Algeria', value: 'DZ' },
                                        {
                                            display: 'American Samoa',
                                            value: 'AS'
                                        },
                                        { display: 'AndorrA', value: 'AD' },
                                        { display: 'Angola', value: 'AO' },
                                        { display: 'Anguilla', value: 'AI' },
                                        { display: 'Antarctica', value: 'AQ' },
                                        {
                                            display: 'Antigua and Barbuda',
                                            value: 'AG'
                                        },
                                        { display: 'Argentina', value: 'AR' },
                                        { display: 'Armenia', value: 'AM' },
                                        { display: 'Aruba', value: 'AW' },
                                        { display: 'Australia', value: 'AU' },
                                        { display: 'Austria', value: 'AT' },
                                        { display: 'Azerbaijan', value: 'AZ' },
                                        { display: 'Bahamas', value: 'BS' },
                                        { display: 'Bahrain', value: 'BH' },
                                        { display: 'Bangladesh', value: 'BD' },
                                        { display: 'Barbados', value: 'BB' },
                                        { display: 'Belarus', value: 'BY' },
                                        { display: 'Belgium', value: 'BE' },
                                        { display: 'Belize', value: 'BZ' },
                                        { display: 'Benin', value: 'BJ' },
                                        { display: 'Bermuda', value: 'BM' },
                                        { display: 'Bhutan', value: 'BT' },
                                        { display: 'Bolivia', value: 'BO' },
                                        {
                                            display: 'Bosnia and Herzegovina',
                                            value: 'BA'
                                        },
                                        { display: 'Botswana', value: 'BW' },
                                        {
                                            display: 'Bouvet Island',
                                            value: 'BV'
                                        },
                                        { display: 'Brazil', value: 'BR' },
                                        {
                                            display:
                                                'British Indian Ocean Territory',
                                            value: 'IO'
                                        },
                                        {
                                            display: 'Brunei Darussalam',
                                            value: 'BN'
                                        },
                                        { display: 'Bulgaria', value: 'BG' },
                                        {
                                            display: 'Burkina Faso',
                                            value: 'BF'
                                        },
                                        { display: 'Burundi', value: 'BI' },
                                        { display: 'Cambodia', value: 'KH' },
                                        { display: 'Cameroon', value: 'CM' },
                                        { display: 'Cape Verde', value: 'CV' },
                                        {
                                            display: 'Cayman Islands',
                                            value: 'KY'
                                        },
                                        {
                                            display: 'Central African Republic',
                                            value: 'CF'
                                        },
                                        { display: 'Chad', value: 'TD' },
                                        { display: 'Chile', value: 'CL' },
                                        { display: 'China', value: 'CN' },
                                        {
                                            display: 'Christmas Island',
                                            value: 'CX'
                                        },
                                        {
                                            display: 'Cocos (Keeling) Islands',
                                            value: 'CC'
                                        },
                                        { display: 'Colombia', value: 'CO' },
                                        { display: 'Comoros', value: 'KM' },
                                        { display: 'Congo', value: 'CG' },
                                        {
                                            display:
                                                'Congo, The Democratic Republic of the',
                                            value: 'CD'
                                        },
                                        {
                                            display: 'Cook Islands',
                                            value: 'CK'
                                        },
                                        { display: 'Costa Rica', value: 'CR' },
                                        {
                                            display: "Cote D'Ivoire",
                                            value: 'CI'
                                        },
                                        { display: 'Croatia', value: 'HR' },
                                        { display: 'Cuba', value: 'CU' },
                                        { display: 'Cyprus', value: 'CY' },
                                        {
                                            display: 'Czech Republic',
                                            value: 'CZ'
                                        },
                                        { display: 'Denmark', value: 'DK' },
                                        { display: 'Djibouti', value: 'DJ' },
                                        { display: 'Dominica', value: 'DM' },
                                        {
                                            display: 'Dominican Republic',
                                            value: 'DO'
                                        },
                                        { display: 'Ecuador', value: 'EC' },
                                        { display: 'Egypt', value: 'EG' },
                                        { display: 'El Salvador', value: 'SV' },
                                        {
                                            display: 'Equatorial Guinea',
                                            value: 'GQ'
                                        },
                                        { display: 'Eritrea', value: 'ER' },
                                        { display: 'Estonia', value: 'EE' },
                                        { display: 'Ethiopia', value: 'ET' },
                                        {
                                            display:
                                                'Falkland Islands (Malvinas)',
                                            value: 'FK'
                                        },
                                        {
                                            display: 'Faroe Islands',
                                            value: 'FO'
                                        },
                                        { display: 'Fiji', value: 'FJ' },
                                        { display: 'Finland', value: 'FI' },
                                        { display: 'France', value: 'FR' },
                                        {
                                            display: 'French Guiana',
                                            value: 'GF'
                                        },
                                        {
                                            display: 'French Polynesia',
                                            value: 'PF'
                                        },
                                        {
                                            display:
                                                'French Southern Territories',
                                            value: 'TF'
                                        },
                                        { display: 'Gabon', value: 'GA' },
                                        { display: 'Gambia', value: 'GM' },
                                        { display: 'Georgia', value: 'GE' },
                                        { display: 'Germany', value: 'DE' },
                                        { display: 'Ghana', value: 'GH' },
                                        { display: 'Gibraltar', value: 'GI' },
                                        { display: 'Greece', value: 'GR' },
                                        { display: 'Greenland', value: 'GL' },
                                        { display: 'Grenada', value: 'GD' },
                                        { display: 'Guadeloupe', value: 'GP' },
                                        { display: 'Guam', value: 'GU' },
                                        { display: 'Guatemala', value: 'GT' },
                                        { display: 'Guernsey', value: 'GG' },
                                        { display: 'Guinea', value: 'GN' },
                                        {
                                            display: 'Guinea-Bissau',
                                            value: 'GW'
                                        },
                                        { display: 'Guyana', value: 'GY' },
                                        { display: 'Haiti', value: 'HT' },
                                        {
                                            display:
                                                'Heard Island and Mcdonald Islands',
                                            value: 'HM'
                                        },
                                        {
                                            display:
                                                'Holy See (Vatican City State)',
                                            value: 'VA'
                                        },
                                        { display: 'Honduras', value: 'HN' },
                                        { display: 'Hong Kong', value: 'HK' },
                                        { display: 'Hungary', value: 'HU' },
                                        { display: 'Iceland', value: 'IS' },
                                        { display: 'India', value: 'IN' },
                                        { display: 'Indonesia', value: 'ID' },
                                        {
                                            display:
                                                'Iran, Islamic Republic Of',
                                            value: 'IR'
                                        },
                                        { display: 'Iraq', value: 'IQ' },
                                        { display: 'Ireland', value: 'IE' },
                                        { display: 'Isle of Man', value: 'IM' },
                                        { display: 'Israel', value: 'IL' },
                                        { display: 'Italy', value: 'IT' },
                                        { display: 'Jamaica', value: 'JM' },
                                        { display: 'Japan', value: 'JP' },
                                        { display: 'Jersey', value: 'JE' },
                                        { display: 'Jordan', value: 'JO' },
                                        { display: 'Kazakhstan', value: 'KZ' },
                                        { display: 'Kenya', value: 'KE' },
                                        { display: 'Kiribati', value: 'KI' },
                                        {
                                            display:
                                                "Korea, Democratic People'S Republic of",
                                            value: 'KP'
                                        },
                                        {
                                            display: 'Korea, Republic of',
                                            value: 'KR'
                                        },
                                        { display: 'Kuwait', value: 'KW' },
                                        { display: 'Kyrgyzstan', value: 'KG' },
                                        {
                                            display:
                                                "Lao People'S Democratic Republic",
                                            value: 'LA'
                                        },
                                        { display: 'Latvia', value: 'LV' },
                                        { display: 'Lebanon', value: 'LB' },
                                        { display: 'Lesotho', value: 'LS' },
                                        { display: 'Liberia', value: 'LR' },
                                        {
                                            display: 'Libyan Arab Jamahiriya',
                                            value: 'LY'
                                        },
                                        {
                                            display: 'Liechtenstein',
                                            value: 'LI'
                                        },
                                        { display: 'Lithuania', value: 'LT' },
                                        { display: 'Luxembourg', value: 'LU' },
                                        { display: 'Macao', value: 'MO' },
                                        {
                                            display:
                                                'Macedonia, The Former Yugoslav Republic of',
                                            value: 'MK'
                                        },
                                        { display: 'Madagascar', value: 'MG' },
                                        { display: 'Malawi', value: 'MW' },
                                        { display: 'Malaysia', value: 'MY' },
                                        { display: 'Maldives', value: 'MV' },
                                        { display: 'Mali', value: 'ML' },
                                        { display: 'Malta', value: 'MT' },
                                        {
                                            display: 'Marshall Islands',
                                            value: 'MH'
                                        },
                                        { display: 'Martinique', value: 'MQ' },
                                        { display: 'Mauritania', value: 'MR' },
                                        { display: 'Mauritius', value: 'MU' },
                                        { display: 'Mayotte', value: 'YT' },
                                        {
                                            display:
                                                'Micronesia, Federated States of',
                                            value: 'FM'
                                        },
                                        {
                                            display: 'Moldova, Republic of',
                                            value: 'MD'
                                        },
                                        { display: 'Monaco', value: 'MC' },
                                        { display: 'Mongolia', value: 'MN' },
                                        { display: 'Montserrat', value: 'MS' },
                                        { display: 'Morocco', value: 'MA' },
                                        { display: 'Mozambique', value: 'MZ' },
                                        { display: 'Myanmar', value: 'MM' },
                                        { display: 'Namibia', value: 'NA' },
                                        { display: 'Nauru', value: 'NR' },
                                        { display: 'Nepal', value: 'NP' },
                                        { display: 'Netherlands', value: 'NL' },
                                        {
                                            display: 'Netherlands Antilles',
                                            value: 'AN'
                                        },
                                        {
                                            display: 'New Caledonia',
                                            value: 'NC'
                                        },
                                        { display: 'New Zealand', value: 'NZ' },
                                        { display: 'Nicaragua', value: 'NI' },
                                        { display: 'Niger', value: 'NE' },
                                        { display: 'Nigeria', value: 'NG' },
                                        { display: 'Niue', value: 'NU' },
                                        {
                                            display: 'Norfolk Island',
                                            value: 'NF'
                                        },
                                        {
                                            display: 'Northern Mariana Islands',
                                            value: 'MP'
                                        },
                                        { display: 'Norway', value: 'NO' },
                                        { display: 'Oman', value: 'OM' },
                                        { display: 'Pakistan', value: 'PK' },
                                        { display: 'Palau', value: 'PW' },
                                        {
                                            display:
                                                'Palestinian Territory, Occupied',
                                            value: 'PS'
                                        },
                                        { display: 'Panama', value: 'PA' },
                                        {
                                            display: 'Papua New Guinea',
                                            value: 'PG'
                                        },
                                        { display: 'Paraguay', value: 'PY' },
                                        { display: 'Peru', value: 'PE' },
                                        { display: 'Philippines', value: 'PH' },
                                        { display: 'Pitcairn', value: 'PN' },
                                        { display: 'Poland', value: 'PL' },
                                        { display: 'Portugal', value: 'PT' },
                                        { display: 'Puerto Rico', value: 'PR' },
                                        { display: 'Qatar', value: 'QA' },
                                        { display: 'Reunion', value: 'RE' },
                                        { display: 'Romania', value: 'RO' },
                                        {
                                            display: 'Russian Federation',
                                            value: 'RU'
                                        },
                                        { display: 'RWANDA', value: 'RW' },
                                        {
                                            display: 'Saint Helena',
                                            value: 'SH'
                                        },
                                        {
                                            display: 'Saint Kitts and Nevis',
                                            value: 'KN'
                                        },
                                        { display: 'Saint Lucia', value: 'LC' },
                                        {
                                            display:
                                                'Saint Pierre and Miquelon',
                                            value: 'PM'
                                        },
                                        {
                                            display:
                                                'Saint Vincent and the Grenadines',
                                            value: 'VC'
                                        },
                                        { display: 'Samoa', value: 'WS' },
                                        { display: 'San Marino', value: 'SM' },
                                        {
                                            display: 'Sao Tome and Principe',
                                            value: 'ST'
                                        },
                                        {
                                            display: 'Saudi Arabia',
                                            value: 'SA'
                                        },
                                        { display: 'Senegal', value: 'SN' },
                                        {
                                            display: 'Serbia and Montenegro',
                                            value: 'CS'
                                        },
                                        { display: 'Seychelles', value: 'SC' },
                                        {
                                            display: 'Sierra Leone',
                                            value: 'SL'
                                        },
                                        { display: 'Singapore', value: 'SG' },
                                        { display: 'Slovakia', value: 'SK' },
                                        { display: 'Slovenia', value: 'SI' },
                                        {
                                            display: 'Solomon Islands',
                                            value: 'SB'
                                        },
                                        { display: 'Somalia', value: 'SO' },
                                        {
                                            display: 'South Africa',
                                            value: 'ZA'
                                        },
                                        {
                                            display:
                                                'South Georgia and the South Sandwich Islands',
                                            value: 'GS'
                                        },
                                        { display: 'Spain', value: 'ES' },
                                        { display: 'Sri Lanka', value: 'LK' },
                                        { display: 'Sudan', value: 'SD' },
                                        { display: 'Suridisplay', value: 'SR' },
                                        {
                                            display: 'Svalbard and Jan Mayen',
                                            value: 'SJ'
                                        },
                                        { display: 'Swaziland', value: 'SZ' },
                                        { display: 'Sweden', value: 'SE' },
                                        { display: 'Switzerland', value: 'CH' },
                                        {
                                            display: 'Syrian Arab Republic',
                                            value: 'SY'
                                        },
                                        {
                                            display:
                                                'Taiwan, Province of China',
                                            value: 'TW'
                                        },
                                        { display: 'Tajikistan', value: 'TJ' },
                                        {
                                            display:
                                                'Tanzania, United Republic of',
                                            value: 'TZ'
                                        },
                                        { display: 'Thailand', value: 'TH' },
                                        { display: 'Timor-Leste', value: 'TL' },
                                        { display: 'Togo', value: 'TG' },
                                        { display: 'Tokelau', value: 'TK' },
                                        { display: 'Tonga', value: 'TO' },
                                        {
                                            display: 'Trinidad and Tobago',
                                            value: 'TT'
                                        },
                                        { display: 'Tunisia', value: 'TN' },
                                        { display: 'Turkey', value: 'TR' },
                                        {
                                            display: 'Turkmenistan',
                                            value: 'TM'
                                        },
                                        {
                                            display: 'Turks and Caicos Islands',
                                            value: 'TC'
                                        },
                                        { display: 'Tuvalu', value: 'TV' },
                                        { display: 'Uganda', value: 'UG' },
                                        { display: 'Ukraine', value: 'UA' },
                                        {
                                            display: 'United Arab Emirates',
                                            value: 'AE'
                                        },
                                        {
                                            display: 'United Kingdom',
                                            value: 'GB'
                                        },
                                        {
                                            display:
                                                'United States Minor Outlying Islands',
                                            value: 'UM'
                                        },
                                        { display: 'Uruguay', value: 'UY' },
                                        { display: 'Uzbekistan', value: 'UZ' },
                                        { display: 'Vanuatu', value: 'VU' },
                                        { display: 'Venezuela', value: 'VE' },
                                        { display: 'Viet Nam', value: 'VN' },
                                        {
                                            display: 'Virgin Islands, British',
                                            value: 'VG'
                                        },
                                        {
                                            display: 'Virgin Islands, U.S.',
                                            value: 'VI'
                                        },
                                        {
                                            display: 'Wallis and Futuna',
                                            value: 'WF'
                                        },
                                        {
                                            display: 'Western Sahara',
                                            value: 'EH'
                                        },
                                        { display: 'Yemen', value: 'YE' },
                                        { display: 'Zambia', value: 'ZM' },
                                        { display: 'Zimbabwe', value: 'ZW' }
                                    ],
                                    order: 8,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001225,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001464,
                                    defaultValue: 'Postal Code',
                                    id: 637083,
                                    index: 1,
                                    instructions: '',
                                    label: 'Postal Code',
                                    maskFormat: null,
                                    max: 20,
                                    min: 1,
                                    name: 'alternatePostalCode',
                                    options: null,
                                    order: 9,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001464,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150684,
                            instructions: null,
                            label: 'Alternate Address',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'AlternateAddress',
                            order: 105,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001058,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043001466,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001468,
                                    defaultValue: 'Race',
                                    id: 637084,
                                    index: 1,
                                    instructions: '',
                                    label: 'Race',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'race',
                                    options: [
                                        {
                                            display:
                                                'American Indian or Alaskan Native',
                                            value:
                                                'American Indian or Alaskan Native'
                                        },
                                        {
                                            display:
                                                'Asian or Pacific Islander',
                                            value: 'Asian or Pacific Islander'
                                        },
                                        { display: 'Black', value: 'Black' },
                                        {
                                            display: 'Hispanic',
                                            value: 'Hispanic'
                                        },
                                        { display: 'White', value: 'White' },
                                        { display: 'Other', value: 'Other' }
                                    ],
                                    order: 1,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001468,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001477,
                                    defaultValue: 'Gender',
                                    id: 637085,
                                    index: 1,
                                    instructions: '',
                                    label: 'Gender',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'gender',
                                    options: [
                                        { display: 'Male', value: 'Male' },
                                        { display: 'Female', value: 'Female' }
                                    ],
                                    order: 2,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001477,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001481,
                                    defaultValue: 'Eye Color',
                                    id: 637086,
                                    index: 1,
                                    instructions: '',
                                    label: 'Eye Color',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'eyeColor',
                                    options: [
                                        { display: 'Black', value: 'Black' },
                                        { display: 'Brown', value: 'Brown' },
                                        { display: 'Green', value: 'Green' },
                                        { display: 'Maroon', value: 'Maroon' },
                                        { display: 'Pink', value: 'Pink' },
                                        { display: 'Blue', value: 'Blue' },
                                        { display: 'Gray', value: 'Gray' },
                                        { display: 'Hazel', value: 'Hazel' },
                                        { display: 'Unknown', value: 'Unknown' }
                                    ],
                                    order: 3,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001481,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001492,
                                    defaultValue: 'Hair Color',
                                    id: 637087,
                                    index: 1,
                                    instructions: '',
                                    label: 'Hair Color',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'hairColor',
                                    options: [
                                        { display: 'Bald', value: 'Bald' },
                                        { display: 'Black', value: 'Black' },
                                        { display: 'Blonde', value: 'Blonde' },
                                        { display: 'Brown', value: 'Brown' },
                                        { display: 'Gray', value: 'Gray' },
                                        { display: 'Red', value: 'Red' },
                                        { display: 'White', value: 'White' },
                                        { display: 'Unknown', value: 'Unknown' }
                                    ],
                                    order: 4,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001492,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001501,
                                    defaultValue: '',
                                    id: 637088,
                                    index: 1,
                                    instructions: '',
                                    label: 'Height (feet)',
                                    maskFormat: null,
                                    max: 9,
                                    min: 3,
                                    name: 'heightFeet',
                                    options: [
                                        { display: '0', value: '0' },
                                        { display: '1', value: '1' },
                                        { display: '2', value: '2' },
                                        { display: '3', value: '3' },
                                        { display: '4', value: '4' },
                                        { display: '5', value: '5' },
                                        { display: '6', value: '6' },
                                        { display: '7', value: '7' },
                                        { display: '8', value: '8' },
                                        { display: '9', value: '9' }
                                    ],
                                    order: 5,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001501,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001513,
                                    defaultValue: '',
                                    id: 637089,
                                    index: 1,
                                    instructions: '',
                                    label: 'Height (inches)',
                                    maskFormat: null,
                                    max: 11,
                                    min: 0,
                                    name: 'heightInches',
                                    options: [
                                        { display: '0', value: '0' },
                                        { display: '1', value: '1' },
                                        { display: '2', value: '2' },
                                        { display: '3', value: '3' },
                                        { display: '4', value: '4' },
                                        { display: '5', value: '5' },
                                        { display: '6', value: '6' },
                                        { display: '7', value: '7' },
                                        { display: '8', value: '8' },
                                        { display: '9', value: '9' },
                                        { display: '10', value: '10' },
                                        { display: '11', value: '11' }
                                    ],
                                    order: 6,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001513,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001527,
                                    defaultValue: 'weight',
                                    id: 637090,
                                    index: 1,
                                    instructions: '',
                                    label: 'Weight',
                                    maskFormat: null,
                                    max: 3,
                                    min: 1,
                                    name: 'weight',
                                    options: null,
                                    order: 7,
                                    pattern:
                                        '^(2[0-9]|[2-9][0-9]|[1-9][0-9][0-9])$',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001527,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150685,
                            instructions: '',
                            label: 'Demographic Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'DemographicInformation',
                            order: 206,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001466,
                            visible: true
                        },
                        {
                            category: 'APPLICANT',
                            createdBy: 0,
                            createdDate: 1544043001529,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001531,
                                    defaultValue: 'US Citizen',
                                    id: 637091,
                                    index: 1,
                                    instructions: '',
                                    label: 'US Citizen',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'usCitizen',
                                    options: [
                                        { display: 'Yes', value: 'Yes' },
                                        { display: 'No', value: 'No' }
                                    ],
                                    order: 1,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'RADIO',
                                    updatedBy: 0,
                                    updatedDate: 1544043001531,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001535,
                                    defaultValue: '',
                                    id: 637092,
                                    index: 1,
                                    instructions: '',
                                    label: 'Date of Birth',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'dateOfBirth',
                                    options: null,
                                    order: 2,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001535,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001538,
                                    defaultValue: 'Age',
                                    id: 637093,
                                    index: 1,
                                    instructions: '',
                                    label: 'Age',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'age',
                                    options: null,
                                    order: 3,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001538,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001540,
                                    defaultValue:
                                        'Enter your Social Security Number',
                                    id: 637094,
                                    index: 1,
                                    instructions: '',
                                    label: 'Enter your Social Security Number',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'enterYourSocialSecurityNumber',
                                    options: null,
                                    order: 4,
                                    pattern: '^(\\d{3})[-](\\d{2})[-](\\d{4})$',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001540,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001542,
                                    defaultValue: 'US ID Type',
                                    id: 637095,
                                    index: 1,
                                    instructions: '',
                                    label: 'US ID Type',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'usIdType',
                                    options: [
                                        {
                                            display: 'Driver License',
                                            value: 'Driver License'
                                        },
                                        {
                                            display: 'State ID',
                                            value: 'State ID'
                                        },
                                        {
                                            display: 'Military ID',
                                            value: 'Military ID'
                                        },
                                        {
                                            display: 'Passport',
                                            value: 'Passport'
                                        }
                                    ],
                                    order: 5,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001542,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001549,
                                    defaultValue: 'ID Number',
                                    id: 637096,
                                    index: 1,
                                    instructions: '',
                                    label: 'ID Number',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'idNumberUS',
                                    options: null,
                                    order: 6,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001549,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001551,
                                    defaultValue: 'State',
                                    id: 637097,
                                    index: 1,
                                    instructions: '',
                                    label: 'State',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'stateSelectUS',
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
                                    order: 7,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001551,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001605,
                                    defaultValue: 'International ID Type',
                                    id: 637098,
                                    index: 1,
                                    instructions: '',
                                    label: 'International ID Type',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'internationalIdType',
                                    options: [
                                        {
                                            display: 'State ID',
                                            value: 'State ID'
                                        },
                                        {
                                            display: 'Military ID',
                                            value: 'Military ID'
                                        },
                                        {
                                            display: 'Passport',
                                            value: 'Passport'
                                        },
                                        {
                                            display: 'Non US Driver License',
                                            value: 'Non US Driver License'
                                        },
                                        { display: 'Visa', value: 'Visa' },
                                        {
                                            display:
                                                'Permanent Resident Card [Green Card]',
                                            value: 'Permanent Resident Card'
                                        },
                                        {
                                            display: 'Traveler ID Card',
                                            value: 'Traveler ID Card'
                                        },
                                        { display: 'ITIN', value: 'ITIN' }
                                    ],
                                    order: 8,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001605,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001615,
                                    defaultValue: 'ID Number',
                                    id: 637099,
                                    index: 1,
                                    instructions: '',
                                    label: 'ID Number',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'idNumberInt',
                                    options: null,
                                    order: 8,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'NUMBER',
                                    updatedBy: 0,
                                    updatedDate: 1544043001615,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001618,
                                    defaultValue: 'State',
                                    id: 637100,
                                    index: 1,
                                    instructions: '',
                                    label: 'State',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'stateSelectInt',
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
                                    order: 9,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: false,
                                    sensitive: false,
                                    type: 'SELECT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001618,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150686,
                            instructions: null,
                            label: 'Identification Information',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'IdentificationInformation',
                            order: 307,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001529,
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
                    index: 4,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FIELDSETS',
                    fieldsets: [
                        {
                            category: 'SECTION',
                            createdBy: 0,
                            createdDate: 1544043001670,
                            fields: null,
                            formVersionId: 26281,
                            id: 150687,
                            instructions: '',
                            label: 'Section 1',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'SECTION2067',
                            order: 1000,
                            page: 4,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001670,
                            visible: true
                        },
                        {
                            category: 'YESNO',
                            createdBy: 0,
                            createdDate: 1544043001673,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001674,
                                    defaultValue: 'Yes / No Question',
                                    id: 637101,
                                    index: 1,
                                    instructions: '',
                                    label: 'Yes / No Question',
                                    maskFormat: null,
                                    max: 300,
                                    min: 1,
                                    name: 'YESNO2065FIELD2066',
                                    options: [
                                        {
                                            display: 'Yes',
                                            value:
                                                '19ea1c82-25b9-4eed-8fc0-ec527b9466dd'
                                        },
                                        {
                                            display: 'NO',
                                            value:
                                                '140d127c-16c1-4626-a5f4-36413b9525a3'
                                        }
                                    ],
                                    order: 1,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'RADIO',
                                    updatedBy: 0,
                                    updatedDate: 1544043001674,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150688,
                            instructions:
                                'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alca',
                            label: 'Yes / No Question',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'YESNO2065',
                            order: 1001,
                            page: 4,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001673,
                            visible: true
                        },
                        {
                            category: 'DESCRIPTION',
                            createdBy: 0,
                            createdDate: 1544043001678,
                            fields: null,
                            formVersionId: 26281,
                            id: 150689,
                            instructions: '',
                            label:
                                'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'DESCRIPTION2068',
                            order: 1002,
                            page: 4,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001678,
                            visible: true
                        }
                    ],
                    feeOptions: null
                },
                {
                    index: 5,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FEE_OPTIONS',
                    fieldsets: null,
                    feeOptions: [
                        {
                            id: 250,
                            feeType: 'LNP',
                            name: 'A Really Big App',
                            required: true,
                            requiredLineitemCount: 1,
                            displayOrder: 1,
                            label: 'A Really Big App',
                            description:
                                'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
                            createdBy: 'lnp-user',
                            createdDt: 1544043012022,
                            updatedBy: 'lnp-user',
                            updatedDt: 1544043012022,
                            feeLineitemList: [
                                {
                                    id: 439,
                                    name: 'Second Fee',
                                    description:
                                        'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
                                    sku: 'NR Fishing 04',
                                    label: 'Second Fee',
                                    price: '2.00',
                                    displayOrder: 0
                                }
                            ]
                        },
                        {
                            id: 252,
                            feeType: 'PROCESSOR',
                            name: 'JetPay Fee',
                            required: true,
                            requiredLineitemCount: 1,
                            displayOrder: 1,
                            label: 'JetPay Fee',
                            description: 'JetPay Fee',
                            createdBy: 'lnp-user',
                            createdDt: 1544043012026,
                            updatedBy: 'lnp-user',
                            updatedDt: 1544043012026,
                            feeLineitemList: [
                                {
                                    id: 441,
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
                            id: 251,
                            feeType: 'APP',
                            name: 'A Really Big App',
                            required: true,
                            requiredLineitemCount: 1,
                            label: 'A Really Big App',
                            description: 'App Fee',
                            createdBy: 'lnp-user',
                            createdDt: 1544043012025,
                            updatedBy: 'lnp-user',
                            updatedDt: 1544043012025,
                            displayOrder: 1,
                            feeLineitemList: [
                                {
                                    id: 440,
                                    name: 'First Fee',
                                    description: 'App Fee',
                                    sku: 'NR Fishing 04',
                                    label: 'First Fee',
                                    price: '1.00',
                                    displayOrder: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'documentUpload',
            label: 'Document Upload',
            index: 30,
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
                            category: 'DOCUMENTUPLOAD',
                            createdBy: 0,
                            createdDate: 1544043000249,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000251,
                                    defaultValue: 'EDUCATIONAL',
                                    id: 637047,
                                    index: 1,
                                    instructions: '',
                                    label: 'Educational Document',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'DocumentUploadFIELD2062',
                                    options: null,
                                    order: 0,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: true,
                                    type: 'FILE',
                                    updatedBy: 0,
                                    updatedDate: 1544043000251,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000253,
                                    defaultValue: 'MILITARY',
                                    id: 637048,
                                    index: 1,
                                    instructions: '',
                                    label: 'Military Document',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'DocumentUploadFIELD2063',
                                    options: null,
                                    order: 0,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: true,
                                    type: 'FILE',
                                    updatedBy: 0,
                                    updatedDate: 1544043000253,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043000255,
                                    defaultValue: 'LEGAL',
                                    id: 637049,
                                    index: 1,
                                    instructions: '',
                                    label: 'Legal Document',
                                    maskFormat: null,
                                    max: 50,
                                    min: 1,
                                    name: 'DocumentUploadFIELD2064',
                                    options: null,
                                    order: 0,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: true,
                                    type: 'FILE',
                                    updatedBy: 0,
                                    updatedDate: 1544043000255,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150679,
                            instructions:
                                'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
                            label: 'DocumentUpload',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'DocumentUpload',
                            order: 0,
                            page: 1,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043000249,
                            visible: true
                        }
                    ],
                    feeOptions: null
                }
            ]
        },
        {
            name: 'infoSummary',
            label: 'Information Summary',
            index: 40,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        },
        {
            name: 'electronicSignature',
            label: 'Electronic Signature',
            index: 50,
            conditionalDisplay: false,
            type: 'PAGES',
            pages: [
                {
                    index: 5,
                    name: null,
                    label: null,
                    visited: false,
                    completed: false,
                    type: 'FIELDSETS',
                    fieldsets: [
                        {
                            category: 'ELECTRONICSIGNATURE',
                            createdBy: 0,
                            createdDate: 1544043001680,
                            fields: [
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001682,
                                    defaultValue:
                                        'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
                                    id: 637102,
                                    index: 1,
                                    instructions: '',
                                    label:
                                        'Burgdoggen buffalo shoulder meatloaf, beef ribs jowl salami short loin prosciutto spare ribs bresaola. Picanha jerky doner pork belly biltong salami pancetta spare ribs chicken shank drumstick buffalo cupim shoulder tri-tip. Chuck pig ribeye, drumstick beef turducken jerky corned beef pork chop alcatra. Drumstick leberkas ground round turkey tenderloin burgdoggen sausage t-bone andouille strip steak frankfurter turducken. Pastrami ham hock short loin pork loin corned beef alcatra. Burgdoggen ham ham hock hamburger, beef ribs swine biltong. Pastrami turducken pancetta, shank short ribs sirloin drumstick tail tenderloin venison andouille spare ribs pork belly pork chop.',
                                    maskFormat: null,
                                    max: 5000,
                                    min: 1,
                                    name: 'eSignatureCheck',
                                    options: [
                                        {
                                            display: '',
                                            value:
                                                'f33685aa-172f-4f16-9b61-ac38402b0bcb'
                                        }
                                    ],
                                    order: 1,
                                    pattern: '',
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'CHECKBOX',
                                    updatedBy: 0,
                                    updatedDate: 1544043001682,
                                    visible: true
                                },
                                {
                                    createdBy: 0,
                                    createdDate: 1544043001686,
                                    defaultValue:
                                        'Please enter your name in the field below.',
                                    id: 637103,
                                    index: 1,
                                    instructions: '',
                                    label:
                                        'Please enter your name in the field below.',
                                    maskFormat: null,
                                    max: 94,
                                    min: 1,
                                    name: 'eSignatureText',
                                    options: null,
                                    order: 2,
                                    pattern:
                                        "^['.a-z-A-Z\\sÀÁÃàáãćĆÈÉèéÌÍìíŃÑńñÒÓÕòóõśŚÚÙúùźŹ]+$",
                                    primitiveType: 'STRING',
                                    required: true,
                                    sensitive: false,
                                    type: 'TEXT',
                                    updatedBy: 0,
                                    updatedDate: 1544043001686,
                                    visible: true
                                }
                            ],
                            formVersionId: 26281,
                            id: 150690,
                            instructions: '',
                            label: 'Electronic Signature',
                            maxRepeatable: null,
                            minRepeatable: null,
                            name: 'ElectronicSignature',
                            order: 3000,
                            page: 5,
                            repeatable: false,
                            sensitive: false,
                            updatedBy: 0,
                            updatedDate: 1544043001680,
                            visible: true
                        }
                    ],
                    feeOptions: null
                }
            ]
        },
        {
            name: 'payment',
            label: 'Payment',
            index: 60,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        },
        {
            name: 'confirmation',
            label: 'Confirmation',
            index: 70,
            conditionalDisplay: false,
            type: 'NONE',
            pages: []
        }
    ]
};

module.exports.default = submissionData;
