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
        <section className="w-3/3 bg-white rounded-lg shadow">
          <ul className="divide-y-2 divide-gray-100 pl-4">
            {node.content.map((item: any) => (
              <li className="py-2 px-3" key={item.id}>
                {item.content.map((child: any) => {
                  if(!child.content) {
                    return undefined;
                  }
                  return child.content.map((grandchild: any) => {
                    if (
                      (grandchild.content && grandchild.content.length > 1) &&
                      (grandchild.data.uri)
                    ) {
                      return (
                        <Link 
                          href={grandchild.data.uri}
                        >
                          <a className="text-blue-500 hover:underline">{grandchild.content[0].value}</a>
                        </Link>
                      );
                    }
                    if (grandchild.value && grandchild.value.length > 1) {
                      return (
                        <>
                          {grandchild.value}
                        </>
                      )
                    }
                    return undefined;
                  })
                })}
              </li>
            ))}
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
        return <div className="w-96">{children}</div>;
      },
    },
  };
}
export default renderOptions;