import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const csrf = cookieStore.get("csrf_cookie");
  console.log("CSRF token di browser:", csrf);
  return csrf ? new Response(csrf.value) : new Response("CSRF not found");
}
