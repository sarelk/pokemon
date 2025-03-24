'use client';

import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="container mx-auto px-4 py-4 bg-gray-800 text-white">
      <nav className="flex items-center justify-between">
        <img src="/logo.png" alt="Pokémon Logo" className="h-8" />

        <div className="flex space-x-4">
          <Link href="/" className="text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/favourites" className="text-lg hover:text-gray-400">
            Favourites
          </Link>
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-gray-400"
          >
            PokeAPI
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;