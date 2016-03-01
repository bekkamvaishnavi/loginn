import React from 'react';
import InputGroup from '../../common/components/InputGroup';
import LoginCredentialStore from './../stores/LoginCredentialStore';
import LoginActions from './../actions/LoginActions';
import CommonUtils from './../../common/utils/CommonUtils';

var LoginForm = React.createClass({
    propTypes: {
        context: React.PropTypes.string,
        usernameLabel: React.PropTypes.string,
        passwordLabel: React.PropTypes.string,
        fiLoginButtonLabel: React.PropTypes.string,
        isPerformingLogin: React.PropTypes.bool
    },
    getInitialState: function() {
        return LoginCredentialStore.getState();
    },
    componentDidMount() {
        LoginCredentialStore.listen(this.onCredentialChange);
    },
    componentWillUnmount() {
        LoginCredentialStore.unlisten(this.onCredentialChange);
    },
    handleUsernameChange: function(event) {
        LoginActions.updateUsername(event.target.value);
    },
    handlePasswordChange: function(event) {
        LoginActions.updatePassword(event.target.value);
    },
    keypressHandler: function(event) {
        // Disable form submission with the enter key whenever a login is being performed
        if(event.charCode === 13 && this.props.isPerformingLogin) {
            event.preventDefault();
        }
    },
    submitHandler: function(event) {
        // Whenever the SPA is in a state where the login page needs to be integrated into it, the call to submit the
        // credentials will have to be routed through AJAX. Uncomment the following to do so (see LoginActions too):
        /*
         event.preventDefault();
         */
        // Assuming that the SPA has been set up correctly, no additional handling should be required on the front-end.
        // However, back-end changes may need to be made in order to conform to whatever routing procedure has been
        // implemented on the front-end.

        if (CommonUtils.areCookiesEnabled()) {
            LoginActions.login(this.state.username, this.state.password);
        } else {
            // This preventDefault won't be needed if the first one is uncommented
            event.preventDefault();
            LoginActions.showCookieError();
        }
    },
    onCredentialChange: function(state) {
        this.setState(state);
    },
    render: function() {
        return (
            <form id="loginForm" name="Login" autoComplete="off" method="post" action={this.props.context + '/app/initialLogin'} onKeyPress={this.keypressHandler} onSubmit={this.submitHandler}>
        <InputGroup type="text" id="username" name="userid" label={this.props.usernameLabel} onChangeHandler={this.handleUsernameChange}/>
        <InputGroup type="password" id="password" name="password" label={this.props.passwordLabel} onChangeHandler={this.handlePasswordChange}/>
        <input type="hidden" id="localeValue" name="overrideLanguage" value={this.props.uspLocale}/> { /* TODO Should be removed when converting to SPA */ }
        <button id="loginButton" type="submit" className={'btn btn-primary' + (this.props.isPerformingLogin ? ' disabled' : '')}>{this.props.fiLoginButtonLabel}</button>
        <span id="loginSpinner" className="di-loader-dash-sm" style={this.props.isPerformingLogin ? null : {display: 'none'}}></span>
        </form>
        );
    }
});

export default LoginForm;