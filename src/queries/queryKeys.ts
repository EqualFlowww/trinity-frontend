export const cartKeys = {
  all: ['carts'] as const,
  // lists: () => [...cartKeys.all, 'list'] as const,
  // list: (filters: string) => [...cartKeys.lists(), { filters }] as const,
  // details: () => [...cartKeys.all, 'detail'] as const,
  // detail: (id: number) => [...cartKeys.details(), id] as const,
};

export const roundKeys = {
  all: ['rounds'] as const,
  // lists: () => [...cartKeys.all, 'list'] as const,
  // list: (filters: string) => [...cartKeys.lists(), { filters }] as const,
  // details: () => [...cartKeys.all, 'detail'] as const,
  // detail: (id: number) => [...cartKeys.details(), id] as const,
};

// const todoQueries = {
//   all: () => ['todos'],
//   lists: () => [...todoQueries.all(), 'list'],
//   list: (filters: string) =>
//     queryOptions({
//       queryKey: [...todoQueries.lists(), filters],
//       queryFn: () => fetchTodos(filters),
//     }),
//   details: () => [...todoQueries.all(), 'detail'],
//   detail: (id: number) =>
//     queryOptions({
//       queryKey: [...todoQueries.details(), id],
//       queryFn: () => fetchTodo(id),
//       staleTime: 5000,
//     }),
// }
