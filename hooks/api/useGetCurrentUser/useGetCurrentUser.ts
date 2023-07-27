import { useQuery } from 'react-query';

import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { getCurrentUser } from '@/services/users/getCurrentUser/getCurrentUser';
import { IUserDtoResponse } from '@/shared/interfaces/api/user/userDto.response.interface';

const useGetCurrentUser = () => {
  return useQuery<IUserDtoResponse>(EApiKeys.users, getCurrentUser);
};

export { useGetCurrentUser };