import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Log the notification (in production, replace with email service like Resend, SendGrid, etc.)
    console.log("=== NOVO ESPECIALISTA CADASTRADO ===");
    console.log("Nome:", data.name);
    console.log("Email:", data.email);
    console.log("Especialidade:", data.specialty);
    console.log("Registro:", data.registration);
    console.log("WhatsApp:", data.whatsapp);
    console.log("Cidade:", data.city);
    console.log("LinkedIn:", data.linkedin);
    console.log("Atendimento:", data.atendimento);
    console.log("Mensagem:", data.message);
    console.log("Data:", new Date().toISOString());
    console.log("====================================");

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Filhos Cuidadores <noreply@filhocuidador.vercel.app>",
    //   to: "seu-email@gmail.com",
    //   subject: `Novo especialista: ${data.name}`,
    //   html: `<h1>Novo especialista cadastrado!</h1>
    //          <p><strong>Nome:</strong> ${data.name}</p>
    //          <p><strong>Email:</strong> ${data.email}</p>
    //          <p><strong>Especialidade:</strong> ${data.specialty}</p>
    //          <p><strong>Registro:</strong> ${data.registration}</p>
    //          <p><strong>WhatsApp:</strong> ${data.whatsapp}</p>
    //          <p><strong>Cidade:</strong> ${data.city}</p>
    //          <p><strong>LinkedIn:</strong> ${data.linkedin}</p>
    //          <p><strong>Atendimento:</strong> ${data.atendimento}</p>
    //          <p><strong>Mensagem:</strong> ${data.message}</p>`,
    // });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Notification error:", err);
    // Don't fail the main request if notification fails
    return NextResponse.json({ success: true });
  }
}
