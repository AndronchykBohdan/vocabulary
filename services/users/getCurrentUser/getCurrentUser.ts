import { axiosInstance } from '@/configs/axios';
import { IUserDtoResponse } from '@/shared/interfaces/api/user/userDto.response.interface';

const getCurrentUser = async (): Promise<IUserDtoResponse> => {
    const response =  await axiosInstance.get<IUserDtoResponse>('/users');
    return response.data
};

export { getCurrentUser };