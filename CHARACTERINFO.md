# API Endpoints
* [User Info](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#user-info)
* [Tickets](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#tickets)
* [Unread Commissions](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#unread-commissions)
* [Unread Notifications](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#unread-notifications)
* [Favorites](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#favorites)
* [Follower Activity](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#follower-activity)
* [Character History](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#character-history)
* [Following](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#following)
* [Followers](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#followers)
* [Stats](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#stats)

# User Info
Method: GET

Endpoint: https://beta.furrynetwork.com/api/user

Response:
```
{ id: 42169,
  email: 'foo@bar.com',
  last_login: 1468830395,
  created: 1468740013,
  enabled: true,
  verified: true,
  birthdate: '1988-12-19 00:00:00',
  rating: 0,
  addresses: null,
  character_ids: [ '49295' ],
  joined_roles: null,
  points: null,
  current_character_id: 49295,
  roles: [],
  characters:
   [ { id: 49295,
       name: 'testfnapi',
       display_name: 'testfnapi2',
       default_character: true,
       private: false,
       noindex: false,
       avatar: 'te/testfnapi/avatar/2016/07/0b19d20dc6e7baa2cde21b9cc9f67a4d.png',
       avatar_explicit: 0,
       banner: 'te/testfnapi/banner/2016/07/07ac82615d13db1ea8f5aa0eccb36527.png',
       banner_explicit: 0,
       staff: false,
       deleted: null,
       last_login: '2016-07-18 08:26:35',
       accepting_commissions: false,
       pricesheet: null,
       pricesheet_instructions: null,
       admin_block: false,
       ticket_id: null,
       points: null,
       promotes: 0,
       enabled: true,
       isAuthenticatedUser: false,
       following: false,
       followingCommissions: false,
       avatars: [Object],
       banners: [Object],
       blacklist: [],
       interests: [] } ],
  isUnderage: false,
  blacklist: [],
  interests: [],
  blocked: [],
  muted: [],
  emailChange: false }
```

# Tickets
Method: GET

Endpoint: https://beta.furrynetwork.com/api/tickets/character


# Unread Comissions
Method: GET

Endpoint: https://beta.furrynetwork.com/api/commissions/unread

Response:
```
{ incoming: 0, outgoing: 0 }
```

# Unread Notifications
Method: GET

Endpoint: https://beta.furrynetwork.com/api/notifications

Response:
```
{ unread: 0, notifications: [] }
```

# Favorites

Method: GET

Endpoint: https://beta.furrynetwork.com/api/search/favorites

Query ?types:
> artwork,
multimedia,
	photo,
	story

Example URL: https://beta.furrynetwork.com/api/search/favorites?types%5B%5D=artwork&types%5B%5D=multimedia&types%5B%5D=photo&types%5B%5D=story

Response:
```
{ hits:
   [ { _index: 'submissions',
       _type: 'artwork',
       _id: '1249749',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'multimedia',
       _id: '2933',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '1246102',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'photo',
       _id: '52874',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '771882',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '441597',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '524720',
       _score: 1,
       _source: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '211793',
       _score: 1,
       _source: [Object] } ],
  tags: [],
  total: 8 }
```

# Follower Activity
Method: GET

Endpoint: https://beta.furrynetwork.com/api/search/following

Query ?types:
> artwork,
multimedia,
	photo,
	story

  Example URL: https://beta.furrynetwork.com/api/search/following?types%5B%5D=artwork&types%5B%5D=multimedia&types%5B%5D=photo&types%5B%5D=story

  Response:
  ```
  { hits:
   [ { _index: 'submissions',
       _type: 'artwork',
       _id: '1266604',
       _score: null,
       _source: [Object],
       sort: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '1266603',
       _score: null,
       _source: [Object],
       sort: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '1263074',
       _score: null,
       _source: [Object],
       sort: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '1254326',
       _score: null,
       _source: [Object],
       sort: [Object] },
     { _index: 'submissions',
       _type: 'artwork',
       _id: '1258173',
       _score: null,
       _source: [Object],
       sort: [Object] },
  tags: [],
  total: 4591 }
  ```

  # Character History
Method: GET

Endpoint: https://beta.furrynetwork.com/api/activity/"CharacterNameHere"/history

Response:
```
{ activities:
   [ { id: 1543540,
       character_id: 1768,
       type: 3,
       source_id: 1266604,
       parent_id: 1266604,
       parent_type: 'artwork',
       created: '2016-07-18 06:55:16',
       character: [Object],
       parent: [Object] },
     { id: 1543536,
       character_id: 4729,
       type: 3,
       source_id: 1266603,
       parent_id: 1266603,
       parent_type: 'artwork',
       created: '2016-07-18 06:53:25',
       character: [Object],
       parent: [Object] },
     { id: 1540671,
       character_id: 4729,
       type: 2,
       source_id: 170826,
       parent_id: 1264511,
       parent_type: 'artwork',
       created: '2016-07-17 07:53:57',
       character: [Object],
       parent: [Object] },
  total: 7166,
  lastViewed: '2016-07-18T08:16:04Z' }
```

# Following
Method: GET

Endpoint: https://beta.furrynetwork.com/api/character/"CharacterNameHere"/following

Response:
```
{ total: 31,
  characters:
   [ { id: 510,
       name: 'nummynumz',
       display_name: 'nummynumz',
       default_character: false,
       private: false,
       noindex: false,
       avatar: 'nu/nummynumz/avatar/2015/10/9e047a8e6987575f84b230d24c2c3c41.png',
       avatar_explicit: 0,
       banner: 'nu/nummynumz/banner/2015/10/deca9a7c706dd05141201e025a8c79dc.png',
       banner_explicit: 0,
       staff: false,
       deleted: null,
       last_login: '2016-07-13 21:54:20',
       accepting_commissions: false,
       pricesheet: null,
       pricesheet_instructions: 'Vore icons: $20 (anything not a mawshot)\nMawshot Icons: $30\nExample\n\nMawshot: $50-55 Example\nSmall character in Maw, Headshot of Predator: $80 Example\nCharacter in belly: $90 Example\n\nFullbod of Pred, cutaway of Prey in belly/throat: $125 Example\n\n+$10 charge for every pair of full size wings.\n\nSketches:\n-1 Fullbody Character Sketch $40, +$25 for an additional character, +$10 for any pair of wings.\n\n-$30 for a Halfbody Character Sketch, +$20 for an additional half body character, +$10 any pair of wings\n\n-$25 for a headshot of a character with maw detail/ect, or just $15 without much detail.\n\nTo add color:\n+$20 for inks and flats\n+$40-50 to get inks, flats and full shading. Price depends on image complexity.\n\n\nNew commission type!\n\nComics: Done in a colored sketch style. Implied backgrounds included.\nEach panel is $50-60, minimum of 4 panels per page. I\'ll be veeeery picky about who I pick for comic commissions! This has just been requested so often, I\'m willing to give it a shot.\nExample: http://www.furaffinity.net/view/16448153/',
       admin_block: false,
       ticket_id: null,
       points: null,
       promotes: 192,
       enabled: true,
       isAuthenticatedUser: false,
       following: true,
       followingCommissions: false,
       avatars: [Object],
       banners: [Object],
       followers: 759 },
     ]
   }
```

# Followers
Method: GET

Endpoint: https://beta.furrynetwork.com/api/character/"CharacterNameHere"/followers

Response:
```
{ total: 3,
  characters:
   [ { id: 8336,
       name: 'tunga_the_wolf',
       display_name: 'Tunga_the_wolf',
       default_character: true,
       private: false,
       noindex: false,
       avatar: 'tu/tunga_the_wolf/avatar/2016/02/344f39477c424b63cebcd74a8464c7bf.jpg',
       avatar_explicit: 0,
       banner: null,
       banner_explicit: 0,
       staff: false,
       deleted: null,
       last_login: '2016-07-12 20:54:49',
       accepting_commissions: false,
       pricesheet: null,
       pricesheet_instructions: null,
       admin_block: false,
       ticket_id: null,
       points: null,
       promotes: 0,
       enabled: true,
       isAuthenticatedUser: false,
       following: true,
       followingCommissions: false,
       avatars: [Object],
       banners: [],
       followers: 6 },
 ] }
```

# Stats
Method: GET

Endpoint: https://beta.furrynetwork.com/api/character/"CharacterNameHere"/stats

Response:
```
{ favorites: { total: 7 },
  followers: { characters: [ [Object], [Object], [Object] ], total: 3 },
  following:
   { characters:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     total: 31 } }
```
