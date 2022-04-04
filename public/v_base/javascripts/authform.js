// -----------------------------------------------------------------------------
// 
// This file is the copyrighted property of Tableau Software and is protected 
// by registered patents and other applicable U.S. and international laws and 
// regulations.
// 
// Unlicensed use of the contents of this file is prohibited. Please refer to 
// the NOTICES.txt file for further details.
// 
// -----------------------------------------------------------------------------
// Assumes inclusion of "jsrsa" scripts

function doLogin(n,e,form) {
  var rsa = new RSAKey();
  rsa.setPublic(n,e);
  encryptField(rsa, form, form.crypted, form.password, "txt1");
  form.submit();
  return false;
}

function doPreauthenticatedChange(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    encryptField(rsa, form, form.crypted_confirmation, form.password_confirmation, "txt2");
    form.submit();
    return false;
}

function doLoginAndChange(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    encryptField(rsa, form, form.crypted_new_password, form.new_password, "txt2");
    encryptField(rsa, form, form.crypted_new_password_confirm, form.new_password_confirm, "txt3");
    form.submit();
    return false;
}

function encryptPasswordOnly(n, e, form) {
        var rsa = new RSAKey();
        rsa.setPublic(n,e);
        encryptField(rsa, form, form.crypted, form.password, "txt1");
        encryptField(rsa, form, form.crypted_new_password, form.new_password, "txt2");
        encryptField(rsa, form, form.crypted_new_password_confirm, form.new_password_confirm, "txt3");
}

function doChangePassword(n, e, form) {
    encryptPasswordOnly(n, e, form);
    form.submit();
    return false;
}

function doDeleteAccount(n, e, form) {
    var rsa = new RSAKey();
    rsa.setPublic(n,e);
    encryptField(rsa, form, form.crypted, form.password, "txt1");
    form.submit();
    return false;
}

function encryptField(rsaKey, form, crypted_input, text_input, digits) {
        var res = text_input ? rsaKey.encrypt(text_input.value) : null;
        if (res) {
                crypted_input.value = res;
                text_input.value = digits + digits + digits + digits; //digits should be unique 4 chars
        }
}