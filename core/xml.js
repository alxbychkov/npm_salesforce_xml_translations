export function createContent(root, asset) {
  const contentId = asset['__EMPTY']
    ? cleanupString(asset['__EMPTY'])
    : asset['CONTENT-ID'];
  const content = root.ele('content', { 'content-id': contentId });

  content.ele('display-name', {'xml:lang': 'x-default'}, asset['ENGLISH']);
  content.ele('online-flag', {}, 'true');
  content.ele('searchable-flag', {}, 'false');
  content.ele('template', {}, '/content/content/htmlcontentassetclean.isml');

  const customAttributes = content.ele('custom-attributes');
  const lang_values = [
    { lang: 'x-default', value: asset['ENGLISH'] || '' },
    { lang: 'zh', value: asset['CHINESE TRADITIONAL'] || '' },
    { lang: 'fr', value: asset['FRENCH'] || '' },
    { lang: 'de', value: asset['GERMAN'] || '' },
    { lang: 'it', value: asset['ITALIAN'] || '' },
    { lang: 'ru', value: asset['RUSSIAN'] || '' },
    { lang: 'es', value: asset['SPANISH'] || '' },
    { lang: 'za', value: asset['CHINESE SIMPLIFIED'] || '' },
  ];

  lang_values.forEach((val) => {
    if (val.value) {
      customAttributes.ele(
        'custom-attribute',
        { 'attribute-id': 'body', 'xml:lang': val.lang },
        val.value
      );
    }
  });
  content.ele('folder-links');
}

function cleanupString(str) {
  const cleanedString = str.replace(/[^\w\s]/gi, '');
  const finalResult = cleanedString.replace(/\s+/g, '-').toLowerCase();

  return `tr-${finalResult}`;
}
