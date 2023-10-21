import {firebaseAdmin} from "@/firebaseAdmin"; // この後に実装するファイル
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {cache} from "react";
import {LogoutButton} from "@/components/LogoutButton";

const getUser = cache(async (session: string) => {
  return await firebaseAdmin
    .auth()
    .verifySessionCookie(session, true)
    .catch(() => null);
})

const DashboardPage = async () => {
  const session = cookies().get("session")?.value ?? "";

  // セッションIDを検証して、認証情報を取得する
  const user = await getUser(session)

  if (!user) {
    return redirect("/login")
  }
  return (
    <div>
      <h1>Dashboard Pages</h1>
      <h2>email: {user.email}</h2>
      <LogoutButton/>
    </div>
  );
};

export default DashboardPage;