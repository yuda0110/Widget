import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            value={term}
            type="text"
            className="input"
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;