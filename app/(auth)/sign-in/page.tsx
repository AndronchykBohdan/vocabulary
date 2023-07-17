import { FormCard } from '@/app/(auth)/components/formCard';
import { RegForm } from '@/app/(auth)/components/regForm';

export default function Page() {
  return (
    <FormCard title="Sign In">
      <RegForm mode="signIn"/>
    </FormCard>
  );
}