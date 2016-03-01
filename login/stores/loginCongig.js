import alt from './../alt';
import LoginActions from './../actions/LoginActions'

class LoginConfigStore {
    constructor() {
        this.isPerformingLogin = null;

        this.staticResourcesContext = null;
        this.timeout = null;
        this.timeoutMessage = null;
        this.logout = null;
        this.logoutMessage = null;
        this.fiLoginLabel = null;
        this.usernameLabel = null;
        this.passwordLabel = null;

        this.context = null;
        this.fiLoginButtonLabel = null;
        this.uspLocale = null;
        this.isForgotPasswordEnabled = null;
        this.forgotPasswordLabel = null;
        this.fiArsRegistrationEnabled = null;
        this.fiEnrollNowLink = null;
        this.fiEnrollNowDescription = null;
        this.fiEnrollButtonLabel = null;
        this.motd = null;
        this.browser_compatibility = null;
        this.browser_compatibility_link_text = null;
        this.having_trouble_testing_link_test = null;

        this.bindListeners({
            handleInitializePage: LoginActions.INITIALIZE_PAGE,
            handleLogin: LoginActions.LOGIN,
            handleLoginSucceeded: LoginActions.LOGIN_SUCCEEDED,
            handleLoginFailed: LoginActions.LOGIN_FAILED
        });
    }

    handleInitializePage(initialState) {
        this.fillStore(initialState);
        this.isPerformingLogin = false;
    }

    handleLogin() {
        this.isPerformingLogin = true;
    }

    handleLoginSucceeded(response) {
        this.isPerformingLogin = false;
        this.fillStore(response);
    }

    handleLoginFailed([error, message]) {
        this.isPerformingLogin = false;
    }

    fillStore(data) {
        for (var key in data) {
            if (this.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}

export default alt.createStore(LoginConfigStore, 'LoginConfigStore');