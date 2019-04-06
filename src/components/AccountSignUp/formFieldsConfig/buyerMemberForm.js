export const BuyerMemberFormLeft = [
    {
        label: 'ID',
        name: 'ID',
        type: 'text',
    },
    {
        label: 'password',
        name: 'password',
        type: 'password',
    },
    {
        label: 'Retype Password',
        name: 'RetypePassword',
        type: 'password',
    },
    {
        label: 'E-mail',
        name: 'email',
        type: 'email'
    },
    {
        label: 'Entity Name',
        name: 'EntityName',
        type: 'text'
    },
    {
        label: 'Contact Number',
        name: 'ContactNumber',
        type: 'text'
    },
    {
        label: 'Recommand Person',
        name: 'RecommandPerson',
        type: 'text'
    },
    [
        { title: 'How did you find TopSeller *', inputType: 'none' },
        {
            label: 'Acquaintance Recommended',
            name: 'findTopseller',
            type: 'radio',
            value: 'Acquaintance Recommended'
        },
        {
            label: 'Keyword Search',
            name: 'findTopseller',
            type: 'radio',
            value: 'Keyword Search'
        },
        {
            label: 'Blog',
            name: 'findTopseller',
            type: 'radio',
            value: 'Blog'
        },
        {
            label: 'Facebook',
            name: 'findTopseller',
            type: 'radio',
            value: 'Facebook'
        },
        {
            label: 'Advertisement',
            name: 'findTopseller',
            type: 'radio',
            value: 'Advertisement'
        },
        {
            label: 'Others',
            name: 'findTopseller',
            type: 'radio',
            value: 'others'
        },
        {
            label: '',
            name: 'othersValue',
            type: 'text',
            value: ''
        },

    ],
    {
        label: 'Agree for receiving mail of event, sales, discount etc',
        name: 'terms',
        class: 'checkbox',
        type: 'checkbox',
    }
];
export const BuyerMemberFormRight = [
    {
        label: 'PAN Number',
        name: 'PANnumber',
        type: 'text'
    },
    {
        label: 'PAN Card Copy',
        name: 'PANCardCopy',
        type: 'file',
        placeholder: 'Submit PAN Card Copy'
    },

    [
        { title: 'Do you have GSTIN?', inputType: 'none' },
        {
            label: 'Yes',
            name: 'gstin',
            type: 'radio',
            value: 'yes'
        },
        {
            label: 'No',
            name: 'gstin',
            type: 'radio',
            value: 'no'
        },

    ],
    {
        label: 'GSTIN Number',
        name: 'GSTINNumber',
        class: 'GSTINNumber',
        type: 'text',
    },
    {
        label: 'GSTIN Certificate',
        name: 'GSTINCertificate',
        type: 'file',
        placeholder: 'Submit GST Certificate'
    },
    {
        label: 'Entity Country',
        name: 'EntityCountry',
        class: 'country',
        inputType: 'dropdown'
    },
    {
        label: 'Pin Code',
        name: 'PinCode',
        fieldType: 'pinCode',
        type: 'text'
    },
    {
        label: 'State',
        name: 'State',
        type: 'text'
    },
    {
        label: 'Address Line',
        name: 'AddressLine',
        class: 'addressLine',
        type: 'text'
    },
    {
        label: '',
        class: 'addressLine2',
        name: 'AddressLine2',
        type: 'text'
    },
];
export const validate = formValues => {
    let errors = {};
    if (!formValues.ID) {
        errors.ID = 'Please Enter ID';
    }
    if (!formValues.password) {
        errors.password = 'Please Enter password';
    }
    if (!formValues.RetypePassword) {
        errors.RetypePassword = 'Please Enter reTypePassword';
    }
    if (!formValues.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Please enter a valid email';
    }
    if (!formValues.EntityName) {
        errors.EntityName = 'Please Enter Entity Name';
    }
    if (!formValues.ContactNumber) {
        errors.ContactNumber = 'Please Enter Contact Number';
    } else if (!/^(0|[1-9][0-9]{9})$/i.test(formValues.ContactNumber)) {
        errors.ContactNumber = 'Invalid phone number, must be 10 digits';
    }
    if (!formValues.RecommandPerson) {
        errors.RecommandPerson = 'Please Enter Recommand Person';
    }
    if (!formValues.terms) {
        errors.terms = 'Please Select terms';
    }
    if (!formValues.PANnumber) {
        errors.PANnumber = 'Please Enter PAN Number';
    }
    if (!formValues.PANCardCopy) {
        errors.PANCardCopy = 'Please Enter PAN Card Copy';
    }
    if (!formValues.GSTINNumber) {
        errors.GSTINNumber = 'Please Enter GSTIN Number';
    }
    if (!formValues.GSTINCertificate) {
        errors.GSTINCertificate = 'Please Enter GSTIN Certificate';
    }
    if (!formValues.EntityCountry) {
        errors.EntityCountry = 'Please Enter Entity Country';
    }
    if (!formValues.PinCode) {
        errors.PinCode = 'Please Enter PinCode';
    }
    else if (!/^(0|[1-5][0-9]{5})$/i.test(formValues.PinCode)) {
        errors.PinCode = 'Invalid pine code number, must be 6 digits';
    }
    if (!formValues.State) {
        errors.State = 'Please Enter state';
    }
    if (!formValues.AddressLine) {
        errors.AddressLine = 'Please Enter Address Line';
    }
    return errors;
}