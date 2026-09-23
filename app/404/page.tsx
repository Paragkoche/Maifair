import type { Metadata } from "next";
import NotFoundView from "@/components/NotFoundView";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description:
    "The page you are looking for does not exist. Allow Maifair Spa to guide you back to serenity and relaxation.",
};

export default function FourOFourPage() {
  return <NotFoundView />;
}
