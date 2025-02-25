import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
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
    </>
  );
}
