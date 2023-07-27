import { useMutation } from 'react-query';

import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { createUsers } from '@/services/users';
import { queryClient } from '@/configs/quaryClient';

const useCreateUser = () => {
  return useMutation(EApiKeys.users, createUsers, {
    onSuccess: (result) => {
      queryClient.setQueryData(EApiKeys.users, result)
    },
    onError: () => {
      queryClient.invalidateQueries(EApiKeys.users)
    }
  });
};

export { useCreateUser };