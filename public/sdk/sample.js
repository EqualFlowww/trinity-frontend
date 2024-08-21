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
window.common.env.endpoint = 'trinity.eqpls.net';

window.common.auth.accessToken =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJreXdzeEVrc3ZWT296RDR4dmZlY2I0amF3R2tyYTlicm5hU1Y4cHNMdFdvIn0.eyJleHAiOjE3MjQyMzE0NjcsImlhdCI6MTcyNDIyOTY2NywiYXV0aF90aW1lIjoxNzI0MjI5NjY3LCJqdGkiOiI4NjgyNTRiNC0zNjJjLTQwZjYtYjhkNC03NzJiNjA1Y2E1MzYiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZXFwbHMubmV0L2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjZiOGVhZjEtZTkxZi00MjZiLTlkNzctZmE5YmYzMzE0YTk5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImZjNzg5ZTdiLWRhZjgtNDQ5NC05ZTdmLWVkNzM4ZTQwZWMxZCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgb3BlbmlkLWNsaWVudC1zY29wZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmVxcGxzLm5ldCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.RljwSSdKKTAwk8_esV6e9lJTVPyS6vS90MpQs8FOSHF9QlomCUCTN7L5mA88ZrDUcV-0U3zvGbUzRdadZiUj1rVycU5BLbfttMggPx3s-DK7GyFnzbTRbxX523Ci_JHU1VrqPXOytfK5Kr6UzCP8eh49xmUFeRJZWiRKqNRLV6uagy4cIpWxM2KUriKpUnRhz0L94y6ooWtbKCTr7P3hn8ElOfwYrVhjNp-WI035fGBzsd853UXmhNCf9g5Z3h0cqwUOf_4GaoGiS2cRTQu6ujScK7DhyNOSlaF8nuQnb-0OrlMohF-dSc62nF5x8z67UxbdAj_FQniSfp9VDRpL9w';
window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
