import { NextRequest, NextResponse } from "next/server";
import http from "@/shared/libs/http";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Username tidak boleh kosong" },
        { status: 400 }
      );
    }

    const cookie = req.headers.get("cookie") || "";

    //The response will return in array buffer
    const response = await http.get(
      `/page/instagram_tools?username=${username}`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "X-Requested-With": "XMLHttpRequest",
          Referer: "https://sprintpedia.id/page/instagram_tools",
          Origin: "https://sprintpedia.id",
          Cookie: cookie,
        },
        responseType: "arraybuffer",
        decompress: true,
      }
    );

    //Parsing from array buffer to JSON format
    const decodedData = Buffer.from(response.data).toString("utf-8");
    const jsonData = JSON.parse(decodedData);

    console.log("DATA : ", jsonData);
    return NextResponse.json(jsonData, { status: 200 });
  } catch (err: any) {
    console.error("ERR:", err.response?.data || err.message);
    return NextResponse.json(
      { error: err.response?.data || err.message },
      { status: err.response?.status || 500 }
    );
  }
}
