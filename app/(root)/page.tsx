import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "Shreyas Prabhu" },
      category: "Robots",
      title: "We Robots",
      imageUrl:
        "https://t3.ftcdn.net/jpg/05/88/10/12/360_F_588101297_IXTXGJKEay4nuvwdGP8tXIJt1RBQvOfd.jpg",
    },
  ];
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
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found!</p>
          )}
        </ul>
      </section>
    </>
  );
}
