import { axiosInstance } from '@/configs/axios';
import { IVocabulariesRequestDto } from '@/shared/interfaces/api/vocabularies/vocabulariesRequest.dto.interface';
import { IVocabulariesDto } from '@/shared/interfaces/api/vocabularies/vocabularies.dto.intreface';

const createVocabulary = async (data: IVocabulariesRequestDto): Promise<IVocabulariesDto> => {
  const response = await axiosInstance.post<IVocabulariesDto>('/vocabularies', data);
  return response.data;
};

export { createVocabulary };