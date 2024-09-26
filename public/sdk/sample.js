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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjcyMzEyMzQsImlhdCI6MTcyNzIyOTQzNCwiYXV0aF90aW1lIjoxNzI3MjI5NDI2LCJqdGkiOiJmN2VjYzU1OS0wOTAyLTQ1ZmItYmYxYi05NmI3NjAzMjBmOWMiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNmY2NDdmNGMtNDc3NC00MDM0LWJiODktODk3YTA3NzIwOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjMyNWIwM2FiLTVlNGItNDgwZi04Y2M1LTJlYjBkNTJmMDIwNCIsImFjciI6IjAiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3R1c2VyMSB0ZXN0dXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ0ZXN0dXNlcjEiLCJnaXZlbl9uYW1lIjoidGVzdHVzZXIxIiwiZmFtaWx5X25hbWUiOiJ0ZXN0dXNlcjEiLCJlbWFpbCI6InRlc3R1c2VyQHRyaW5pdHkuZGV2LmxvY2FsIiwicG9saWN5IjpbImFkbWluIiwidXNlciJdfQ.aH8Nw9pQsqBN_7m-bk3TJxvZz7dMQuIl2mkik4n7qzPBakVcOhr5J1QpRRnAqS7_87WVK_GhUkZVMm--4kMch37fI_U3HwKhC0sbW55HbYe6Rp3KI0lieurBzpKAHFGPyHRELsxRlu3qA_gdFIkpZBVrGU-D3O8o7jqATa-l9jR4YDhhsRb0UUL2qGskFVidDRxY_OTX1E2sqS-c4FgvLZWGIX2N3_aRyABx9c8zTCqETca_JvB1D_aa3njnMrWp4Z5yf2SgbVWWTW84-JRkWXCUkLDduBW1I4LZ1PpnT4GkXvEY0cPRtevYYbBxCRz49icn5YnX7s-XqSjt0OPN6A';
=======
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjcyMjYxNzYsImlhdCI6MTcyNzIyNDM3NiwiYXV0aF90aW1lIjoxNzI3MjI0Mzc2LCJqdGkiOiI5MjQ3YzAzMi0wZDMwLTQwZjUtODM4My00NWY1NWZjZmU3OTgiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6ImYwNTQ1NmFlLWU4MzYtNDEwMS1iOGE3LWE0MzYxOGM5YzNmOCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.rmKGOKwHHxiAPEO7_eT9UnPPaMSDvPgthP7XdXm-CU2WUoTqwYgZ9ZZ4ZocPb7mCIqybbw--WAVPqEMjBURJQVhxrJYcbob3GNJCv_9hPvMPi50z-xkU8nop32rTdC2AUe5m9HiwI73gU4dodVgZl6pa6siSxnHD94WkHTr_xSCkKck4CwDvPxqyUv9Dv5lC9O0rqOj8nrEzw2juEt9jmnSRtXyg-1GOXiQg70W8hcbvJgEgPzdH6iyYcJ-1P2zfbgXES1dk8vL-iICjkue66k3ueTLexsaaBccI29SaExBh1v8rMlT6vMO-3mzkDAZq57F8-rH2wo91bxaPmRqQiA';
>>>>>>> 1d5ab4f (Add)

window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
