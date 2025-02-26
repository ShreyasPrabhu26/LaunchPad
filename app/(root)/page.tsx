import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  const session = await auth();
  console.log(session?.id);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Showcase your startup
          <br />
          network with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your ideas, support top pitches, and shine in virtual
          competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <h2 className="text-30-semibold mb-7">
          {query ? `Search results for "${query}"` : "All Startups"}
        </h2>
        <ul className="card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found!</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
