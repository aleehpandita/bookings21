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
  isDynamic: true,
};

export default class ContentfulApi {
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
  static async getAllReasons(options = defaultOptions) {
    const localeCode = this.getLocaleCode(options.locale);
    const variables = { preview: options.preview, locale: localeCode };
    const query = `
    query GetAllReasonsToBook($preview: Boolean!, $locale: String!) {
      reasonsBookWithUsCollection(limit: 20, preview: $preview, locale: $locale) {
        items {
          sys {
            id
          }
          title
          description
          icon
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const pageContent = response.data?.reasonsBookWithUsCollection.items
      ? response.data.reasonsBookWithUsCollection.items
      : [];

    return pageContent;
  }

  static async getSidebarContent(options = defaultOptions) {
    const localeCode = this.getLocaleCode(options.locale);
    const variables = { preview: options.preview, locale: localeCode };
    const query = `
    query GetSidebarContent($preview: Boolean!, $locale: String!) {
      sidebarCollection(limit: 20, preview: $preview, locale: $locale) {
        items {
          image
          content {
            json
          }
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const sidebarContent = response.data?.sidebarCollection.items
      ? response.data.sidebarCollection.items
      : [];

    return sidebarContent;
  }

  /**
   * Fetch the content for a single page by slug.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: slug (string)
   *
   */
  static async getPageContentBySlug(slug, options = defaultOptions) {
    const localeCode = this.getLocaleCode(options.locale);
    const variables = { slug, preview: options.preview, locale: localeCode, isDynamic: options.isDynamic };
    const query = `
    query GetPageContentBySlug($slug: String!, $preview: Boolean!, $locale: String!, $isDynamic: Boolean!) {
      pageCollection(limit: 1, where: {slug: $slug, isDynamic: $isDynamic}, preview: $preview, locale: $locale) {
        items {
          sys {
            id
          }
          heroBanner {
            ... on HeroBanner {
              headline
              subHeading
              internalLink
              externalLink
              ctaText
              image
            }
          }
          sidebar {
            ... on Sidebar {
              image
              content {
                json
              }
            }
          }
          title
          description
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                }
              }
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  __typename
                  ...on Gallery {
                    image
                  }
                  ...on Services {
                    title
                  }
                  ...on LayoutContainer {
                    content {
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
                  }
                  ...on AirlinesContainer{
                    content {
                      json
                      links {
                        entries {
                          block {
                            sys {
                              id
                            }
                            ...on Airlines {
                              title
                              description
                              phones {
                                json
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                inline {
                  sys {
                    id
                  }
                  __typename
                  __typename
                  ...on Gallery {
                    image
                  }
                }
              }
            }
          }
          contentFooter
          imageFooter
          slug
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const pageContent = response.data?.pageCollection.items
      ? response.data.pageCollection.items
      : [];
    return pageContent.pop();
  }

  /**
   *
   * @param options
   */
  static async getAllPages(options = defaultOptions) {
    const localeCode = this.getLocaleCode(options.locale);
    const variables = { preview: options.preview, locale: localeCode, isDynamic: options.isDynamic };
    const query = `
    query GetPageContentBySlug($preview: Boolean!, $locale: String!, $isDynamic: Boolean!) {
      pageCollection(limit: 20, preview: $preview, locale: $locale, where: {isDynamic: $isDynamic}) {
        items {
          slug
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const pageContent = response.data?.pageCollection.items
      ? response.data.pageCollection.items
      : [];

    return pageContent;
  }

  /**
   * Fetch a batch of blog post slugs (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog post slugs.
   *
   * The query limit of 100 is the maximum number of slugs
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
  static async getPaginatedSlugs(page: number) {
    const queryLimit = 100;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const variables = { limit: queryLimit, skip };

    const query = `query GetPaginatedSlugs($limit: Int!, $skip: Int!) {
        blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
          total
          items {
            slug
            }
          }
        }`;

    const response = await this.callContentful(query, variables);

    const { total } = response.data.blogPostCollection;
    const slugs = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items.map((item) => item.slug)
      : [];

    return { slugs, total };
  }

  /**
   * Fetch all blog post slugs.
   *
   * This method queries the GraphQL API for blog post slugs
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used on pages/blog/[slug] inside getStaticPaths() to
   * generate all dynamic blog post routes.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */
  static async getAllPostSlugs() {
    let page = 1;
    let shouldQueryMoreSlugs = true;
    const returnSlugs = [];

    while (shouldQueryMoreSlugs) {
      // eslint-disable-next-line no-await-in-loop
      const response = await this.getPaginatedSlugs(page);

      if (response.slugs.length > 0) {
        returnSlugs.push(...response.slugs);
      }

      shouldQueryMoreSlugs = returnSlugs.length < response.total;
      // eslint-disable-next-line no-plusplus
      page++;
    }

    return returnSlugs;
  }

  /**
   * Fetch a batch of blog posts (by given page number).
   *
   * This method queries the GraphQL API for a single batch of blog posts.
   *
   * The query limit of 10 is the maximum number of posts
   * we can fetch with this query due to GraphQL complexity costs.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   * param: page (number)
   *
   */
  static async getPaginatedBlogPosts(page) {
    const queryLimit = 10;
    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? queryLimit * skipMultiplier : 0;

    const variables = { limit: queryLimit, skip };

    const query = `query GetPaginatedBlogPosts($limit: Int!, $skip: Int!) {
        blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
          total
          items {
            sys {
              id
            }
            date
            title
            slug
            excerpt
            tags
            externalUrl
            author {
              name
              description
              twitchUsername
              twitterUsername
              gitHubUsername
              websiteUrl
              image {
                url
                title
                width
                height
                description
              }
            }
            body {
              json
              links {
                entries {
                  inline {
                    sys {
                      id
                    }
                    __typename
                    ... on BlogPost {
                      title
                      slug
                    }
                  }
                  block {
                    sys {
                      id
                    }
                    __typename
                    ... on VideoEmbed {
                      title
                      embedUrl
                    }
                    ... on CodeBlock {
                      description
                      language
                      code
                    }
                  }
                }
                assets {
                  block {
                    sys {
                      id
                    }
                    url
                    title
                    width
                    height
                    description
                  }
                }
              }
            }
          }
        }
      }`;

    const response = await this.callContentful(query, variables);

    const { total } = response.data.blogPostCollection;
    const posts = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
      : [];

    return { posts, total };
  }

  /**
   * Fetch all blog posts.
   *
   * This method queries the GraphQL API for blog posts
   * in batches that accounts for the query complexity cost,
   * and returns them in one array.
   *
   * This method is used to build the RSS feed on pages/buildrss.
   *
   * For more information about GraphQL query complexity, visit:
   * https://www.contentful.com/developers/videos/learn-graphql/#graphql-fragments-and-query-complexity
   *
   */
  static async getAllBlogPosts() {
    let page = 1;
    let shouldQueryMorePosts = true;
    const returnPosts = [];

    while (shouldQueryMorePosts) {
      // eslint-disable-next-line no-await-in-loop
      const response = await this.getPaginatedBlogPosts(page);

      if (response.posts.length > 0) {
        returnPosts.push(...response.posts);
      }

      shouldQueryMorePosts = returnPosts.length < response.total;
      // eslint-disable-next-line no-plusplus
      page++;
    }

    return returnPosts;
  }

  /**
   * Fetch a single blog post by slug.
   *
   * This method is used on pages/blog/[slug] to fetch the data for
   * individual blog posts at build time, which are prerendered as
   * static HTML.
   *
   * The content type uses the powerful Rich Text field type for the
   * body of the post.
   *
   * This query fetches linked assets (i.e. images) and entries
   * (i.e. video embed and code block entries) that are embedded
   * in the Rich Text field. This is rendered to the page using
   * @components/RichTextPageContent.
   *
   * For more information on Rich Text fields in Contentful, view the
   * documentation here: https://www.contentful.com/developers/docs/concepts/rich-text/
   *
   * Linked assets and entries are parsed and rendered using the npm package
   * @contentful/rich-text-react-renderer
   *
   * https://www.npmjs.com/package/@contentful/rich-text-react-renderer
   *
   * param: slug (string)
   *
   */
  static async getPostBySlug(slug, options = defaultOptions) {
    const variables = { slug, preview: options.preview };
    const query = `query GetPostBySlug($slug: String!, $preview: Boolean!) {
      blogPostCollection(limit: 1, where: {slug: $slug}, preview: $preview) {
        total
        items {
          sys {
            id
          }
          date
          title
          slug
          excerpt
          tags
          externalUrl
          author {
            name
            description
            twitchUsername
            twitterUsername
            gitHubUsername
            websiteUrl
            image {
              url
              title
              width
              height
              description
            }
          }
          body {
            json
            links {
              entries {
                inline {
                  sys {
                    id
                  }
                  __typename
                  ... on BlogPost {
                    title
                    slug
                  }
                }
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on VideoEmbed {
                    title
                    embedUrl
                  }
                  ... on CodeBlock {
                    description
                    language
                    code
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }`;

    const response = await this.callContentful(query, variables, options);
    const post = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
      : [];

    return post.pop();
  }

  /**
   * Fetch n post summaries that are displayed on pages/blog.js.
   *
   * This method accepts a parameter of a page number that calculates
   * how many blog posts to skip in the GraphQL query.
   *
   * Set your desired page size in @utils/Config:
   * Config.pagination.pageSize
   *
   * The page size is currently set to 2 so you can view how the pagination
   * works on a fresh clone of the repository.
   *
   * param: page (number)
   *
   */
  static async getPaginatedPostSummaries(page) {
    /**
     * Calculate the skip parameter for the query based on the incoming page number.
     * For example, if page === 2, and your page length === 3,
     * the skip parameter would be calculated as 3 (the length of a page)
     * therefore skipping the results of page 1.
     */

    const skipMultiplier = page === 1 ? 0 : page - 1;
    const skip = skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

    const variables = { limit: Config.pagination.pageSize, skip };

    const query = `query GetPaginatedPostSummaries($limit: Int!, $skip: Int!) {
        blogPostCollection(limit: $limit, skip: $skip, order: date_DESC) {
          total
          items {
            sys {
              id
            }
            date
            title
            slug
            excerpt
            tags
          }
        }
      }`;

    const response = await this.callContentful(query, variables);

    const paginatedPostSummaries = response.data.blogPostCollection
      ? response.data.blogPostCollection
      : { total: 0, items: [] };

    return paginatedPostSummaries;
  }

  /**
   * Fetch n recent post summaries that are displayed on pages/index.js.
   *
   * This query is purposefully not paginated as it serves as a single
   * responsibility function to display a fixed size group of posts.
   *
   * Set your desired recent post list size in @utils/Config:
   * Config.pagination.recentPostsSize
   *
   */
  static async getRecentPostList() {
    const variables = { limit: Config.pagination.recentPostsSize };
    const query = `query GetRecentPostList($limit: Int!) {
      blogPostCollection(limit: $limit, order: date_DESC) {
        items {
          sys {
            id
          }
          date
          title
          slug
          excerpt
          tags
        }
      }
    }`;

    const response = await this.callContentful(query, variables);

    const recentPosts = response.data.blogPostCollection.items
      ? response.data.blogPostCollection.items
      : [];

    return recentPosts;
  }

  /**
   * Fetch the total number of blog posts.
   */
  static async getTotalPostsNumber() {
    const query = `
      {
        blogPostCollection {
          total
        }
      }
    `;

    const response = await this.callContentful(query);
    const totalPosts = response.data.blogPostCollection.total
      ? response.data.blogPostCollection.total
      : 0;

    return totalPosts;
  }

  /**
   * Call the Contentful GraphQL API using fetch.
   *
   * param: query (string)
   */
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
