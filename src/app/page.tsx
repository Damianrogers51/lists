import List from "@/components/list/List";
import { getListItems } from "@/db/queries/listItems";

export default async function Home() {
  const listItems = await getListItems(); 

  return (
    <main className="relative w-screen h-screen text-neutral-700 p-8">
      <List listItems={listItems} />
    </main>
  );
}
