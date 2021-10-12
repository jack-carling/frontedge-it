import { asyncDelay } from './async-delay';

export interface Data {
  id: number;
  title: string;
  description: string;
  url: string;
}

export async function getData(path: string) {
  try {
    const response: Response = await fetch(path);
    await asyncDelay(getRandomNumber()); // Random delay between 250-1000ms
    const data: Data[] = await response.json();
    return { success: true, data };
  } catch (error) {
    console.warn(error);
    return { success: false };
  }
}

export async function removeData(path: string, id: number) {
  try {
    const response: Response = await fetch(`${path}/${id}`, { method: 'DELETE' });
    await asyncDelay(getRandomNumber()); // Random delay between 250-1000ms
    await response.json();
    return { success: true };
  } catch (error) {
    console.warn(error);
    return { success: false };
  }
}

function getRandomNumber() {
  const min = 250;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}
