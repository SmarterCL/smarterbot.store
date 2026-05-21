import TelegramAuth from '@/components/TelegramAuth';
import SupabaseAuth from '@/components/SupabaseAuth';

export default function BotLoginPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-soft">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-black tracking-tighter text-black mb-4">
                Portal de <span className="text-gradient">Acceso</span>
            </h1>
            <p className="text-secondary font-bold">Selecciona tu método de autenticación preferido.</p>
        </div>
        <div className="row justify-content-center g-5">
            <div className="col-md-6">
                <SupabaseAuth />
            </div>
            <div className="col-md-6">
                <TelegramAuth />
            </div>
        </div>
      </div>
    </div>
  );
}
