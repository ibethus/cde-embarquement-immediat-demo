import {
    provideKeycloak,
    createInterceptorCondition,
    IncludeBearerTokenCondition,
    INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
    withAutoRefreshToken,
    AutoRefreshTokenService,
    UserActivityService
  } from 'keycloak-angular';
import { environment } from '../environments/environment.development';
  
  const localhostCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
    urlPattern: /^.*$/i,
  });
  
  export const provideKeycloakAngular = () =>
    provideKeycloak({
      config: {
        realm: environment.realm,
        url: environment.keycloackUrl,
        clientId: environment.clientId
      },
      initOptions: {        
        onLoad: 'login-required',
        redirectUri: window.location.origin + '/'
      },
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 100000
        })
      ],
      providers: [
        AutoRefreshTokenService,
        UserActivityService,
        {
          provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
          useValue: [localhostCondition]
        }
      ]
    });