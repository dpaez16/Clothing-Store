export const validatePhoneNumber = function(phoneNumber) {
    // https://regexlib.com/REDetails.aspx?regexp_id=61
    const regex = new RegExp(
        /^(\d[\-\ ])?((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})$/
    );

    return regex.test(phoneNumber);
};

export const validateEmail = function(email) {
    // https://regexlib.com/REDetails.aspx?regexp_id=26
    const regex = new RegExp(
        /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    );

    return regex.test(email);
};