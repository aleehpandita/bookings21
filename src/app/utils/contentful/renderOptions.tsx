import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Link from "next/link";
import Image from "next/image";

function renderOptions(links) {
  if (Object.keys(links).length === 0) {
    return undefined;
  }
  // create an asset block map
  const assetBlockMap = new Map();
  // loop through the assets and add them to the map
  // eslint-disable-next-line no-restricted-syntax
      // create an entry block map
      const entryBlockMap = new Map();
  if(links.assets) {
    for (const asset of links.assets.block) {
      assetBlockMap.set(asset.sys.id, asset);
    }
    // loop through the assets and add them to the map
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of links.entries.block) {
      entryBlockMap.set(entry.sys.id, entry);
    }
  }
  const entryInlineMap = new Map();
  if(links.entries.inline) {
    // loop through the inline linked entries and add them to the map
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of links.entries.inline) {
      entryInlineMap.set(entry.sys.id, entry);
    }
  }

  // @ts-ignore
  return {
    // other options...
    renderNode: {
      // other options...
      // eslint-disable-next-line no-unused-vars
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // find the asset in the assetBlockMap by ID
        const asset = assetBlockMap.get(node.data.target.sys.id);
        // render the asset accordingly
        return <Image src={asset.url} width={300} height={500} alt="Index" />;
      },
      [BLOCKS.UL_LIST]: (node) => (
        <section className="w-3/3 bg-white dark:bg-gray-600 rounded-lg shadow">
          <ul className="divide-y-2 divide-gray-100 pl-4">
            {node.content.map((item: any, index: number) => {
              return (
                <li className="py-2 px-3" key={`${item.nodeType}${index}`}>
                  {item.content.map((child: any) => {
                    if(!child.content) {
                      return undefined;
                    }
                    return child.content.map((grandchild: any, index: number) => {
                      if (
                        (grandchild.content && grandchild.content.length > 1) &&
                        (grandchild.data.uri)
                      ) {
                        return (
                          <Link
                            key={`${grandchild.nodeType}${index}`}
                            href={grandchild.data.uri}
                          >
                            <a className="text-blue-500 hover:underline">{grandchild.content[0].value}</a>
                          </Link>
                        );
                      }
                      if (grandchild.value && grandchild.value.length > 1) {
                        return (
                          <span key={`${grandchild.nodeType}${index}`}>
                            {grandchild.value}
                          </span>
                        )
                      }
                      return undefined;
                    })
                  })}
                </li>
              )
            })}
          </ul>
        </section>
      ),
      // eslint-disable-next-line no-unused-vars
      // [BLOCKS.PARAGRAPH]: (node, next) => `<div className="flex">${next(node.content)}</div>`,
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = entryInlineMap.get(node.data.target.sys.id);
        // eslint-disable-next-line no-underscore-dangle
        if (entry.__typename === 'Gallery') {
          const image = entry.image[0];
          return (
            <Image
              src={image.url}
              width={700}
              height={300}
              layout="responsive"
              objectFit="contain"
              alt="Index"
            />
          );
        }
        return <div className="w-96">{children}</div>;
      },
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line no-underscore-dangle
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryBlockMap by ID
        const entry = entryBlockMap.get(node.data.target.sys.id);
        // render the entries as needed by looking at the __typename
        // referenced in the GraphQL query
        // eslint-disable-next-line no-underscore-dangle
        if (entry.__typename === 'Gallery') {
          const image = entry.image[0];
          return (
            <Image
              src={image.url}
              width={700}
              height={300}
              layout="responsive"
              objectFit="contain"
              alt="Index"
            />
          );
        }
        // eslint-disable-next-line no-underscore-dangle
        if (entry.__typename === 'LayoutContainer') {
          return (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {entry.content.links.entries.block.map((item) => (
                <div className="bg-white rounded shadow-md flex card text-grey-darkest " key={item.id}>
                  <div className="w-2/3 h-full rounded-l-sm">
                    {item.images && (
                      <Image src={item.images[0].url} alt="Index" width={300} height={300} />
                    )}
                  </div>
                  <div className="w-full flex flex-col">
                    <div className="px-2 py-4 pb-0 flex-1">
                      <h3 className="font-light mb-1 text-grey-darkest">{item.title}</h3>
                      <div className="text-xs flex items-center mb-4">
                        <i className="fas fa-map-marker-alt mr-1 text-grey-dark" />
                        Soho, London
                      </div>
                      <span className="text-5xl text-grey-darkest">
                        £63.00
                        <span className="text-lg">/PPPN</span>
                      </span>
                      <div className="flex items-center mt-4">
                        <div className="pr-2 text-xs">
                          <i className="fas fa-wifi text-green" /> Free WiFi
                        </div>
                        <div className="px-2 text-xs">
                          <i className="text-grey-darker far fa-building" /> 2mins to center
                        </div>
                      </div>
                    </div>
                    {<Link
                      href={`/services/${item.slug}`}
                    >
                      <a className="border-blue-500 border-b-2 p-3 flex items-center justify-between transition hover:bg-blue-500 hover:text-white">
                      Read more <i className="fas fa-chevron-right" />
                      </a>
                    </Link>}
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return <div className="w-96">{children}</div>;
      },
    },
  };
}
export default renderOptions;