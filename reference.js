module.exports = {
  'plugin': 'keepfast-contrib-phantomas',
  'sensors': {
    'notFound': {
      'label': 'Number of HTTP 404 responses',
      'all': 0
    },
    'requests': {
      'label': 'Total number of HTTP requests',
      'all': 99
    },
    'httpsRequests': {
      'label': 'Total number of HTTPS requests',
      'all': 9.3
    },
    'bodySize': {
      'label': 'Size of the content of all responses',
      'all': 938159
    },
    'contentLength': {
      'label': 'Size of the content of all responses',
      'all': 1165716
    },
    'htmlCount': {
      'label': 'Number of HTML responses',
      'all': 10
    },
    'htmlSize': {
      'label': 'Total number of HTTPS requests made',
      'all': 130824
    },
    'cssCount': {
      'label': 'Number of CSS responses',
      'all': 7.7
    },
    'cssSize': {
      'label': 'Size of CSS responses',
      'all': 76000
    },
    'jsCount': {
      'label': 'Number of JS responses',
      'all': 22
    },
    'jsSize': {
      'label': 'Size of JS responses',
      'all': 358000
    },
    'imageCount': {
      'label': 'Number of image responses',
      'all': 54
    },
    'imageSize': {
      'label': 'Size of image responses',
      'all': 1420000
    },
    'webfontCount': {
      'label': 'Number of web font responses',
      'all': 3.1
    },
    'webfontSize': {
      'label': 'Size of web font responses',
      'all': 120000
    },
    'otherCount': {
      'label': 'Number of other responses',
      'all': 6
    },
    'otherSize': {
      'label': 'Size of other responses',
      'all': 7439
    },
    'DOMelementsCount': {
      'label': 'Total number of HTML element nodes',
      'all': 894
    },
    'DOMelementMaxDepth': {
      'label': 'Maximum level on nesting of HTML element node',
      'all': 13
    },
    'imagesWithoutDimensions': {
      'label': 'Number of <img> nodes without both width and height attribute',
      'all': 0
    },
    'DOMidDuplicated': {
      'label': 'Number of duplicated IDs found in DOM',
      'all': 0
    },
    'domains': {
      'label': 'Number of domains used to fetch the page',
      'all': 17
    },
    'maxRequestsPerDomain': {
      'label': 'Maximum number of requests fetched from a single domain',
      'all': 52
    },
    'medianRequestsPerDomain': {
      'label': 'Median of requests fetched from each domain',
      'all': 1
    },
    'assetsNotGzipped': {
      'label': 'Static assets that were not gzipped',
      'all': 10
    },
    'bodyHTMLSize': {
      'label': 'The size of body tag content (document.body.innerHTML.length)',
      'all': 321684
    }
  }
}
