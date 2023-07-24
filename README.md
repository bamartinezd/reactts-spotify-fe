Please clone and type *_npm i_*

To install all dependencies from *_package.json_*

after that type and execute *_npm run build_* to build or *_npm start_* to open a browser and execute.

## Authentication with authorization code

https://accounts.spotify.com/authorize
	?response_type=code
	&client_id=a4819256614348ae8aead5defa741c51
	&scope=user-read-private%20user-read-email
	&redirect_uri=http%3A%2F%2Flocalhost%3A8888%2F
	&state=qcj5Bc2cFilznrbI

## Authentication with client credentials

	curl -X POST 'https://accounts.spotify.com/api/token' \
	-H "Authorization: Basic YTQ4MTkyNTY2MTQzNDhhZThhZWFkNWRlZmE3NDFjNTE6ODViZTgzN2UyMzFhNDRmMjgxNDQ5MTRmYTgyOGQzYjU=" \
	-d 'grant_type=client_credentials'

## Functionality after the Auth

1. Get Followed Artists (Needs Auth scope "user-read-private")
	curl --request GET \
	--url 'https://api.spotify.com/v1/me/following?type=artist' \
	--header 'Authorization: Bearer BQAtR3MMOkw1yL5-whs_3smMHu4zjYK6tr7PVMJCLMDtdQGJwdoJoHLgn9ZS7rbixid78eIxMnLdLRKzYbmn9qBPcBEyxmP9y9Atk_fTVGyrmowburw'

2. Get more Artist's info
	curl --request GET \
  --url 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6' \
  --header 'Authorization: Bearer BQDpwx3tfMTpehCozWuDQo2p2tbqVcS2txUrTXRsgiLwRNXSb4SIQRaZZgwdxsonIBRl_-8uGktDFxwQB5NqdvwFfjNwN8XdsidbZIGFt92IYop7r58'

3. get albums by artist (id, include_groups, market, limit, offset)
  curl --request GET \
  --url https://api.spotify.com/v1/artists/5LCDv4TvYRQD5ehflOBEh4/albums \
  --header 'Authorization: Bearer BQDpwx3tfMTpehCozWuDQo2p2tbqVcS2txUrTXRsgiLwRNXSb4SIQRaZZgwdxsonIBRl_-8uGktDFxwQB5NqdvwFfjNwN8XdsidbZIGFt92IYop7r58'

4. Get tracks by album (albumId,market,limit,offset)
	curl --request GET \
  --url https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks \
  --header 'Authorization: Bearer BQDpwx3tfMTpehCozWuDQo2p2tbqVcS2txUrTXRsgiLwRNXSb4SIQRaZZgwdxsonIBRl_-8uGktDFxwQB5NqdvwFfjNwN8XdsidbZIGFt92IYop7r58'