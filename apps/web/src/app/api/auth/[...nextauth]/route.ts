import { createRouteHandler } from "@cfxstore/nextauth";
import { authOptions } from "../../../../lib/auth";

const handler = createRouteHandler(authOptions);

export { handler as GET, handler as POST };
