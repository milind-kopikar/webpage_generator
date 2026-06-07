import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/content/business";
import { Button } from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your estimate request has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="flex flex-1 items-center justify-center bg-sand-50 px-4 py-20">
      <div className="w-full max-w-md rounded-2xl border border-brand-100 bg-white p-8 text-center shadow-sm">
        <Image
          src={business.logo}
          alt={business.name}
          width={300}
          height={158}
          className="mx-auto h-14 w-auto"
        />
        <span className="mx-auto mt-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-accent-600">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h1 className="mt-5 font-display text-2xl font-bold text-brand-800">
          Thank you!
        </h1>
        <p className="mt-3 text-brand-600">
          Your request has been received. We&apos;ll reach out shortly to schedule
          your free estimate. For anything urgent, give us a call.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={`tel:${business.phoneHref}`} variant="primary">
            <PhoneIcon className="h-5 w-5" />
            {business.phone}
          </Button>
          <Button href="/" variant="ghost">
            Back to home
          </Button>
        </div>
      </div>
    </main>
  );
}
