import React from 'react';
import LoginContainer from './components/LoginContainer';
import LoginActions from './actions/LoginActions';
import LoginService from './services/LoginService';
import FooterElements from '../footer/components/FooterElements';

var _footerConfig = {
    "fiFooterLinks": [
        {

            "links": [
                {
                    "link": "https://www.fdic.gov/",
                    "image": "../../static/images/logos/memberfdic_94x16_k_75.png",
                    "alt": "FDIC"
                },
                {
                    "link": "http://portal.hud.gov/hudportal/HUD",
                    "image": "../../static/images/logos/logo_ehl.gif",
                    "alt": "Equal Housing Lender"
                },
                {
                    "link": "https://seal.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.bankplus.net&lang=en",
                    "image": "../../static/images/logos/logo_verisign.gif",
                    "alt": "Verisign"
                },

            ]
        }

    ],
    "fiFooterTextLinks":  [
        {
            "headerName": "Sample Header",
            "links": [
                {
                    "linkText": "Test Link 1-A",
                    "linkUrl": "http://www.google.com"
                },
                {
                    "linkText": "Test Link 2-A",
                    "linkUrl": "http://www.google.com"
                },
                {
                    "linkText": "Test Link 2-A",
                    "linkUrl": "http://www.google.com"
                }

            ],
            "staticContent" : "Static Content Goes here",

        },
        {
            "headerName": "Sample Header",
            "staticContent" : "Static Content Goes here",

        }

    ],
    "footerStaticText": "<span style=\"color:blue\">This is larger text</span><br><span style=\"color:red;font-size:8px\">This is smaller text on next line</span>"
};


var LoginApp = React.createClass({
    componentWillMount: function() {
        LoginActions.initializePage(di.login.initialState);
        LoginService.setConfigs(di.login.initialState.context, di.login.initialState.uspLocale);
    },

    render: function() {
        return (
            <div>
            <LoginContainer />
            <FooterElements config={_footerConfig}/>
            </div>
        );
    }
});

export default LoginApp;

React.render(
<LoginApp />,
    document.getElementById('loginApp')
);