import libphonenumber from 'google-libphonenumber';

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export const isPhoneNoValid = ({ phoneNumber, countryCode }) => {
    if (phoneNumber) {
        const isValid = phoneUtil.isValidNumberForRegion(phoneUtil.parse(phoneNumber, countryCode), countryCode);

        return isValid
    }

};