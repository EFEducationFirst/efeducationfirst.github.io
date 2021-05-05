import React from 'react';
import { useAtom } from 'jotai';
import { formatRelative } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { fetchProjectAtom } from '../state/githubProjects';

export const GithubProjects: React.FC = () => {
  const [repos] = useAtom(fetchProjectAtom);
  const formatDateRelative = (date: string): string => formatRelative(new Date(date), Date.now(), {
    locale: enGB,
  });

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
      {
        repos.map((repo) => (
          <div className="flex flex-col max-w-lg w-full rounded-lg border-2 p-4">
            <span className="text-gray-400 text-sm">{ formatDateRelative(repo.updated_at) }</span>
            <h3 className="font-semibold text-2xl tracking-wide truncate">
              <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
            </h3>
            <p className="flex-grow text-gray-500 my-1 text-lg">{repo.description}</p>
            <div className="grid grid-cols-3">
              <span>
                🌟
                {repo.stargazers_count}
              </span>
              <span>
                🍴
                {repo.forks_count}
              </span>
              <span>{repo.language}</span>
            </div>
          </div>
        ))
      }
    </div>
  );
};
