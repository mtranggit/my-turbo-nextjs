export default async function Pokemon() {
	const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
	const pokemonData = await pokemon.json() as { results: {name: string }[] };

	return (
		<div className="bg-black text-white p-5">
			<h2 className="text-4xl">Pokemon</h2>
			<p>List of Pokemon</p>
			<ul>
				{pokemonData.results.map((poke) => (
					<li key={poke.name}>{poke.name}</li>
				))}
			</ul>
		</div>
	);
}