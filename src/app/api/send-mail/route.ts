import { sendMail } from "@/utils/sendmail";
import { NextRequest, NextResponse } from "next/server"; // Ensure correct imports

export async function POST(req: NextRequest) {
  try {
    const message = await req.json();
    console.log(message)
    const { subject, toEmail, otpText } = message;
    if (!subject || !toEmail || !otpText) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send the email using the sendMail function
    await sendMail(subject, toEmail, otpText);

    // Respond with success message
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        error_code: "server_error",
        message: "Something went wrong while processing your request.",
      },
      { status: 500 }
    );
  }
}
