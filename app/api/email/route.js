import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  
  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return NextResponse.json({ success: false, error: "Missing EmailJS configuration" }, { status: 500 });
  }

  // Masking function for logs
  const mask = (str) => str ? `${str.slice(0, 4)}...${str.slice(-4)} (${str.length} chars)` : "MISSING";

  const safeServiceId = serviceId?.trim();
  const safeTemplateId = templateId?.trim();
  const safePublicKey = publicKey?.trim();
  const safePrivateKey = privateKey?.trim();

  console.log("--- EmailJS Debug Info ---");
  console.log("Service ID:", mask(safeServiceId));
  console.log("Template ID:", mask(safeTemplateId));
  console.log("Public Key:", mask(safePublicKey));
  console.log("Private Key:", mask(safePrivateKey));

  const payload = {
    service_id: safeServiceId,
    template_id: safeTemplateId,
    user_id: safePublicKey,
    template_params: data,
  };

  if (safePrivateKey) {
    payload.accessToken = safePrivateKey;
    console.log("Using Private Key (accessToken) for authentication.");
  } else {
    console.warn("WARNING: No Private Key found. Request may vary depending on EmailJS security settings.");
  }

  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS API Error:", {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      });
      return NextResponse.json({ success: false, error: "Failed to send email: " + errorText }, { status: 500 });
    }
    
    console.log("Email sent successfully!");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Route Internal Error:", error);
    return NextResponse.json({ success: false, error: "Internal server error: " + error.message }, { status: 500 });
  }
}
