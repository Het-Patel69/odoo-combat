import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const supabase = createClient();
  const payload = await request.json();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: payload.email as string,
    password: payload.password as string,
  };

  const { error, data: userData } = await supabase.auth.signUp(data);

  if (userData.user) {
    return NextResponse.redirect(`${requestUrl.origin}/admin`);
  }

  if (error) {
    if (error.status === 422) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }
    console.log(error);
    return NextResponse.json(
      { error: "invalid username or password" },
      { status: 400 }
    );
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}
