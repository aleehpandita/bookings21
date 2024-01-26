const defaultOptions = {
  preview: false,
  locale: 'en',
};

async function callContentful(query, variables = {}, options = defaultOptions) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const accessToken = options.preview
    ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const fetchOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) => response.json());
    return data;
  } catch (error) {
    throw new Error('Could not fetch data from Contentful!');
  }
}
export default callContentful;