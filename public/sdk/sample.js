// // javascript here

window.common.init(() => {
  window.common.auth.login(
    () => {
      // login success
      console.log('login success');
    },
    () => {
      // login failed
      console.error('login error');
    }
  );
});

// window.common = window.common || {};
// window.common.auth = {};
// window.common.env = {};

// window.common.env.url = 'https://trinity.eqpls.net';
// window.common.env.endpoint = 'trinity.eqpls.net';

// window.common.auth.accessToken =
//   'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJreXdzeEVrc3ZWT296RDR4dmZlY2I0amF3R2tyYTlicm5hU1Y4cHNMdFdvIn0.eyJleHAiOjE3MjQyMzY3MjIsImlhdCI6MTcyNDIzNDkyMiwiYXV0aF90aW1lIjoxNzI0MjM0OTIxLCJqdGkiOiIyNjg2ZDQxMy05MWNiLTRkNzktOTNiMi04ZjJjYWVhNTJhMDgiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZXFwbHMubmV0L2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjZiOGVhZjEtZTkxZi00MjZiLTlkNzctZmE5YmYzMzE0YTk5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjJjNWY2ODQ3LWI0ZGUtNDdjYi1hN2E2LTg5YTEyZjY2ZWViMSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgb3BlbmlkLWNsaWVudC1zY29wZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmVxcGxzLm5ldCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.FNQvAAyVIVU8eeteiIeE8gdaLPLaCWdLaNESbQff6TrOYDNDYOKhivr22_SbrMKnjzvQF3UREFAAk1VvL4Hah4rD9E9FXx_7tF_vKHZJGZ8jo33GBVASoDVWGgsUZr_072GSUQb1kaWs8Fv7lgTXB0lGEP84BLdUPU5NKT5jomoWa0LW6cnv2IaWCO7SrhAUVsRqt69Jg6ksEI4gEFvNKGR2Sqtsp99EQ1B46qC4wskiYbITkLy7qtHUC4bl6drU1FlBsnav0dfZLWbkLlErZfF2bEGTukczz9_aEij0w75q_YPPZx2WvXfj7DrG-yD1PpL92av3exfI9czkLMA2zg';
// window.common.auth.apiHeaders = {
//   'Content-Type': 'application/json; charset=utf-8',
//   Accept: 'application/json; charset=utf-8',
//   Authorization: `Bearer ${window.common.auth.accessToken}`,
// };
