# How to get a bearer token?

Send a *POST* request to https://beta.furrynetwork.com/api/oauth/token


x-www-form-urlencoded:
```
username: "email here"
password: "password here"
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
