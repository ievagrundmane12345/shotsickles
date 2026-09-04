import { createFileRoute } from "@tanstack/react-router";
import adGrid from "@/assets/up-15-58-50.jpeg.asset.json";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Shotsickles" },
      {
        name: "description",
        content:
          "Five women, one AI course, one random Tuesday: how Shotsickles brought frozen 10% ABV cocktails to the Baltics.",
      },
      { property: "og:title", content: "Our Story — Shotsickles" },
      { property: "og:description", content: "Study hard, party harder. No regrets. Think of something original." },
    ],
  }),
  component: Story;
});

function Story() {
  return null;
}
