import {
  reviews,
  googleProfileUrl,
  googleRating,
  googleReviewCount,
} from "../lib/reviews";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Stars() {
  return (
    <span className="review-stars" aria-label="5 csillag az 5-ből">
      <span aria-hidden="true">★★★★★</span>
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="reviews-sec" id="velemenyek">
      <div className="wrap">
        <div className="sec-head">
          <span className="k">Vélemények</span>
          <h2>Amit az ügyfelek mondanak</h2>
          <p>
            Valódi, ellenőrizhető Google-értékelések — nem mi írtuk őket, és nem
            is szerkesztettük.
          </p>
        </div>

        <p className="reviews-agg">
          <b>{googleRating}</b>
          <Stars />
          <span>{googleReviewCount} értékelés a Google-on</span>
        </p>

        <div className="review-grid">
          {reviews.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-top">
                <span className="review-avatar" aria-hidden="true">
                  {r.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={r.photo} alt="" width={40} height={40} />
                  ) : (
                    initials(r.name)
                  )}
                </span>
                <span className="review-who">
                  <span className="review-name">{r.name}</span>
                  <Stars />
                </span>
              </div>
              <p className="review-text">{r.text}</p>
            </article>
          ))}
        </div>

        <a
          className="reviews-more"
          href={googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Több vélemény megtekintése a Google-on
        </a>
      </div>
    </section>
  );
}
