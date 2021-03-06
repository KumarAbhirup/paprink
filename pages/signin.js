import React, { Component } from 'react'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'

import LoginPage from '../src/components/LoginPage'
import { meta } from '../src/api/meta'

class loginPage extends Component {

  render() {
    return (
      <>
        <Head>

          <script dangerouslySetInnerHTML={{__html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '${process.env.FB_LOGIN_APP_ID}',
                cookie     : true,
                xfbml      : true,
                version    : '${process.env.FB_LOGIN_APP_VERSION}'
              });
              FB.AppEvents.logPageView();  
            };
            (function(d, s, id){
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {return;}
              js = d.createElement(s); js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}}></script>

          <title>Sign up now @ {meta.title}</title>
          <meta name="robots" content="nofollow, noindex" />

          <link rel="stylesheet" type="text/css" href="/static/prebuilt/styles/bootstrap4/bootstrap.min.css" />
          <link href="/static/prebuilt/plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" href="/static/auth/css/util.css" />
          <link rel="stylesheet" type="text/css" href="/static/auth/css/main.css" />

        </Head>
        <LoginPage />
      </>
    )
  }

}

export default withRouter(loginPage)