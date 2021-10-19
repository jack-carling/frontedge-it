import { asyncDelay } from './async-delay';

export interface Data {
  id: number;
  title: string;
  description: string;
  url: string;
}

export async function getData(location: string) {
  const response: Response = await fetch(location);
  await asyncDelay(getRandomNumber()); // Random delay between 250-1000ms
  const data: Data[] = await response.json();
  return data;
}

export async function removeData(location: string, id: number) {
  const response: Response = await fetch(`${location}/${id}`, { method: 'DELETE' });
  await asyncDelay(getRandomNumber()); // Random delay between 250-1000ms
  await response.json();
  return { success: true };
}

function getRandomNumber() {
  const min = 250;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
