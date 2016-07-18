# Table of Contents


* [How to Get Your Access Token](https://github.com/ConnorTheFox/FurryNetworkAPI#how-to-get-a-bearer-token)
  * [Using Your Access Token](https://github.com/ConnorTheFox/FurryNetworkAPI#using-your-access-token)
* Using FN's API
  * [Getting Information About A Character](https://github.com/ConnorTheFox/FurryNetworkAPI/blob/master/CHARACTERINFO.md)
  * Conversations
  * Account Settings
  * Updating a Character
  * Submissions
  * Getting Information About A Submission

# How to get a bearer token?

Send a **POST** request to https://beta.furrynetwork.com/api/oauth/token


x-www-form-urlencoded:
```
username: email here
password: password here
grant_type: password
client_type: 123
```

Response:
```
{"access_token":"ehdgf7684hyjkdfhn786shsjgj",
"expires_in":3600,
"token_type":"bearer",
"scope":null,
"refresh_token":"egfdg7dfgdfhgdfg632qgj0gfdvh534gfd5435fdg",
"user_id":12345}
```

# Using your access token
In your request make a header that looks like this,
```
authorization: Bearer access_token here
```
