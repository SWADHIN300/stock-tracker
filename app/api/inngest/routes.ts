import { serve } from "inngest/next";
import { inngest } from "../../../lib/inngest/client";
import { sendSignUPEmail } from "@/lib/inngest/function";


export const { GET, POST } = serve({
  client: inngest,
  functions: [sendSignUPEmail],
});
