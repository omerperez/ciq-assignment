
const HORIZONTAL_AD_SIZE = [
  [300, 250],
  [300, 800],
];

const VERTICAL_AD_SIZE = [
  [728, 90],
  [970, 250],
];

export const firstAdUnit = {
  slots: [
    {
      id: "sidebar-ad",
      path: "/19968336/header-bid-tag-1",
      sizes: HORIZONTAL_AD_SIZE,
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: HORIZONTAL_AD_SIZE,
            },
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: "13637470",
              },
            },
            {
              bidder: "33across",
              params: {
                siteId: "examplePub123",
                productId: "inview",
              },
            },
          ],
        },
      ],
    }, {
      id: "header-ad",
      path: "/144148308/LE-PARISIEN/SITE-DESKTOP/HOME",
      sizes: VERTICAL_AD_SIZE,
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: VERTICAL_AD_SIZE,
            },
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: 13144370,
              },
            },
          ],
        },
      ],
    }, {
      id: "footer-ad",
      path: "/19968336/header-bid-tag-1",
      sizes: VERTICAL_AD_SIZE,
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: VERTICAL_AD_SIZE,
            },
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: "13637474",
              },
            },
            {
              bidder: "33across",
              params: {
                siteId: "examplePub123",
                productId: "inview",
              },
            },
          ],
        },
      ],
    },
  ]
}

export const secondAdUnit = {
  slots: [
    {
      id: "sidebar-ad",
      path: "/144148308/LESECHOS_WEB/HOME/PAVE-1",
      sizes: HORIZONTAL_AD_SIZE,
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: HORIZONTAL_AD_SIZE,
            },
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: "13637470",
              },
            },
          ],
          debugging: {
            enabled: true,
            bids: [
              {
                cpm: 0.2,
              },
            ],
          },
        },
      ],
    },
    {
      id: "footer-ad",
      path: "/6355419/Travel/Europe/France/Paris",
      sizes: VERTICAL_AD_SIZE,
      prebid: [],
    },
    {
      id: "header-ad",
      path: "/144148308/LE-PARISIEN/SITE-DESKTOP/HOME",
      sizes: VERTICAL_AD_SIZE,
      prebid: [
        {
          mediaTypes: {
            banner: {
              sizes: VERTICAL_AD_SIZE,
            },
          },
          bids: [
            {
              bidder: "appnexus",
              params: {
                placementId: "13637474",
              },
            },
            {
              bidder: "33across",
              params: {
                siteId: "examplePub123",
                productId: "inview",
              },
            },
          ],
        },
      ],
    },

  ],
  customEvents: {
    blueBackground: {
      eventMessagePrefix: "BlueBackground:",
    },
  },

}
