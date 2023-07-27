import { useQuery } from 'react-query';

import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { IVocabulariesDto } from '@/shared/interfaces/api/vocabularies/vocabularies.dto.intreface';
import { getVocabularies } from '@/services/vocabularies';

const useGetVocabularies = () => {
  return useQuery<IVocabulariesDto[]>(EApiKeys.vocabularies, getVocabularies);
};

export { useGetVocabularies };