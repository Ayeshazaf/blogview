import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = "019e472c1fe440f999fe3a6a771a3b3d";
const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${apiKey}`;    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ articles: [], error: "Failed to fetch news" }, { status: 500 });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ articles: [], error: "Unexpected error" }, { status: 500 });
  }
}