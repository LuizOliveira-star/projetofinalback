import pool from '../config/database';

const createContactsTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS contactos (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        image VARCHAR(255) NOT NULL
      );
    `;
    await client.query(queryText);
    console.log('Tabela criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    client.release();
  }
};

createContactsTable().then(() => process.exit(0));