// import { queryClient } from '@/libs/http';
// import { useEffect, useRef } from 'react';

// const MAX_RETRY_COUNT = 5;
// const MIN_INTERVAL = 1000;
// const MAX_JITTER = 200;

// const ONERROR_CODE = 4000;
// const NORMAL_CODE = 1000;

// export const withLogging = ({ msg, type }: { msg: string; type: string }) => {
//   if (process.env.NODE_ENV !== 'production') {
//     switch (type) {
//       case 'error':
//         console.error(msg);
//         break;
//       case 'info':
//         console.info(msg);
//         break;
//       case 'log':
//         console.log(msg);
//         break;
//       default:
//         console.log(msg);
//     }
//   }
// };

// const buildUrl = () =>
//   `wss://${window.common.env.endpoint}/router/websocket/admin?org=trinity&token=${window.common.auth.accessToken}`;
// const isWebSocketOpen = (wsInstance: WebSocket) =>
//   wsInstance && wsInstance.readyState === WebSocket.OPEN;

// export const useWebSocket = () => {
//   const isMounted = useRef(true);
//   const retryCount = useRef(0);
//   const ws = useRef<null | WebSocket>(null);

//   // const sendData = (data: any) => {
//   //   const wsInstance = ws.current;
//   //   if (wsInstance && wsInstance.readyState === WebSocket.OPEN) {
//   //     wsInstance.send(JSON.stringify(data));
//   //   } else {
//   //     console.warn(
//   //       'WebSocket이 연결되지 않았습니다. 메시지를 전송할 수 없습니다.'
//   //     );
//   //   }
//   // };
//   //초기화
//   useEffect(() => {
//     retryCount.current = 0;
//     isMounted.current = true;
//   }, []);

//   useEffect(() => {
//     ws.current = new WebSocket(buildUrl());

//     const setupWebSocket = (wsInstance: WebSocket) => {
//       wsInstance.onopen = () => {
//         retryCount.current = 0; // websocket 첫 연결시 setting
//         withLogging({
//           msg: 'WebSocket 연결',
//           type: 'info',
//         });
//       };

//       wsInstance.onmessage = (event) => {
//         if (isMounted.current && isWebSocketOpen(wsInstance)) {
//           const resData = JSON.parse(event.data);
//           const data = resData.v;
//           console.log('WebSocket 데이터 수신:', data);
//           const str = data.sref;
//           const type = str.split('.').pop();
//           console.log('type:', type);
//           if (type === 'Message') {
//             console.log('Message start');
//             console.log(data.roomId);
//             queryClient.setQueryData(['chatRoom', data.roomId], (prev: any) => {
//               console.log(prev);
//               console.log(data);
//               return [...prev, data];
//             });
//             console.log(queryClient.getQueryData(['chatRoom', data.roomId]));
//             console.log('Message update');
//           } else if (type === 'Cart') {
//             console.log('Cart start');
//             queryClient.setQueryData(['carts'], (prev: any) => {
//               return prev.map((cart: any) =>
//                 cart.id !== data.id ? cart : data
//               );
//             });
//             console.log(queryClient.getQueryData(['carts']));
//             console.log('Cart end');
//           }
//         }
//       };

//       wsInstance.onerror = (event) => {
//         if (isMounted.current) {
//           withLogging({ msg: `WebSocket Error:${event}`, type: 'error' });
//           wsInstance.close(ONERROR_CODE); //명시적 close 실행 with custom code
//         }
//       };

//       wsInstance.onclose = (event) => {
//         if (isMounted.current) {
//           withLogging({
//             msg: `WebSocket closed:${(event.code, event.reason)}`,
//             type: 'info',
//           });

//           //retry
//           if (event.code !== NORMAL_CODE) {
//             if (event.code === ONERROR_CODE) {
//               // Exponential Backoff
//               let interval = MIN_INTERVAL * Math.pow(2, retryCount.current);

//               // Adding Jitter(random)
//               const jitter =
//                 Math.floor(Math.random() * (MAX_JITTER * 2 + 1)) - MAX_JITTER;
//               interval += jitter;

//               if (retryCount.current < MAX_RETRY_COUNT) {
//                 setTimeout(() => {
//                   ws.current = new WebSocket(buildUrl());
//                   setupWebSocket(ws.current);
//                   retryCount.current++;
//                 }, interval);
//               }
//             }
//           }
//         }
//       };
//     };

//     setupWebSocket(ws.current);

//     return () => {
//       if (ws.current && isWebSocketOpen(ws.current)) {
//         console.info('WebSocket 끊김');
//         isMounted.current = false;
//         ws.current.close();
//       }
//     };
//   }, []);

//   return { ws: ws.current };
// };
