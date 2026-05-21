'use client';

import Script from 'next/script';

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

export default function FacebookSDK() {
  const appId = process.env.NEXT_PUBLIC_FB_APP_ID || '736630128017532';
  const apiVersion = process.env.NEXT_PUBLIC_FB_API_VERSION || 'v21.0';

  return (
    <>
      <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="afterInteractive"
      onLoad={() => {
        // Initialize Facebook SDK after script loads
        (window as any).fbAsyncInit = function () {
          (window as any).FB.init({
            appId: appId,
            cookie: true,
            xfbml: true,
            version: apiVersion,
          });
          (window as any).FB.AppEvents.logPageView();
        };
      }}
    />
    </>
  );
}

export const facebookLogin = (configId: string) => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.FB) {
      reject(new Error('Facebook SDK not loaded'));
      return;
    }

    window.FB.login(
      (response: any) => {
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(new Error('User cancelled login or did not fully authorize.'));
        }
      },
      {
        config_id: configId,
        response_type: 'code',
        override_default_response_type: true,
      }
    );
  });
};
