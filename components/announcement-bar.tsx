import { MdOutlineLocalShipping, MdOutlineVerifiedUser } from "react-icons/md";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-2 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5">
          <MdOutlineLocalShipping className="size-4 text-blue-300" aria-hidden />
          Livraison 24h/48h partout au Maroc (gratuite dès 1 500 DH)
        </span>
        <span className="hidden items-center gap-1.5 md:inline-flex">
          <MdOutlineVerifiedUser className="size-4 text-blue-300" aria-hidden />
          Garantie magasin • Paiement à la livraison
        </span>
      </div>
    </div>
  );
}