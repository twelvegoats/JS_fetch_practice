const getUsers = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url);
  return await response.json();
};

const render = (users, container) => {
  const ul = document.createElement('ul');

  users.forEach(
    ({
      name,
      email,
      username,
      company: { name: companyName, catchPhrase },
    }) => {
      const li = document.createElement('li');

      // Create separate elements for each line
      const nameDiv = document.createElement('div');
      nameDiv.textContent = name;
      nameDiv.style.display = 'block'; // Force block display

      const emailDiv = document.createElement('div');
      emailDiv.textContent = `(${email})`;
      emailDiv.style.display = 'block';

      const usernameDiv = document.createElement('div');
      usernameDiv.textContent = username;
      usernameDiv.style.display = 'block';

      const companyDiv = document.createElement('div');
      companyDiv.textContent = companyName;
      companyDiv.style.display = 'block';

      const catchPhraseDiv = document.createElement('div');
      catchPhraseDiv.textContent = catchPhrase;
      catchPhraseDiv.style.display = 'block';

      // Append all elements to the list item
      li.append(nameDiv, emailDiv, usernameDiv, companyDiv, catchPhraseDiv);
      ul.append(li);
    }
  );

  container.append(ul);
};

const getRickAndMortyCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  return await response.json();
};
// Returns: { info: {...}, results: [characters array] }

(async () => {
  const users = await getUsers();

  console.log(users);

  const contentElement = document.querySelector('#content');

  // Clear existing content
  contentElement.replaceChildren();

  render(users, contentElement);
})();
