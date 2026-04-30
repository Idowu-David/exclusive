export default function StarRating({ rating, count }: { rating: number; count: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const gradientId = `half-grad-${rating}`;

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= full;
        const isHalf = star === full + 1 && half;

        return (
          <svg
            key={star}
            className="w-4 h-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={gradientId}>
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={
                isFull ? "#FACC15" : isHalf ? `url(#${gradientId})` : "#D1D5DB"
              }
            />
          </svg>
        );
      })}
      <span className="text-[10px] text-gray-500">({count})</span>
    </div>
  );
}
