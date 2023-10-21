import {firebaseAdmin} from "@/firebaseAdmin";
import {type NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  const auth = firebaseAdmin.auth();

  // Tokenの有効期限
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5日

  const json = await req.json();
  // セッションCookieを作成するためのIDを取得
  const id = (json.id || "").toString();

  // Cookieに保存するセッションIDを作成する
  const sessionCookie = await auth.createSessionCookie(id, {expiresIn});

  // Cookieのオプション
  const options = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    path: "/",
  };

  const res = NextResponse.json({status: "success"})
  // CookieにセッションIDを保存する
  res.cookies.set("session", sessionCookie, options);

  return res;
}