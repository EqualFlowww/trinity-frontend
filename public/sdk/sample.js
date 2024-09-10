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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI4b1EyTnd6S0c0ZEhpTDlubUl6eDdjUVJoT09OOUlWMTRoTkdrNlJfeEdBIn0.eyJleHAiOjE3MjU5NTkxMDUsImlhdCI6MTcyNTk1NzMwNSwiYXV0aF90aW1lIjoxNzI1OTU1NTQyLCJqdGkiOiI5MGE4ZDY3NC00OWE4LTQ5NTQtOWY0My01YzI2ZTAzMmI3YTIiLCJpc3MiOiJodHRwczovL3RyaW5pdHkuZGV2LmxvY2FsL2F1dGgvcmVhbG1zL3RyaW5pdHkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGQ3ODk4OTktMGMyNS00M2YyLTkyZTQtYzExNzU5ZjkyODRmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoidHJpbml0eSIsInNpZCI6IjMzZWY3MDFmLTI3YmQtNGI3Ni04MjhiLTViNDBhOTdmMmRjMyIsImFjciI6IjAiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLXRyaW5pdHkiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIG9wZW5pZC1jbGllbnQtc2NvcGUgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6ImFkbWluIGFkbWluIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiYWRtaW4iLCJmYW1pbHlfbmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0cmluaXR5LmRldi5sb2NhbCIsInBvbGljeSI6WyJhZG1pbiIsInVzZXIiXX0.cKc0Hcz46Es80WlWBZsjGTv3xtSzPVmRsfPjlN5qdFe6d2NUVqZUKsZdiNaP-W4HOTZoh_Rz-5-JBn4AyA_AhRX2Aqc7AOPBK-Q0ixflF2dpi7UWnXQ4rTvn9a7P_AW0BpUawFnwSnqHRPFxfxQqzYNT-aXybuQYqQsTlFwY2X8ukXXDXU4vslLTRDapUduAXnbyyc1Rb4wF-kKCg5Mzp2O-5i9KhxNEi3t9qS1FL5Iqf4riqPmMXVF5cWhw9_u4H7PNr4bFwFVaWxoCTuK1-fMbtKM2PuhcEojQFVgFeibHd2udmaGxySV2Ea3DnjVLm8gRbDq1JYYQ_wwYvj403w';
window.common.auth.apiHeaders = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
  Authorization: `Bearer ${window.common.auth.accessToken}`,
};
