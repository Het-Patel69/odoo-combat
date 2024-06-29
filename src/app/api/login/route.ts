import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(request: Request) {
  const supabase = createClient();
  const payload = await request.json();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: payload.email as string,
    password: payload.password as string,
  };

  const { error, data: user } = await supabase.auth.signInWithPassword(data);

  console.log(user);

  if (error) {
    console.log(error);
    redirect("/login");
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}
