import {getDBConnection} from './db';

export async function getCategories() {
  const db = await getDBConnection();

  try {
    return await db.all("SELECT * FROM categories");
  } finally {
    await db.close();
  }
}

export async function getCategoryBySlug(categorySlug: string) {
  const db = await getDBConnection()
  const category = await db.get('SELECT * FROM categories WHERE slug = ?', [categorySlug])
  return category
}