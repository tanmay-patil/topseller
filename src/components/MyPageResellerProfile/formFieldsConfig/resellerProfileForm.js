export const ResellerFormLeft = [
    {
        label: 'ID',
        name: 'ID',
        type: 'text',
    },
    {
        label: 'E-mail',
        name: 'email',
        type: 'email'
    },
    {
        label: 'E-mail for Invoice',
        name: 'emailInvoice',
        type: 'email'
    },
    {
        label: 'Contact',
        name: 'ContactNumber',
        type: 'text'
    },
    {
        label: 'Alternative Contact',
        name: 'AlternativeContact',
        type: 'text'
    },
    {
        label: 'Entity Name',
        name: 'EntityName',
        type: 'text'
    },
    {
        label: 'Registration Number',
        name: 'RegistrationNumber',
        class: 'RegistrationNumber',
        type: 'text',
    },
    {
        label: 'Registration Certificate',
        name: 'RegistrationCertificate',
        type: 'file',
        placeholder: 'Submit Registration Certificate'
    },
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
    {
        label: 'GSTIN Number',
        name: 'GSTINnNumber',
        class: 'GSTINnNumber',
        type: 'text',
    },
    {
        label: 'GSTIN  Certificate',
        name: 'GSTIN Certificate',
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