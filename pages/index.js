import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Account from "../components/Account";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="flex min-h-screen">
      <div className="w-full ">
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
      <div className="w-full bg-slate-200"></div>
    </div>
  );
};

export default Home;
