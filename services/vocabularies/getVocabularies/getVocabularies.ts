import { axiosInstance } from '@/configs/axios';
import { IVocabulariesDto } from '@/shared/interfaces/api/vocabularies/vocabularies.dto.intreface';
import { IVocabulariesResponseDto } from '@/shared/interfaces/api/vocabularies/vocabulariesResponse.dto.interface';

const getVocabularies = async (): Promise<IVocabulariesDto[]> => {
    const response =  await axiosInstance.get<IVocabulariesResponseDto>('/vocabularies');
    return response.data.data;
};

export { getVocabularies };