import { FormCard } from '@/app/(auth)/components/formCard';
import { RegForm } from '@/app/(auth)/components/regForm';

export default function Page() {
  return (
    <FormCard title="Sign Up">
      <RegForm mode="signUp"/>
    </FormCard>
  );
}