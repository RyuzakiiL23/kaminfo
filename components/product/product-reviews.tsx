import { MdStar, MdStarBorder, MdVerified } from "react-icons/md";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DISTRIBUTION = [
  { stars: 5, value: 70 },
  { stars: 4, value: 20 },
  { stars: 3, value: 6 },
  { stars: 2, value: 3 },
  { stars: 1, value: 1 },
];

const REVIEWS = [
  { initials: "AB", rating: 5 },
  { initials: "CD", rating: 4 },
  { initials: "EF", rating: 5 },
];

function Stars({ rating, size = "size-[18px]" }: { rating: number; size?: string }) {
  return (
    <span className="inline-flex text-primary" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) =>
        i < rating ? (
          <MdStar key={i} className={size} aria-hidden />
        ) : (
          <MdStarBorder key={i} className={size} aria-hidden />
        )
      )}
    </span>
  );
}

export function ProductReviews() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Summary */}
      <div className="lg:col-span-4">
        <Card className="gap-5 p-6">
          <h2 className="text-2xl font-bold tracking-tight">Customer reviews</h2>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-extrabold tabular-nums">0.0</span>
            <div className="flex flex-col gap-1 pb-1">
              <Stars rating={5} />
              <span className="text-xs text-muted-foreground">Based on 00 reviews</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {DISTRIBUTION.map(({ stars, value }) => (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-10 shrink-0 tabular-nums text-muted-foreground">
                  {stars} star
                </span>
                <Progress value={value} className="h-2" />
                <span className="w-9 shrink-0 text-end tabular-nums text-muted-foreground">
                  {value}%
                </span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full">
            Write a review
          </Button>
        </Card>
      </div>

      {/* Review list */}
      <div className="flex flex-col gap-4 lg:col-span-8">
        {REVIEWS.map(({ initials, rating }) => (
          <Card key={initials} className="gap-3 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">Reviewer name</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-success">
                    <MdVerified className="size-3.5" aria-hidden />
                    Verified purchase
                  </span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">00 Month 0000</span>
            </div>

            <Stars rating={rating} />
            <h3 className="font-semibold">Review title placeholder</h3>
            <p className="text-sm text-muted-foreground">
              Review text placeholder. Customers describe their experience with the
              product here: what they liked, what could be better and who they would
              recommend it to.
            </p>
          </Card>
        ))}

        <Button variant="outline" className="self-center">
          Load more reviews
        </Button>
      </div>
    </div>
  );
}