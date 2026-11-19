
import Link from "next/link";
import Image from "next/image";
import { getHeader, getStrapiMediaUrl } from "@/lib/strapi";

export default async function Header() {
  const header = await getHeader();

  if (!header) return null;

  const logo = header.logo?.[0];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/">
          {logo && (
            <Image
              src={getStrapiMediaUrl(logo.url)}
              alt={logo.alternativeText || header.siteName}
              width={120}
              height={70}
              className="h-auto w-auto max-w-[120px]"
              priority
              unoptimized
            />
          )}
        </Link>

        <nav className="flex items-center gap-6">
          {header.navigation?.map((item: any) => (
            <Link
              key={item.id}
              href={item.url}
              target={item.openInNewTab ? "_blank" : "_self"}
              rel={item.openInNewTab ? "noopener noreferrer" : undefined}
              className="text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={header.buttonUrl}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          {header.buttonText}
        </Link>

      </div>
    </header>
  );
}
