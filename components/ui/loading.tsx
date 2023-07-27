import { Loader2 } from 'lucide-react';
export default function Loading() {
  return (
    <div className="absolute inset-0 z-50 bg-white flex justify-center items-center">
      <Loader2
        className="animate-spin"
        size={50}
      />
    </div>
  );
}