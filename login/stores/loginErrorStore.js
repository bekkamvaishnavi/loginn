import alt from './../alt';
import LoginActions from './../actions/LoginActions';

// This store manages login errors. Errors refer to both "login" errors (e.g. bad credentials, lockout) and errors that
// arise from the actual login request (e.g. HTTP 408, 500).
class LoginErrorStore {
    constructor() {
        this.context = null;
        this.error = null;
        this.ajaxError = null;
        this.cookiesDisabled = null;
        this.cookiesDisabledMessage = null;
        this.cookiesDisabledInstruction = null;
        this.userLocked = null;
        this.userLockedMessage = null;
        this.userHold = null;
        this.userHoldMessage = null;
        this.concurrentSessionNotAllowed = null;
        this.concurrentSessionErrorMsg = null;
        this.invalidLogin = null;
        this.invalidLoginMessage = null;
        this.firstTimeUser = null;
        this.firstTimeUserMessage = null;
        this.disclosureRejected = null;
        this.disclosureRejectedMessage = null;
        this.ibPassInvalid = null;
        this.ibPassInvalidMessage = null;
        this.invalidReferrerDomain = null;
        this.invalidReferrerDomainMessage = null;
        this.hostAccessDenied = null;
        this.hostAccessDeniedMessage = null;
        this.whiteListedIPsCantLogin = null;
        this.whiteListedIPsCantLoginErrorMsg = null;
        this.userAlreadyConverted = null;
        this.userAlreadyConvertedHeader = null;
        this.userAlreadyConvertedMessage = null;
        this.userAlreadyConvertedForgotMessage = null;
        this.errorCode = null;
        this.errorCodeLabel = null;
        this.serviceUnavailableMessage = null;

        this.bindListeners({
            handleInitializePage: LoginActions.INITIALIZE_PAGE,
            handleShowCookieError: LoginActions.SHOW_COOKIE_ERROR,
            handleLogin: LoginActions.LOGIN,
            handleLoginSucceeded: LoginActions.LOGIN_SUCCEEDED,
            handleLoginFailed: LoginActions.LOGIN_FAILED
        });
    }

    handleInitializePage(initialState) {
        this.fillStore(initialState);
        this.ajaxError = false;
        this.cookiesDisabled = false;
    }

    handleShowCookieError() {
        this.error = true;
        this.cookiesDisabled = true;
    }

    handleLogin() {
        // Reset the errors when we start a new login request
        this.error = false;
        this.ajaxError = false;
        this.cookiesDisabled = false;
    }

    handleLoginSucceeded(response) {
        this.fillStore(response);
    }

    handleLoginFailed([error, message]) {
        this.error = true;
        this.ajaxError = true;
    }

    fillStore(data) {
        for (var key in data) {
            if (this.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}

export default alt.createStore(LoginErrorStore, 'LoginErrorStore');