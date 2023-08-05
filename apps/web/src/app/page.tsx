import { LoginButton } from "../components/auth/LoginButton";
import { LogoutButton } from "../components/auth/LogoutButton";
import { getServerAuthSession } from "../lib/auth";

export default async function Page() {
  const session = await getServerAuthSession();

  return (
    <div className="m-3 text-fuchsia-50 p-3">
      {session ? (
        <div className="flex flex-col">
          <span>Logged in as: {JSON.stringify(session)}</span>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
