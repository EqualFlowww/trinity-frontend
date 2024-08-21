import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

interface FetchCartParams {
  signal?: AbortSignal;
  searchTerm?: string;
}

export const fetchData = async (url: string, options?: RequestInit) => {
  try {
    const response = await fetch(
      process.env.NODE_ENV !== 'production' ? `/dev${url}` : url,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
};

export async function fetchCarts({ signal }: FetchCartParams) {
  let url = '/uerp/v1/demo/device/cart?$archive&$size=100';

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

export async function fetchRounds({ signal }: FetchCartParams) {
  let url = '/uerp/v1/demo/operation/round?$archive&$size=100';

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

export async function fetchChatRooms({ signal, searchTerm }: FetchCartParams) {
  let url = `/uerp/v1/demo/chat/room?$archive&$filter=participants:${searchTerm}&$size=100`;

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

export async function fetchChatRoomMessages({
  signal,
  searchTerm,
}: FetchCartParams) {
  let url = `/uerp/v1/demo/chat/message?$archive&$filter=chatRoomId:${searchTerm}&$size=100`;

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

export async function fetchUnreadMessages({
  signal,
  searchTerm,
}: FetchCartParams) {
  let url = `/uerp/v1/demo/chat/message?$archive&$filter=unreadUsernames:${searchTerm}&$size=100`;

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

export async function fetchAccounts({ signal }: FetchCartParams) {
  let url = `/uerp/v1/common/auth/account?$archive$f=username&$f=displayName&$size=100`;

  const data = await fetchData(url, {
    signal: signal,
    headers: window.common.auth.apiHeaders,
  });

  return data;
}

// export async function createNewEvent(eventData) {
//   const response = await fetch(`http://localhost:3000/events`, {
//     method: 'POST',
//     body: JSON.stringify(eventData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while creating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }

// export async function fetchSelectableImages({ signal }) {
//   const response = await fetch(`http://localhost:3000/events/images`, {
//     signal,
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the images');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { images } = await response.json();

//   return images;
// }

// export async function fetchEvent({ id, signal }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, {
//     signal,
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while fetching the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   const { event } = await response.json();

//   return event;
// }

// export async function deleteEvent({ id }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, {
//     method: 'DELETE',
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while deleting the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }

// export async function updateEvent({ id, event }) {
//   const response = await fetch(`http://localhost:3000/events/${id}`, {
//     method: 'PUT',
//     body: JSON.stringify({ event }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!response.ok) {
//     const error = new Error('An error occurred while updating the event');
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }

//   return response.json();
// }
