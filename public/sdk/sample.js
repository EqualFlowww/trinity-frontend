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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3Mjc0MjI3NTgsImlhdCI6MTcyNzQyMDk1OCwiYXV0aF90aW1lIjoxNzI3NDIwOTU4LCJqdGkiOiJlMmU5MGE2OC0yOGNjLTRhODYtYjdhMy03MDZiMDU0NzZlYWIiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImJmNTI4M2Q5LWNiNjYtNGJmMC1iNjNmLWYzNTFjNDUwMWFlNyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.S7zXMobAo5AhRM7wScbqvG7CcNajYQsrAO6Dj01teRfevvEfPOiEFpJYZy60ny4L6WsezZiJyl1X__sE3udPmN0LWYlUON8PYBRDUnmjI3VCmNRqWFp9BM6CYW3g8xTSg6hyAe5Yy2Xx9Iv3jAK2bkefnF4js5zXjPT2HiYrVoi4ffuk55skvJTxbDJWYMyx2-DhauVpolzVkpjRD65_IOp97FJt4RIn3Eid1qSwNxdUYh9XBVb9TLLPGpUY_i6shDtgvDRaep9uACS4zte6E7n8oKsLi_j_Xf4AzAQk8PJ5k2A6zSronn9nRifd5DgDj-czzyvYIY17T7Kq_Uah-A';

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
