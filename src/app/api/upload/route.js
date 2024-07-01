const { NextResponse } = require("next/server");
import fs from "fs";

export async function POST(req) {
    const formData = await req.formData();
    const response = await fetch("https://api.chatpdf.com/v1/sources/add-file", {
        method: "POST",
        body: formData,
        headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY
        }
    });

    const data = await response.json();


    return NextResponse.json({success: true, data: data});

}
