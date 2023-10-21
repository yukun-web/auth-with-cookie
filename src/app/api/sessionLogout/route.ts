import {firebaseAdmin} from "@/firebaseAdmin";
import {type NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
  const auth = firebaseAdmin.auth();

  // Cookieに保存されているセッションIDを取得する
  const sessionId = req.cookies.get('session')?.value ?? "";

  // セッションIDから認証情報を取得する
  const decodedClaims = await auth
    .verifySessionCookie(sessionId)
    .catch(() => null)

  // 全てのセッションを無効にする
  if (decodedClaims) {
    await auth.revokeRefreshTokens(decodedClaims.sub);
  }


  // Cookieに保存されているセッションIDを削除
  const res = NextResponse.json({status: "success"});
  res.cookies.delete({
    name: "session",
    path: "/"
  });

  return res;
}