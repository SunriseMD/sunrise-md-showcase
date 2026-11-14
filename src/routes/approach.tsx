import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/approach")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "approach", statusCode: 301 });
  },
});
