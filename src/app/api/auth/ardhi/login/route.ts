import { NextRequest, NextResponse } from "next/server";
import FormData from "form-data";
import * as cheerio from "cheerio";
import http from "@/shared/libs/http";
import { AxiosError } from "axios";

export async function POST(req: NextRequest) {
  try {
    const loginPage = await http.get("/auth/login", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    const setCookies: string[] = loginPage.headers["set-cookie"] || [];

    if (!setCookies.length) {
      return NextResponse.json(
        { error: "No cookies received from login page" },
        { status: 400 }
      );
    }

    const cookieString = setCookies.map((c) => c.split(";")[0]).join("; ");

    const $ = cheerio.load(loginPage.data);
    const csrfToken = $('input[name="csrf_token"]').val();

    if (!csrfToken) {
      return NextResponse.json(
        { error: "CSRF token not found in form" },
        { status: 400 }
      );
    }

    console.log("csrf_token (from form):", csrfToken);

    const form = new FormData();
    form.append("csrf_token", csrfToken as string);
    form.append("username", "agungardhiyanda");
    form.append("password", "Aldhie2703");
    form.append("submit", "Login");

    const res = await http.post("/request/auth/login", form, {
      headers: {
        ...form.getHeaders(),
        Cookie: cookieString,
        Origin: "https://sprintpedia.id",
        Referer: "https://sprintpedia.id/auth/login",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json, text/javascript, */*; q=0.01",
      },
    });

    console.log("Headers dari POST login response:", res.headers);
    console.log("Status login:", res.status);
    console.log("Data login response:", res.data);
    console.log("Cookies setelah login:", res.headers["set-cookie"]);

    const newCookies: string[] = res.headers["set-cookie"] || [];

    const response = NextResponse.json(res.data, { status: res.status });

    newCookies.forEach((cookie) => {
      response.headers.append("Set-Cookie", cookie);
    });

    return response;
  } catch (err) {
    const error = err as AxiosError;
    console.error("Error:", error.response?.data || error.message);
    return NextResponse.json(
      { erroror: error.response?.data || error.message },
      { status: error.response?.status || 500 }
    );
  }
}
