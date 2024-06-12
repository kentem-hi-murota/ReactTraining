import type { NamedAPIResource, Pokemon } from "../types";
import axios from "axios";

export const getNamedAPIResources = async (url: string): Promise<NamedAPIResource[]> => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getPokemon = async (url: string): Promise<Pokemon> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
