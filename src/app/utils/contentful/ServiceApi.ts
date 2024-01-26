import { Config } from './config';

/**
 * This class constructs GraphQL queries for blog posts, page content and other data
 * and calls out to the Contentful GraphQL API.
 *
 * Contentful GraphQL API docs:
 * https://www.contentful.com/developers/docs/references/graphql/
 *
 * Explore the GraphQL API in depth in the GraphiQL Playground:
 * https://graphql.contentful.com/content/v1/spaces/{SPACE_ID}/explore?access_token={ACCESS_TOKEN}
 *
 */

const defaultOptions = {
  preview: false,
  locale: 'en',
};

export default class ServiceApi {
  static getLocaleCode(localeString) {
    switch (localeString) {
      case 'es': {
        return 'es-MX';
      }
      case 'en': {
        return 'en-US';
      }
      default: {
        return 'en-US';
      }
    }
  }

  /**
   *
   * @param slug
   * @param options
   */
  static async getAllServices(options = defaultOptions) {
    const localeCode = this.getLocaleCode(options.locale);
    const variables = { preview: options.preview, locale: localeCode };
    const query = `
    query GetAllServices($preview: Boolean!, $locale: String!) {
      servicesCollection(limit: 20, preview: $preview, locale: $locale) {
        items {
          sys {
            id
          }
          slug
          title
          shortDescription {
            json
          }
          description {
            json

          }
          images
        }
      }
    }`;
    const response = await this.callContentful(query, variables, options);
    const pageContent = response.data?.servicesCollection.items
      ? response.data.servicesCollection.items
      : [];

    return pageContent;
  }

  static async getServiceBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
      servicesCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        items {
          sys {
            id
          }
          slug
          title
          shortDescription {
            json
          }
          description {
            json
            links {
              entries {
                  block {
                    sys {
                      id
                    }
                    __typename
                    ...on Services {
                      title
                      slug
                      shortDescription {
                        json
                      }
                      images
                    }
                  }
              }
            }
          }
          images
          
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const post = response.data.servicesCollection.items
      ? response.data.servicesCollection.items
      : [];

    return post.pop();
  }

  static async callContentful(query, variables = {}, options = defaultOptions) {
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
}
