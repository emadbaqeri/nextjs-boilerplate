"use client";
/** Error Components Must Be Client-Side
 *   Error Page is just like `ErrorBoundary` wrapping our Page Component
 */

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
