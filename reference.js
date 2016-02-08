module.exports = {
  'plugin': 'keepfast-contrib-phantomas',
  'sensors': {
    'notFound': {
      'label': 'Number of HTTP 404 responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '0',
        'condition': '=',
        'result': true,
        'unit': ''
      }]
    },
    'requests': {
      'label': 'Total number of HTTP requests',
      'criteria': [{
        'plataform': 'all',
        'expected': '99',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'httpsRequests': {
      'label': 'Total number of HTTPS requests',
      'criteria': [{
        'plataform': 'all',
        'expected': '99',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'bodySize': {
      'label': 'Size of the content of all responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '938159',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'contentLength': {
      'label': 'Size of the content of all responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '1165716',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'htmlCount': {
      'label': 'Number of HTML responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '10',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'htmlSize': {
      'label': 'Size of HTML responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '130824',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'cssCount': {
      'label': 'Number of CSS responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '8',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'cssSize': {
      'label': 'Size of CSS responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '76000',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'jsCount': {
      'label': 'Number of JS responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '22',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'jsSize': {
      'label': 'Size of JS responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '358000',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'imageCount': {
      'label': 'Number of image responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '54',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'imageSize': {
      'label': 'Size of image responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '1420000',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    },
    'webfontCount': {
      'label': 'Number of web font responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '3.1',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'webfontSize': {
      'label': 'Size of web font responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '120000',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]

    },
    'otherCount': {
      'label': 'Number of other responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '6',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'otherSize': {
      'label': 'Size of other responses',
      'criteria': [{
        'plataform': 'all',
        'expected': '7439',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]

    },
    'DOMelementsCount': {
      'label': 'Total number of HTML element nodes',
      'criteria': [{
        'plataform': 'all',
        'expected': '894',
        'condition': '<',
        'result': true,
        'unit': 'elements'
      }]
    },
    'DOMelementMaxDepth': {
      'label': 'Maximum level on nesting of HTML element node',
      'criteria': [{
        'plataform': 'all',
        'expected': '13',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'imagesWithoutDimensions': {
      'label': 'Number of <img> nodes without both width and height attribute',
      'criteria': [{
        'plataform': 'all',
        'expected': '0',
        'condition': '=',
        'result': true,
        'unit': ''
      }]
    },
    'DOMidDuplicated': {
      'label': 'Number of duplicated IDs found in DOM',
      'criteria': [{
        'plataform': 'all',
        'expected': '0',
        'condition': '=',
        'result': true,
        'unit': ''
      }]
    },
    'domains': {
      'label': 'Number of domains used to fetch the page',
      'criteria': [{
        'plataform': 'all',
        'expected': '17',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'maxRequestsPerDomain': {
      'label': 'Maximum number of requests fetched from a single domain',
      'criteria': [{
        'plataform': 'all',
        'expected': '52',
        'condition': '<',
        'result': true,
        'unit': ''
      }]
    },
    'assetsNotGzipped': {
      'label': 'Static assets that were not gzipped',
      'criteria': [{
        'plataform': 'all',
        'expected': '0',
        'condition': '=',
        'result': true,
        'unit': ''
      }]
    },
    'bodyHTMLSize': {
      'label': 'The size of body tag content (document.body.innerHTML.length)',
      'criteria': [{
        'plataform': 'all',
        'expected': '321684',
        'condition': '<',
        'result': true,
        'unit': 'bytes'
      }]
    }
  }
}
