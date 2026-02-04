import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { wallet, libro, precio, fecha } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "andrysrojas1976@gmail.com", // Tu correo real
        pass: "dzst tphm drey pqrc", // LAS 16 LETRAS SIN ESPACIOS
      },
    });

    const mailOptions = {
      from: `"Librería UPTA 📚" <tu_correo@gmail.com>`,
      to: "andrysrojas1976@gmail.com",
      subject: `📚 REPORTE DE VENTA: ${libro}`,
      text: `REPORTE DE VENTA - POSTGRADO UPTA\n\nLIBRO: ${libro}\nPRECIO: ${precio} $UPTA\nWALLET: ${wallet}\nFECHA: ${fecha}\n\nAdministrador: Abranham Romero`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error en servidor:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}