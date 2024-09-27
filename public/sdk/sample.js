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
<<<<<<< HEAD
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjczNDIxMjIsImlhdCI6MTcyNzM0MDMyMiwiYXV0aF90aW1lIjoxNzI3MzQwMzIyLCJqdGkiOiJjY2Q0MzY5Ny1lMTAxLTQ3NGYtOWVjNC04Nzk2NmI0YjM4OWMiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjdhNjI1ZDMzLWUxMWMtNDg5Mi1iYzkyLWI1NGIzZDE3YjI3YyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.QKewLc3chw0aFIztJBPZD2eqpikjGIkgaVTqw6IqP2Lh9-o6i1ZToPzPsrALM5Ji4ukUkRa6DEwOXJf6HjcLiMtSagvhxnJTKm_jx7KYqG9tqUKBt_UMag-lGi7F_7hJu2N5zO-tTnwgg8ela1vk3PxDE870adFIGLltiY3o22bzQ-js-prSWktqwmj55KFK25dLG_bRfQ0VhCrF1D7J7RMYZIyS3pt-rt9XkvNyeRZ9sTRmfeuoAhAGPFej1TNVi7tqhDlkyVgkLPUYVgylmsYVZUbSgablGjFJffjdpn5BCY0-F45aJFMkT5WuaXdFPI5esKaN-YbtsyNmCzmatQ';
=======
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjczNDE0OTMsImlhdCI6MTcyNzMzOTY5MywiYXV0aF90aW1lIjoxNzI3MzM5NjkzLCJqdGkiOiIzOWNlOGFjZC0yNTA3LTQ5YWItOGNmYi05OTU2ZTFhZmJkNjAiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjVjNjdhOTYxLWFlMDYtNGExOS1hYzkzLThiNDE0NTg1YzUwZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.awYiR6KCOnyAVG0a8oWEgqMXRX19WVEEPQoEgAF3UKCyrr5lO5-F_wQeD5J8VRgeGglD15WQeZsVKsf1-keUj6DgCpj1Je0GiXGz8HdoVB7lDsWJQScxvtQnsolgTAnfpptApUU64ePMgSJGL2rxZ7IDlavmKFt1Gkaxhkj2i12XVArDOV4Sk9VeF51xNEYv4nKZJhD1eHNC1i5i3gJa_nVNoHQtRJQwXz4g3UgXeIIg93LEJ0mvcwD56guJsfXyPODMXA6AW9ahlUXrMXWsqLdIrOeasSsnGvoGFLMNNXAHjgmbaZQFhld_IN3F16hsg2xRQuc1Nsz3FBxF9L8Khg';
>>>>>>> 80558b1cb3bff6eea7855965cce3f9fbe14e603b

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
