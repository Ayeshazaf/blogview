import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = "019e472c1fe440f999fe3a6a771a3b3d";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return NextResponse.json(data);
}