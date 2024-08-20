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

window.common.env.url = 'https://trinity.eqpls.net';

window.common.auth.accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkOHlPemhaSkJHU0ZUU3FBY2ZEYmpCM0pzOXpXSjFRRGJtTEhKclVEWVpRIn0.eyJleHAiOjE3MjQxNjU3NzksImlhdCI6MTcyNDE2Mzk3OSwiYXV0aF90aW1lIjoxNzI0MTYzOTc5LCJqdGkiOiIxZTdhZjhjYi04ZmYzLTQ2N2EtYmU1ZC04NmRmNTQ2ZjM2ZjAiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZXFwbHMubmV0L2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjZhNDM1NTgtNTU5MC00ODliLTg3ZWItZTNkNWUxY2JiYjFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImVlMTYwODcyLTQ2ZjktNDBkZi05MzkyLWJiZTMwZTFmOWIyNyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgb3BlbmlkLWNsaWVudC1zY29wZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmVxcGxzLm5ldCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.JJKkaHfZ5UX64FnhPlF8p_NAqeS-z4r9RMoFIf508L74uwg-gWg88XPWykic6bB6PxuUz1XYfvdcF7bez3AY_ss5VsqALWTMhClxbvVSUlui0tJcLzF22OnO-xmg6Eha_ejQ25RNI227ODPXPe2JjyokwoivRCQbYCSpKDcnNw3g3bmnx-ewUg2045KmXCQn5EoOYPnHyacH4tqzXuJNI9SrbpgvSAKM9J9Wr4CrwS28u_lCGPGpernIJLGEzOYMHiLkOogmTAIHa-HX6AQOmpTLpBPKw7RACr3-4dCxm_8WxD3FfNyVVPg_6oZEZdrmK9YeKJUDuoZ5Z46HlGqTNA';

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
