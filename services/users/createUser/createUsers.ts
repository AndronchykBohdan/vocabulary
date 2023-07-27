import { IUserDtoRequest } from '@/shared/interfaces/api/user/userDto.request.interface';
import { axiosInstance } from '@/configs/axios';

const createUsers = async (data: IUserDtoRequest) => {
  try {
    const response =  await axiosInstance.post<IUserDtoRequest>('/users', data);
    return response.data
  } catch (e) {
    return e;
  }

};

export { createUsers };