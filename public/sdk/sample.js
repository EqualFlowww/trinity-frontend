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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjYyMTc2MTgsImlhdCI6MTcyNjIxNTgxOCwiYXV0aF90aW1lIjoxNzI2MjE1ODE2LCJqdGkiOiI2MTA3OTE5ZC00NWEwLTRmMzgtYTE1YS1mMDA4MDRlZDJjNzMiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjdkODRlOWJiLWI1NTItNGYzNS1hYjQ1LTJlMmVlMDQ4MTg3ZiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.SdSvcvBtThqN3Aqb2wja2Auujr4olVSeiIokYDP2kdp_GrPRshNVB57yShR4O-ddJ_ZmKN3J1nMwA4ZinyxXl-oeWfV8OklukQkNzzqbyZwD1jDIn71syGx6hK28At9Re6gv0NR21TaWDESgG9WpO32d6XbP4hBaJCAn1_qYqmax17oPrjUhvNl0N0-5hLPtCQf0iN91fJkRkUidRgQqLw3ZpeS_aBoJ42hj2IgR9p42k5lS0yvsGFv8UmTYgX3-Z4K4ZSMz7gzDACu9OU3gde6ivtc84fW0meH6icS9fX5zh0zGs__VRwUBc_xvlGz0qxTU3Qf0q14hWZM6Zqo2YA';
=======
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjYyMTA3MTMsImlhdCI6MTcyNjIwODkxMywiYXV0aF90aW1lIjoxNzI2MjA4OTEzLCJqdGkiOiIxY2Q4MjcxOS04NDdhLTQ3N2QtOTFmZi1iZDU1MWY2OGUwMGIiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjM1ZTJlMjQ0LTUwNGItNGUyMi04OTMzLWRhY2FmODFmMmQ0YiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.E4XUfO1cXCwToqwxwvKAkcy8dAa65UBcGQKBcljS-2UL_CCwxSzr23Sw0gLvWxJFtayp2f5mq0Q7BjserzlisRVn27WMyQ9c9khvebXCRCxmI78AzhoG373QS79379NRHYZp5VkfLj8BvEGte2m8TkUtc4qCBZHhUMY5HhP2nIVnhPqi4kk1pALuOJorRcJfB8I87JWZi9PmgzA7Nu3sNx97F0ehK3vW8LF9QseI-gBL_BxEgmM-r0Lq7Ckd7pQI6jeMZKbOEQ6Gtb1h2H43VFaiHDpsBSiM3VWPGX7BRMQEm6uPMu4XoUaFqO3U9aABZpmc1gj6sqVqECv-UPAbUA';
>>>>>>> aa49460 (Modify)

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
