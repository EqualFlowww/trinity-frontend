// // javascript here

// window.common.init(() => {
//   window.common.auth.login(
//     () => {
//       // login success
//       console.log('login success');
//     },
//     () => {
//       // login failed
//       console.error('login error');
//     }
//   );
// });

window.common = window.common || {};
window.common.auth = {};
window.common.env = {};

window.common.env.url = 'https://trinity.dev.local';
window.common.env.endpoint = 'trinity.dev.local';

window.common.auth.username = 'admin';
window.common.auth.userInfo = {
  isLogin: true,
};
// window.common.auth.accessToken =
//   'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjQ3NTA1NTQsImlhdCI6MTcyNDc0ODc1NCwiYXV0aF90aW1lIjoxNzI0NzQ4NzU0LCJqdGkiOiI3NzViZmY2Yi02YmQwLTRkMDctYjhkYi02YzllODZmNmU1OWQiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjAxYzViMGIwLTFkMDctNGFiZC05OWUxLWE5ZDY5YzRjZjU1MSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.OdZc1N6GUkW8MauGWTUURI0FYlFDtvwKjUjGm__QqrKbEPjQOM8SXIWFnAfHh3O6cRGoWUiexEY3UaaP42GJcyEnHOVcI8Xkx6OJ_Tn0DLG3BMmfPsi7vs-cKzd8MEKGOrBshVDrBx7NL6HnFfsRDpFbfscidBrfVVO0vKWdVhMVogggVyfH3e50-EA_ca5dhPfH6xWmzdq94WS2WgH9VLBOPpd__XBxrNVclbPvhhHwpJjbBgQFbtGjukPK5V5plxwPPwdzcmxTt0zunmCvtGueTfuv9pA6_fHdMOu-Krc9fur8WSaaIVwSbUTR0YY8JuUWq4ENcFY_TvzXDhOYlw';
window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
