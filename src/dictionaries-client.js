import i18next from 'i18next';

export async function getDictionary(dictionary) {
  try {
    const response = await window.fetch(`/dictionaries/${dictionary}`);
    if (response.ok) return await response.json();
  } catch (e) {
    throw new Error(i18next.t('error.getDictionary'));
  }
  throw new Error(i18next.t('error.getDictionary'));
}
