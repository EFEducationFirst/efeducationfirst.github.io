import { atom } from 'jotai';
import axios from 'axios';
import { GithubRepo } from '../models/github';

export const projectAtom = atom<string>('https://api.github.com/users/efeducationfirst/repos');
export const fetchProjectAtom = atom<Promise<GithubRepo[]>>(async (get) => {
  const response = await axios.get(get(projectAtom));
  return response.data;
});
