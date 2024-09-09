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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjU4NjkwNDksImlhdCI6MTcyNTg2NzI0OSwiYXV0aF90aW1lIjoxNzI1ODY3MjQ5LCJqdGkiOiIwMDRlNjEwMi05ZmE0LTQzODctODA3MC1lMThjOWZhM2FmMDUiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImI1N2JmNDk3LTU2NjAtNGZlNy1hM2Q4LWVjNTMwYjIzZmM5MCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.Rbw-jaZvJ9O0_hLGd2f_mDMIyBDX-UARlZaHk7hBu5XXBHg7cvKqR91btRw_tljRXU1rwJ0ZDjNG16ClxLivXHqltfdiiL6ANoZMT52939Sk85r4xpQIY1knEd2JgDNP3-pwFHu4D8ILG3epUz8SO1-g6DijeZVHwvCwUuKMh9H5MQ_G90X9BDsj7dx-ueFpvF5SRo-fVXG2j1jjAk5mGbAMhqA79ivYvVebmQyu9QWz4SPpAsGH4BqpNGHbmD7F53d3saW5LLmB3T1-bmS6z2RxstodhCNF16M7lKBla1raHvnICf2NzomvMaow9HatapPdwrJ_yxQ2oWPsggKkJw';
window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
