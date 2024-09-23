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
window.common.auth.accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjcwODgyNjMsImlhdCI6MTcyNzA4NjQ2MywiYXV0aF90aW1lIjoxNzI3MDgzOTU0LCJqdGkiOiJiN2JjODI0OC0xYzVlLTRhNzgtYTE4Ny1kODVkZmVkZGM2MWIiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjcyNjAzYTU5LTk2MzEtNGUwMy1iYTc3LTAzODc0MTQ5NmFiZiIsImFjciI6IjAiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.UABEw13WLel1RauAGdpLRyrFIOJcjDpbp5_N9x2SkFV-X1Tuw6GntXzLmj8SmQOs3nO5d8N-nfR2ufigXzo2MDDDs8LFUDjgjTYWUp0DmUQWbQrFi4xVmTSE9sW_jF5Ve2aFwDXyB5MjsHjKy_Cl6sLJMcScb-NAurxkiJ-9neR4l3jaJm_wbNWoHwioXYVcIxWSeTkVp2Ilvj2f0mqIwidWpE5Wm42AZ_DCnPGFEwF3Sx2XvTn6987R5XN4OyKoiYFDKbUUGJDGIa_pHyxfSPr6JAnQp3zR0lfTaIoa3HaqUzFvmylUk4gaG3fPMNlBrv1nmwiMvFQIcIEJ_cdYsA';

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
