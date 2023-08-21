import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, rea: NextResponse) {
	try {
		const body = await req.json();
		console.log(body);
		return new Response(JSON.stringify(body), {
			status: 200,
			statusText: "OK",
		});
	} catch (error) {
		const errorM = error as Error;
		return new Response(JSON.stringify(errorM.message), {
			status: 500,
			statusText: "Internal Server Error",
		});
	}
}
