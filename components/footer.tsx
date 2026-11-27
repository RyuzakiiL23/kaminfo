import { MdMemory, MdPhotoCamera, MdPlayArrow, MdChat } from "react-icons/md";
import type { IconType } from "react-icons";

const SOCIALS: { label: string; Icon: IconType }[] = [
  { label: "Instagram", Icon: MdPhotoCamera },
  { label: "YouTube", Icon: MdPlayArrow },
  { label: "WhatsApp", Icon: MdChat },
];

export function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary-foreground text-primary">
              <MdMemory className="size-5" aria-hidden />
            </div>
            <span className="text-lg font-bold">Brand Name</span>
          </div>
          <p className="text-sm opacity-80">
            Short brand description placeholder. One or two sentences about the store.
          </p>
        </div>

        {/* Catalogue */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-semibold">Catalogue</h3>
          <span className="text-sm opacity-80">Category One</span>
          <span className="text-sm opacity-80">Category Two</span>
          <span className="text-sm opacity-80">Category Three</span>
          <span className="text-sm opacity-80">Category Four</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2.5">
          <h3 className="font-semibold">Contact</h3>
          <span className="text-sm opacity-80">Address placeholder</span>
          <span className="font-mono text-sm font-semibold" dir="ltr">
            +000 000 000 000
          </span>
          <span className="text-sm opacity-80">email@example.com</span>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Follow us</h3>
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, Icon }) => (
              <span
                key={label}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full bg-primary-foreground text-primary"
              >
                <Icon className="size-[18px]" aria-hidden />
              </span>
            ))}
          </div>
          <span className="text-xs opacity-80">Payment methods placeholder</span>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 py-4 text-center">
        <p className="text-xs opacity-80">© 2026 Brand Name. All rights reserved.</p>
      </div>
    </footer>
  );
}