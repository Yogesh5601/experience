import { sendMail } from "@/utils/sendmail";
import { NextRequest, NextResponse } from "next/server"; // Ensure correct imports

export async function POST(req: NextRequest) {
  try {
    const messageData = await req.json();
    const { subject, toEmail, otpText } = messageData;
    if (!subject || !toEmail || !otpText) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send the email using the sendMail function
    await sendMail(subject, toEmail, otpText);

    // Respond with success message
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        success: false,
        message: err || "Something went wrong while processing your request.",
      },
      { status: 500 }
    );
  }
}
