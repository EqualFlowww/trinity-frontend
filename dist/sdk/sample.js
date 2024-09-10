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

window.common.auth.username = 'testuser1';
window.common.auth.userInfo = {
  isLogin: true,
};
window.common.auth.accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjU5NTcwODUsImlhdCI6MTcyNTk1NTI4NSwiYXV0aF90aW1lIjoxNzI1OTUyMTgzLCJqdGkiOiI3ZDkwMjAxZi03MGEyLTQxOGMtYTExOC1hYmJlOGUyNjgwOTIiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImE1ODlhYTYxLTVjMjctNDZkYS1iMjliLTNkZTEyNDU4MGQ4MSIsImFjciI6IjAiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.D_-jMTsspkkgM0-cKJqjwnidb-LcHK5ayA_iHwh5_UrL7Eq8ZgWBtg_WrqNR3_o5dmAG75TbIWNiVJxPMsuPeSousFMVpEVtD1DP7DQYtXIF52UyGkR4meSQ0mwF00ACzXDo6eZMW3AZ1MYdumC_NzUHFzB_QzvBj8pNAbdulL1eA9Z7Z9xXyb_-3kmPEQk1eK9MzmFWhejgWqLOkekvryWr9ddxvO9aMkbpGTvDQvzlYz7_GHAvGwg-YFVuvNq49v3acU4hoFSu4dtbl_Cm_c9L1UnMFzFrdcxVO5yJbu73VHqDJDnYuAmkJMP03lDNVg-y8BikLaE7sghF5BlGcw';
window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
