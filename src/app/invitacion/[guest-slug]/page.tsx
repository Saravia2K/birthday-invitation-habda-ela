import { redirect } from "next/navigation";
import { type Metadata } from "next";

import InvitationPageContent from "./content";
import Envelope from "@/components/common/envelope";

import GUESTS from "@/assets/json/guests.json";

export async function generateStaticParams() {
  return GUESTS.map(({ slug }) => ({
    "guest-slug": slug,
  }));
}

//#region Metadata
export async function generateMetadata({
  params,
}: InvitationPageProps): Promise<Metadata> {
  const { "guest-slug": slug } = await params;
  const name = GUESTS.find((g) => g.slug == slug)?.name;

  return {
    title: name,
  };
}
//#endregion

const goToIndex = () => redirect("/");
export default async function InvitationPage({ params }: InvitationPageProps) {
  // Cargando invitación
  const { "guest-slug": slug } = await params;
  const guest = GUESTS.find((g) => g.slug == slug);

  // ¿No existe? No está invitado
  if (!guest) return goToIndex();

  return (
    <Envelope name={guest.name}>
      <InvitationPageContent guest={guest.name} companions={guest.companions} />
    </Envelope>
  );
}

type InvitationPageProps = {
  params: Promise<{
    "guest-slug": string;
  }>;
};
