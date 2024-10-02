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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3Mjc3NzUyNzAsImlhdCI6MTcyNzc3MzQ3MCwiYXV0aF90aW1lIjoxNzI3NzczNDY2LCJqdGkiOiI1ZWY4Mjk4My1iMmI3LTQ5NTAtODU4Yy01Y2RhY2VjMmJjZTYiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjQ4OWU3YTQ1LThhZjYtNDg5Yy05MWI5LTY5MjM2ZDI2OTU5MyIsImFjciI6IjAiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.mWqKdrwLvdJp_Z31z5PLZ0F0iHz2nl_SuApQLI6GdpgEORKRYZuAtFhNzgqeUmdQAvucZaghYAfGHABYPg2-U7E51I5sQcQRmmBpe0lX4YfHBGftsX6Ml8AJ_w35ikJw0mcPrCvPCI_xElgKSa1sYmw2IydON82VEayvxtwtcidZiHtRWe9G1StidC7ThsgJV3z66PBB0TAxOsXI8ubVJHD3BK3PAEU8swRLJlkmkLrOKvCimDjxykCwcdWRyaakPVjEVHYywIfMSQfB1a6NU9aRNgnP_TiQKa0SoS_JpywTfCyXzvu-b3sXAeU-iYTbr5MbgRYCh7SHFyheEpdI6A';

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
