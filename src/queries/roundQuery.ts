import { fetchRounds, queryClient } from '@/libs/http';
import { roundKeys } from '@/queries/queryKeys';
import { useQuery } from '@tanstack/react-query';

export const roundQuery = {
  fetchRoundsQuery: async () =>
    await queryClient.fetchQuery({
      queryKey: roundKeys.all,
      queryFn: ({ signal }) => fetchRounds({ signal }),
    }),
  useGetRounds: () => {
    return useQuery({
      queryKey: roundKeys.all,
      queryFn: ({ signal }) => fetchRounds({ signal }),
    });
  },
};
