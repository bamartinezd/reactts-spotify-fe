import { Artist } from "../Models/Artist";

const artist: Artist = {
    external_urls : {
      spotify : "https://open.spotify.com/artist/2CIMQHirSU0MQqyYHq0eOx"
    },
    followers : {
      href : null,
      total : 2817204
    },
    genres : [ "canadian electronic", "complextro", "edm", "electro house", "pop dance", "progressive house" ],
    href : "https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx",
    id : "2CIMQHirSU0MQqyYHq0eOx",
    images : [ {
      height : 640,
      url : "https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07",
      width : 640
    }, {
      height : 320,
      url : "https://i.scdn.co/image/ab67616100005174c5ceb05f152103b2b70d3b07",
      width : 320
    }, {
      height : 160,
      url : "https://i.scdn.co/image/ab6761610000f178c5ceb05f152103b2b70d3b07",
      width : 160
    } ],
    name : "deadmau5",
    popularity : 66,
    type : "artist",
    uri : "spotify:artist:2CIMQHirSU0MQqyYHq0eOx"
  }

  export default artist;