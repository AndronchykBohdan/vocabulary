import { Separator } from '@/components/ui/separator';
import { useCreateVocabulary, useGetVocabularies } from '@/hooks/api';
import { Button } from '@/components/ui/button';
import PageContent from '@/app/(dashboard)/vocabularies/components/pageContent/PageContent';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Page() {
  // const { mutate } = useCreateVocabulary();
  // const { data: vocabularies, isLoading } = useGetVocabularies();

  /* const createVocabularyHandler = async () => {
    await mutate({
      name: 'Vocabulary 1',
      createdAt: new Date(),
    });
  }; */

  return (
    <>
      <h1 className="text-2xl flex-shrink-0 font-bold mb-4">
        My Vocabularies
      </h1>

      <Separator />

      <div className="mt-4 flex-grow flex-shrink-0 h-[calc(100%-8rem)] relative">
        <PageContent />
      </div>
    </>
  );
}
