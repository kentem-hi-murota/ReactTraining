import type { NamedAPIResource, Pokemon, PaginationUrl } from "../types";
import axios from "axios";

export const getNamedAPIResources = async (
  url: string
): Promise<NamedAPIResource[]> => {
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

export const getPaginationUrl = async (url: string): Promise<PaginationUrl> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
