import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IFormCard } from './formCard.interface';

const FormCard = (props: IFormCard) => {
  const { title, children } = props;

  return (
    <Card className="w-[380px] shadow-xl">
      <CardHeader className="justify-center items-center text-xl font-bold">
        {title}
      </CardHeader>

      <CardContent className="flex flex-col">
        {children}
      </CardContent>
    </Card>
  );
};

export { FormCard };