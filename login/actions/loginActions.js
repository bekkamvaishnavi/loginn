import alt from './../alt';
import LoginService from './../services/LoginService';
import reqwest from 'reqwest';

class LoginActions {
    initializePage(initialState) {
        this.dispatch(initialState);
    }

    showCookieError() {
        this.dispatch();
    }

    login(username, password) {
        this.dispatch();
        // Whenever the SPA is in a state where the login page needs to be integrated into it, the call to submit the
        // credentials will have to be routed through AJAX. Uncomment the following to do so (see LoginForm too):
        /*
         LoginService.login(username, password)
         .then((response) => {
         this.actions.loginSucceeded(response);
         })
         .fail((error) => {
         this.actions.loginFailed(error, message);
         });
         */
        // Assuming that the SPA has been set up correctly, no additional handling should be required on the front-end.
        // However, back-end changes may need to be made in order to conform to whatever routing procedure has been
        // implemented on the front-end.


    }

    loginSucceeded(response) {
        this.dispatch(response);
    }

    loginFailed(error, message) {
        this.dispatch([error, message]);
    }

    updateUsername(username) {
        this.dispatch(username);
    }

    updatePassword(password) {
        this.dispatch(password);
    }
}

export default alt.createActions(LoginActions);