import React from 'react';
import ReactAria from './../../common/components/ReactAria';
import Alert from './../../common/components/Alert';

// This component selects the correct error message and renders it in an alert
var LoginErrorAlert = React.createClass({
    propTypes: {
        cookiesDisabled: React.PropTypes.bool,
        cookiesDisabledMessage: React.PropTypes.string,
        cookiesDisabledInstruction: React.PropTypes.string,
        userLocked: React.PropTypes.bool,
        userLockedMessage: React.PropTypes.string,
        userHold: React.PropTypes.bool,
        userHoldMessage: React.PropTypes.string,
        concurrentSessionNotAllowed: React.PropTypes.bool,
        concurrentSessionErrorMsg: React.PropTypes.string,
        invalidLogin: React.PropTypes.bool,
        firstTimeUser: React.PropTypes.bool,
        firstTimeUserMessage: React.PropTypes.string,
        invalidLoginMessage: React.PropTypes.string,
        disclosureRejected: React.PropTypes.bool,
        disclosureRejectedMessage: React.PropTypes.string,
        ibPassInvalid: React.PropTypes.bool,
        ibPassInvalidMessage: React.PropTypes.string,
        invalidReferrerDomain: React.PropTypes.bool,
        invalidReferrerDomainMessage: React.PropTypes.string,
        hostAccessDenied: React.PropTypes.bool,
        hostAccessDeniedMessage: React.PropTypes.string,
        whiteListedIPsCantLogin: React.PropTypes.bool,
        whiteListedIPsCantLoginErrorMsg: React.PropTypes.string,
        userAlreadyConverted: React.PropTypes.bool,
        userAlreadyConvertedHeader: React.PropTypes.string,
        userAlreadyConvertedMessage: React.PropTypes.string,
        context: React.PropTypes.string,
        userAlreadyConvertedForgotMessage: React.PropTypes.string,
        errorCode: React.PropTypes.string,
        serviceUnavailableMessage: React.PropTypes.string,
        errorCodeLabel: React.PropTypes.string
    },
    render: function() {
        var errorMessage = null;

        if (this.props.cookiesDisabled) {
            errorMessage =
                (<div>
                <div>{this.props.cookiesDisabledMessage}</div>
            <div>{this.props.cookiesDisabledInstruction}</div>
            </div>);
        } else if(this.props.userLocked) {
            errorMessage = this.props.userLockedMessage;
            ReactAria.setAlertMessage(this.props.userLockedMessage);
        } else if (this.props.userHold) {
            errorMessage = this.props.userHoldMessage;
        } else if (this.props.concurrentSessionNotAllowed) {
            errorMessage = this.props.concurrentSessionErrorMsg;
        } else if (this.props.invalidLogin) {
            errorMessage =
                (<div>
                {this.props.invalidLoginMessage}
            {
                this.props.firstTimeUser ?
            <div>{this.props.firstTimeUserMessage}</div>
            : null
            }
        </div>);
            ReactAria.setAlertMessage(this.props.invalidLoginMessage);
        } else if (this.props.disclosureRejected) {
            errorMessage = this.props.disclosureRejectedMessage;
        } else if (this.props.ibPassInvalid) {
            errorMessage = this.props.ibPassInvalidMessage;
        } else if (this.props.invalidReferrerDomain) {
            errorMessage = this.props.invalidReferrerDomainMessage;
        } else if (this.props.hostAccessDenied) {
            errorMessage = this.props.hostAccessDeniedMessage;
        } else if (this.props.whiteListedIPsCantLogin) {
            errorMessage = this.props.whiteListedIPsCantLoginErrorMsg;
        } else if (this.props.userAlreadyConverted) {
            errorMessage =
                (<div>
                <div><strong>{this.props.userAlreadyConvertedHeader}</strong></div>
            <div>{this.props.userAlreadyConvertedMessage}</div>
            <a id="alreadyConvertedForgotPasswordLink" className="inline-block-link" href={this.props.context + '/app/authUpdate'}>{this.props.userAlreadyConvertedForgotMessage}</a>
            </div>);
        } else if (this.props.errorCode) {
            errorMessage = <div>{this.props.serviceUnavailableMessage} {this.props.errorCodeLabel}: {this.props.errorCode}</div>;
        } else {
            errorMessage = this.props.serviceUnavailableMessage;
        }

        return (
            <Alert type="danger" message={errorMessage}/>
        );
    }
});

export default LoginErrorAlert;
Status API Training Shop Blog About Pricing
© 2016 GitHub, Inc. Terms Privacy Security Contact Help