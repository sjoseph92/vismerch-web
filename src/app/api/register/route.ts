import { NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { insertUser } from "@/db/user";

interface RegisterBody {
  name: string;
  email: string;
  password: string;
}
export const registerBodySchema: z.ZodType<RegisterBody> = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  try {
    const res = await request.json();
    const parseResult = registerBodySchema.safeParse(res);
    if (!parseResult.success) {
      return NextResponse.json("Need valid name, email, and password", {
        status: 404,
      });
    }
    const {
      data: { name, email, password },
    } = parseResult;
    const hash = await bcrypt.hash(password, 10);

    const user = await insertUser(name, email, hash);
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(err);
  }
}
