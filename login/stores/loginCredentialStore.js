import alt from './../alt';
import LoginActions from './../actions/LoginActions'

// This store manages login credentials. The username and password that the user enters on the login page are managed
// here.
class LoginCredentialStore {
    constructor() {
        this.username = null;
        this.password = null;

        this.bindListeners({
            handleUpdateUsername: LoginActions.UPDATE_USERNAME,
            handleUpdatePassword: LoginActions.UPDATE_PASSWORD
        });
    }

    handleUpdateUsername(username) {
        this.username = username;
    }

    handleUpdatePassword(password) {
        this.password = password;
    }
}

export default alt.createStore(LoginCredentialStore, 'LoginCredentialStore');
Status API Training Shop Blog About Pricing
© 2016 GitHub, Inc. Terms Privacy Security Contact Help