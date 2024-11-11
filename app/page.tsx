import Posts from "@/components/posts";

interface homeProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: homeProps) {

  return (
    <div>
      <Posts searchParams={searchParams} />
    </div>
  );
}
