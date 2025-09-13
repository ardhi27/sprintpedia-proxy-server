import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import * as cheerio from "cheerio";
import http from "@/shared/libs/http";

export async function GET() {
  try {
    const loginPage = await http.get("/auth/login", {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
    const cookies: string[] = loginPage.headers["set-cookie"] || [];

    const $ = cheerio.load(loginPage.data);
    const csrfToken = $("input[name=csrf_token]").val();

    if (!csrfToken) {
      return NextResponse.json(
        { error: "csrf_token not found" },
        { status: 400 }
      );
    }

    const cookieString = cookies.map((c) => c.split(";")[0]).join("; ");

    return NextResponse.json(
      { csrf_token: csrfToken, cookie: cookieString },
      { status: 200 }
    );
  } catch (err) {
    const error = err as AxiosError;
    return NextResponse.json(
      { error: error.message || "Failed to get csrf_token" },
      { status: 500 }
    );
  }
}
