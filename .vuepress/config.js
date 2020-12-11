module.exports = {
  "title": "Rocky Linux Taiwan",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "RSS",
        "link": "/rss.xml",
        "icon": "reco-rss",
      },
      {
        "text": "Links",
        "icon": "reco-menu",
        "items": [
          {
            "text": "官方網站",
            "link": "https://rockylinux.org",
            "icon": "reco-home"
          },
          {
            "text": "Twitter",
            "link": "https://twitter.com/rocky_linux",
            "icon": "reco-twitter"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/rocky-linux/rocky",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 1,
        "text": "Category"
      },
      "tag": {
        "location": 2,
        "text": "Tag"
      }
    },
    "friendLink": [],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Rocky Linux Taiwan",
    "authorAvatar": "/logo.png",
    "record": "",
    "startYear": "2020"
  },
  "markdown": {
    // options for markdown-it-anchor
    "anchor": { "permalink": false },
    // options for markdown-it-toc
    "toc": { "includeLevel": [1, 2] },
  },
  "plugins": [
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        'site_url': 'https://rockylinux.tw'
      }
    ]
  ]
}