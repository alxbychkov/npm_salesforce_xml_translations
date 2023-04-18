import xmlbuilder from 'xmlbuilder';
import { writeFile } from 'fs/promises';

import { readXLSX } from './core/xlsx.js';
import { createContent } from './core/xml.js';
import { getFilenameFromTimestamp } from './core/functions.js';

async function xml_translations_prepare(config) {
  try {
    // Read assets from xlsx file
    const assets = await readXLSX(config.xlsxFileName, config.xlsxSheetName);

    // If assets are empty, print message and exit function
    if (!assets.length) {
      console.log('Empty xlsx file.');
      return false;
    }

    // Create XML library object
    const library = xmlbuilder
      .create('library', {
        version: '1.0',
        encoding: 'UTF-8',
      })
      .att('xmlns', config.XMLNS)
      .att('library-id', config.LIBRARIES[0]);

    // Loop through all assets and create library content
    for (const asset of assets) {
      createContent(library, asset);
    }

    // Get XML as string, and write to file.
    const xml = library.end({ pretty: true, indent: '  ', newline: '\n' });
    const filename = getFilenameFromTimestamp('translations');
    const path = `./output/${filename}`;

    await writeFile(path, xml);

    console.log('XML file created!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw error;
  }
}

export default xml_translations_prepare;
