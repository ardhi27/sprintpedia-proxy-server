// src/app/api/auth/ardhi/token/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    const client = axios.create({
      baseURL: "https://sprintpedia.id",
      withCredentials: true,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    // GET halaman login
    const loginPage = await client.get("/auth/login");
    const cookies: string[] = loginPage.headers["set-cookie"] || [];

    // parse csrf_token dari hidden input
    const $ = cheerio.load(loginPage.data);
    const csrfToken = $("input[name=csrf_token]").val();

    if (!csrfToken) {
      return NextResponse.json(
        { error: "csrf_token not found" },
        { status: 400 }
      );
    }

    // simpan cookies supaya bisa dipakai di POST login
    const cookieString = cookies.map((c) => c.split(";")[0]).join("; ");

    return NextResponse.json(
      { csrf_token: csrfToken, cookie: cookieString },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to get csrf_token" },
      { status: 500 }
    );
  }
}
