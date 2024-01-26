const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space,
  accessToken,
});

// eslint-disable-next-line consistent-return
export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  // console.error('Error getting Entries for ');
}

export default { fetchEntries };
