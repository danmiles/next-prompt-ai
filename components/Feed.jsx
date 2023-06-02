'use client';

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';

function Feed() {
  const [searchText, setSearchText] = useState('');
  const handleSearchChange = (e) => {
    
  }
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Serch for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
    </section>
  );
}

export default Feed;
