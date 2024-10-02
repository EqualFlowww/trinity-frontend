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
<<<<<<< HEAD
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3Mjc4NjE5NDUsImlhdCI6MTcyNzg2MDE0NSwiYXV0aF90aW1lIjoxNzI3ODYwMTQ1LCJqdGkiOiIwMWYxM2U4NC00YjdjLTRkMWYtOTYxYy0zZDhkODBmNDllYzUiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImQ2ZTI3MDZhLTZmMjEtNDU4Ni1iNGM0LTRhYThiY2IwNzUxMyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.OvO5Z2cHQdTXvuYXiwIyXy6KcFbLBVvsmvWO_paTdZtxlxuIZHaYeFC3YpxFFAVCcRlbNpw6Bi0VXpilvxlDafP3DNPHz6qbs9NwwJTuUiF2ClafwUxtCQhBVsaMXkE9qa2-WMeGggQ1-dKoZFQdpcgnt2_VGLzYBwZHpXIRfq6pQ-wRik2XIWTNSU9kzmxKhee8xMGtIzIKnyVUdstEfcSZu4CddXdYcgni8ocIYY8mY0r8RgUrVNFXWyza1ejobVReJDnz00O6w1nl7WdwaWfFT2pEqv8SiuIDtRIXaRvxbtA6f-XIEoZ-kwaVZwL-mWBVUlmRAQOMM0jVjq-CDg';
=======
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3Mjc4MzMwMDksImlhdCI6MTcyNzgzMTIwOSwiYXV0aF90aW1lIjoxNzI3ODMxMjA4LCJqdGkiOiJiMjRlNDI1MS1jNDEyLTRkYTktYjAzMC0zYTM1YTAzNjZkOTciLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImQ2NmRiYmNjLTE2N2QtNGIwOS1iOWY2LWQ2OGFkNGIxMTA3YyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.Pa6J1Q907hnvjSI8hAyyDnjqjaPW4oJr3VdM-ckjqzBffkNnOeFA6EOw7HEq0Sc49NsnnQa22LMkPTCwJW_j_sBQsxX0DK6tLjtta3cgvCOGjxj9yjaZ7g_0PCEqRSUUHwvNqkkMJrhHeqkl-ZLcupfFtQSzEJ91gY1BuNxGQbiEGISS0HYofTHw4lZipfFGY81iRDEVHPK6VixgnY5tQf8THYxkev0AWBAOS9msUUowTAOXh78Na4hJDy5WmdQu0QKoJS5C7L66atiwlfxmfxaLarPKz9AwLB6W2STQHUhTwx5aezpMMWCQ028p6iL7wTr6bOQfcaW6PbhhusyhLA';
>>>>>>> e1121349dcba3c5020e743b03dd72ba6f8ec0741

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
