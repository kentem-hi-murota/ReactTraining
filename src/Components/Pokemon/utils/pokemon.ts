export const getAllPokemon = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(
        `response.status = ${response.status}, response.statusText = ${response.statusText}`
      );

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(`error: ${e}`);
  }
};
