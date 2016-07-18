# Conversations
* [Conversation List](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#conversation-list)
* [Send a Message](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#send-a-message)
* [Get Information About A Conversation](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md#get-information-about-a-conversation)

# Conversation List
Method: GET

Endpoint: https://beta.furrynetwork.com/api/conversations/(Character)

Response:
```
[ { id: 4342,
    from_character_id: 28002,
    to_character_id: 49295,
    created: '2016-07-17 07:21:45',
    updated: '2016-07-17 07:27:37',
    message: 'gg',
    ticket_id: null,
    unread: 0,
    character:
     { id: 49295,
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
       last_login: '2016-07-18 22:41:52',
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
       banners: [Object] } } ]
```

# Send a Message
Method: POST

Endpoint: https://beta.furrynetwork.com/api/conversations/(From)/(To)

Body:
```
	{"message":"body"}
```

Response:
```
{ id: 31953,
  conversation_id: 4342,
  character_id: 28002,
  message: 'testing API Calls',
  created: '2016-07-18 22:46:44' }
```

# Get Information About A Conversation
Method: GET

Endpoint: https://beta.furrynetwork.com/api/conversation/(Character)/(ConversationID)

Response:
```
{ messages:
   [ { id: 31953,
       conversation_id: 4342,
       character_id: 28002,
       message: 'testing API Calls',
       created: '2016-07-18 22:46:44' },
     { id: 31952,
       conversation_id: 4342,
       character_id: 28002,
       message: 'testing API Calls',
       created: '2016-07-18 22:46:30' },
     { id: 31951,
       conversation_id: 4342,
       character_id: 28002,
       message: 'ow',
       created: '2016-07-18 22:45:35' },
     { id: 31715,
       conversation_id: 4342,
       character_id: 28002,
       message: 'gg',
       created: '2016-07-17 07:27:37' },
     { id: 31714,
       conversation_id: 4342,
       character_id: 28002,
       message: 'Test',
       created: '2016-07-17 07:21:45' } ],
  characters:
   { '28002':
      { id: 28002,
        name: 'connorthefox',
        display_name: 'connorthefox',
        default_character: true,
        private: false,
        noindex: false,
        avatar: 'co/connorthefox/avatar/2016/05/5150dbc357c9e809c9e2e0227e80e03d.png',
        avatar_explicit: 0,
        banner: 'co/connorthefox/banner/2016/05/7605b41ef69b0d882b87840eadcc5671.png',
        banner_explicit: 0,
        staff: false,
        deleted: null,
        last_login: '2016-07-18 22:48:41',
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
        banners: [Object] },
     '49295':
      { id: 49295,
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
        last_login: '2016-07-18 22:41:52',
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
        banners: [Object] } } }
```
