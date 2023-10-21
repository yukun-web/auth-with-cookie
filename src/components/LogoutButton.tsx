"use client";

import {logout} from "@/utils";
import {useRouter} from "next/navigation";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await logout(); // ログアウトさせる
    router.replace("/login"); // ログインページへ遷移させる
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}