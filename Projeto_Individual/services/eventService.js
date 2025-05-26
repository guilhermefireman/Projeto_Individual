const supabase = require('../config/database');

async function getAllUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
}

module.exports = { getAllUsers };
