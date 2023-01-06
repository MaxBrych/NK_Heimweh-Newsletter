import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "./Account";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function RegisterPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  return (
    <div className="min-h-screen md:flex">
      <div className="w-full px-12 ">
        <h1 className="text-4xl text-black">HEIMWEH Registrieren</h1>
        {!session ? (
          <Auth
            providers={["google", "apple", "twitter"]}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="light"
          />
        ) : (
          <Account session={session} />
        )}
      </div>
      <div className="flex-col items-center justify-center invisible w-full h-auto align-middle md:visible bg-slate-200">
        <h1 className="text-4xl ">Kommentare von Lesern...</h1>
      </div>
    </div>
  );
}
