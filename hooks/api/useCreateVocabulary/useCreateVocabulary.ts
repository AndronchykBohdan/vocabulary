import { useMutation } from 'react-query';

import { EApiKeys } from '@/shared/enum/api/apiKeys';
import { queryClient } from '@/configs/quaryClient';
import { createVocabulary } from '@/services/vocabularies';
import { IVocabulariesRequestDto } from '@/shared/interfaces/api/vocabularies/vocabulariesRequest.dto.interface';
import { IVocabulariesDto } from '@/shared/interfaces/api/vocabularies/vocabularies.dto.intreface';

const useCreateVocabulary = () => {
  return useMutation<IVocabulariesDto, void, IVocabulariesRequestDto>(EApiKeys.vocabularies, createVocabulary, {
    onSuccess: () => {
      queryClient.invalidateQueries(EApiKeys.vocabularies);
    },
  });
};

export { useCreateVocabulary };