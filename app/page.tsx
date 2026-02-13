import Wrapper from "@/components/wrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to your email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="py-30 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="tracking-tight text-4xl font-semibold md:text-5xl xl:text-5xl">
            Your marketplace for high quality{" "}
            <span className="text-primary">digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Tailwindcss highly customizable components for building modern
            websites and applications that look and feel the way you mean it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={""} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost" className="cursor-pointer">
              Our quality promse &rarr;
            </Button>
          </div>
        </div>

        {/* List product */}
      </Wrapper>

      <section className="border-t border-border bg-secondary">
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm: grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg: gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
