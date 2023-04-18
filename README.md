# Salesforce XML Translations

This package provides a simple way to prepare XML files for import into Salesforce B2C Commerce.

## Installation

You can install this package using npm:

```
npm install salesforce_xml_translations
```

## Usage

Here's an example usage of this package:

```
import { xml_translations_prepare } from "salesforce_xml_translations"; 

const config = {
    'LIBRARIES': ['plein-outlet-shared-library'],
    'XMLNS': 'http://www.demandware.com/xml/impex/library/2006-10-31',
    'xlsxFileName': 'test1.xlsx',
    'xlsxSheetName': 'Last week 19-25.04'
}

xml_translations_prepare(config);
```

The xml_translations_prepare function takes a configuration object, which specifies the following properties:
--------------------------------

* LIBRARIES: an array of library names
* XMLNS: the XML namespace to use
* xlsxFileName: the name of the Excel file to import
* xlsxSheetName: the name of the Excel sheet to import

The function returns nothing. Instead, it creates one or more XML files in the current directory, which are ready to be imported into Salesforce B2C Commerce.

## Contributing

If you want to contribute to this package, please read the CONTRIBUTING.md file for details on our code of conduct, and the process for submitting pull requests.
