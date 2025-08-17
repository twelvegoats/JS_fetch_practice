const getRickAndMortyCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  return data.results;
};

const renderCharacters = (characters, container) => {
  const ul = document.createElement('ul');

  characters.forEach(({ name, status, species }) => {
    const li = document.createElement('li');
    li.textContent = `${name} - ${status} - ${species}`;
    ul.append(li);
  });

  container.append(ul);
};

async function initApp() {
  try {
    const characters = await getRickAndMortyCharacters();
    const deadCharacters = characters.filter(
      (character) => character.status === 'Dead'
    );

    console.log(`Total characters: ${characters.length}`);
    console.log(`Dead characters: ${deadCharacters.length}`);

    const contentElement = document.querySelector('#content');
    contentElement.replaceChildren();

    renderCharacters(deadCharacters, contentElement);
  } catch (error) {
    console.error('Failed to load characters:', error);
  }
}

// Start the app
initApp();
