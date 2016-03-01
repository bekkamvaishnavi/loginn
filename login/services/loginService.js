import reqwest from 'reqwest';

// This service performs AJAX operations for the login page.
class LoginService {
    constructor() {
        this.context = null;
        this.uspLocale = null;
    }

    setConfigs(context, uspLocale) {
        this.context = context;
        this.uspLocale = uspLocale;
    }

    login(username, password) {
        return reqwest({
            type: 'json',
            url: this.context + '/app/initialLogin',
            method: 'post',
            data: { userid: username, password: password, uspLocale: this.uspLocale }
        })
    }
}

export default new LoginService();
Status API Training Shop Blog About Pricing
© 2016 GitHub, Inc. Terms Privacy Security Contact Help