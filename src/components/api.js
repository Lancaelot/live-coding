
export async function findMovie(title) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=287c70f0&t=[${title}]`,
  );
  const movieData = await response.json();

  return movieData;
}
