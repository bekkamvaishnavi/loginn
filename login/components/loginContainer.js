import React from 'react';
import LoginForm from './LoginForm';
import LoginErrorAlert from './LoginErrorAlert';
import LoginErrorStore from './../stores/LoginErrorStore';
import LoginConfigStore from './../stores/LoginConfigStore';

var LoginContainer = React.createClass({
    getInitialState: function() {
        return {config: LoginConfigStore.getState(), errorConfig: LoginErrorStore.getState()};
    },
    componentDidMount() {
        LoginConfigStore.listen(this.onPageConfigChange);
        LoginErrorStore.listen(this.onErrorConfigChange);
    },
    componentWillUnmount() {
        LoginConfigStore.unlisten(this.onPageConfigChange);
        LoginErrorStore.unlisten(this.onErrorConfigChange);
    },
    onPageConfigChange(state) {
        this.setState({config: state});
    },
    onErrorConfigChange(state) {
        this.setState({errorConfig: state});
    },
    render: function() {
        return(
            <div id="loginContainer" className="container">
            <div className="row">
            <div className="col-xs-12">
            <div className="di-container">
            <div className="page-header">
            <h1 id="fiLoginLabel">{this.state.config.fiLoginLabel}</h1>
        </div>
        {
            this.state.errorConfig.error ?
        (<div id="loginErrorContainer">
            <LoginErrorAlert {...this.state.errorConfig}/>
        </div>)
        : null
    }
        <div className="main-container">
            <div className="row">
            <div className="col-xs-12 col-sm-5">
            <LoginForm {...this.state.config}/>
        {
            this.state.config.isForgotPasswordEnabled ?
        <a id="forgotPasswordLink" className="inline-block-link" href={this.state.config.context + '/app/authUpdate'}>{this.state.config.forgotPasswordLabel}</a>
        : null
        }

        </div>
        <div className="col-xs-12 col-sm-5 col-sm-offset-2">
        {
            this.state.config.fiEnrollNowLink && !this.state.config.fiArsRegistrationEnabled ?
        (<div id="enrollContainer">
            <div id="enrollHeader">{this.state.config.fiEnrollNowDescription}</div>
        <a id="enrollLink" className="inline-block-link" href={this.state.config.fiEnrollNowLink}>{this.state.config.fiEnrollButtonLabel}</a>
        </div>)
        : null
    }
        {
            this.state.config.motd ?
            // The MOTD will be sanitized HTML
        <div id="motdContainer" className="text-long" dangerouslySetInnerHTML={{__html: this.state.config.motd}}></div>
        : null
        }
        {
            this.state.config.browser_compatibility ?
            (<div id="brow-compat-link-disp">
                <a id="test-browser" className="inline-block-link" href="javascript:void(0)">{this.state.config.browser_compatibility_link_text}</a>
        <br/>
        <a id="trouble-test-browser" className="inline-block-link" target="_blank" href={this.state.config.staticResourcesContext + '/static/html/login_help.html#compatibility_test'}>{this.state.config.having_trouble_testing_link_test}</a>
        </div>)
        : null
        }
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        );
    }
});

export default LoginContainer;