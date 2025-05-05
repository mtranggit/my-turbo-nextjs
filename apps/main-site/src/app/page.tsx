import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Hello Turborepo Nextjs</h1>
      <Counter />
      <Pokemon />
    </main>
  );
}
