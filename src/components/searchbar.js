import React from "react"
import {useState, useEffect} from "react"
import { useSelector } from "react-redux"
import {spotifyGet} from '../utilities/apiUtils.js'
const response = {
    "tracks": {
      "href": "https://api.spotify.com/v1/search?query=Vart+jag+mig+i+v%C3%A4rlden+v%C3%A4nder&type=track&market=SE&locale=sv-SE%2Csv%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20",
      "items": [
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5GkyGLEWLO3RNzZAmOZgLt"
            },
            "href": "https://api.spotify.com/v1/albums/5GkyGLEWLO3RNzZAmOZgLt",
            "id": "5GkyGLEWLO3RNzZAmOZgLt",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ae427f91828f26f16e62a6a1",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ae427f91828f26f16e62a6a1",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ae427f91828f26f16e62a6a1",
                "width": 64
              }
            ],
            "name": "Ett fel närmare rätt",
            "release_date": "2012-01-01",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:5GkyGLEWLO3RNzZAmOZgLt"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            }
          ],
          "disc_number": 1,
          "duration_ms": 212109,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1200107"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/7nLMZKhfkFZLr9rz4VyOpF"
          },
          "href": "https://api.spotify.com/v1/tracks/7nLMZKhfkFZLr9rz4VyOpF",
          "id": "7nLMZKhfkFZLr9rz4VyOpF",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder",
          "popularity": 64,
          "preview_url": "https://p.scdn.co/mp3-preview/79a3839c1e4f3739ebe0505e8088a3e37ad7be89?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 7,
          "type": "track",
          "uri": "spotify:track:7nLMZKhfkFZLr9rz4VyOpF"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7gImYoIXr9WeQBGLIpK6H1"
                },
                "href": "https://api.spotify.com/v1/artists/7gImYoIXr9WeQBGLIpK6H1",
                "id": "7gImYoIXr9WeQBGLIpK6H1",
                "name": "Blomster",
                "type": "artist",
                "uri": "spotify:artist:7gImYoIXr9WeQBGLIpK6H1"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/77wx9RzftwJ6XoP1nTQnOs"
            },
            "href": "https://api.spotify.com/v1/albums/77wx9RzftwJ6XoP1nTQnOs",
            "id": "77wx9RzftwJ6XoP1nTQnOs",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c36549e22b209e91de363575",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c36549e22b209e91de363575",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c36549e22b209e91de363575",
                "width": 64
              }
            ],
            "name": "Vart Jag Mig I Världen Vänder",
            "release_date": "2018-04-06",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:77wx9RzftwJ6XoP1nTQnOs"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7gImYoIXr9WeQBGLIpK6H1"
              },
              "href": "https://api.spotify.com/v1/artists/7gImYoIXr9WeQBGLIpK6H1",
              "id": "7gImYoIXr9WeQBGLIpK6H1",
              "name": "Blomster",
              "type": "artist",
              "uri": "spotify:artist:7gImYoIXr9WeQBGLIpK6H1"
            }
          ],
          "disc_number": 1,
          "duration_ms": 180000,
          "explicit": false,
          "external_ids": {
            "isrc": "SE5F81800301"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/341CwjRQmUpJM9GAkogOzV"
          },
          "href": "https://api.spotify.com/v1/tracks/341CwjRQmUpJM9GAkogOzV",
          "id": "341CwjRQmUpJM9GAkogOzV",
          "is_local": false,
          "is_playable": true,
          "name": "Vart Jag Mig I Världen Vänder",
          "popularity": 42,
          "preview_url": "https://p.scdn.co/mp3-preview/e0f75708a0de8aaeeceb73b8c7c6de366712663c?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:341CwjRQmUpJM9GAkogOzV"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/70Mtqx9XHaV0BQppBCnnjB"
                },
                "href": "https://api.spotify.com/v1/artists/70Mtqx9XHaV0BQppBCnnjB",
                "id": "70Mtqx9XHaV0BQppBCnnjB",
                "name": "Intim",
                "type": "artist",
                "uri": "spotify:artist:70Mtqx9XHaV0BQppBCnnjB"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/2EYa6AKXSmneUMSPgDb0Ai"
            },
            "href": "https://api.spotify.com/v1/albums/2EYa6AKXSmneUMSPgDb0Ai",
            "id": "2EYa6AKXSmneUMSPgDb0Ai",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273e833aa2ef52260ebbdd4e84c",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02e833aa2ef52260ebbdd4e84c",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851e833aa2ef52260ebbdd4e84c",
                "width": 64
              }
            ],
            "name": "16 Svenska hits på 6 minuter",
            "release_date": "2017-08-18",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:2EYa6AKXSmneUMSPgDb0Ai"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/70Mtqx9XHaV0BQppBCnnjB"
              },
              "href": "https://api.spotify.com/v1/artists/70Mtqx9XHaV0BQppBCnnjB",
              "id": "70Mtqx9XHaV0BQppBCnnjB",
              "name": "Intim",
              "type": "artist",
              "uri": "spotify:artist:70Mtqx9XHaV0BQppBCnnjB"
            }
          ],
          "disc_number": 1,
          "duration_ms": 363015,
          "explicit": false,
          "external_ids": {
            "isrc": "SE4W41700301"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4WCCkxdqDcIu6uP7b2yF5b"
          },
          "href": "https://api.spotify.com/v1/tracks/4WCCkxdqDcIu6uP7b2yF5b",
          "id": "4WCCkxdqDcIu6uP7b2yF5b",
          "is_local": false,
          "is_playable": true,
          "name": "16 Svenska hits på 6 minuter",
          "popularity": 49,
          "preview_url": "https://p.scdn.co/mp3-preview/079c70948a8e3e625d6999950df1207595604658?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:4WCCkxdqDcIu6uP7b2yF5b"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4v7EXvmI6QaJj5jAvmt2oe"
                },
                "href": "https://api.spotify.com/v1/artists/4v7EXvmI6QaJj5jAvmt2oe",
                "id": "4v7EXvmI6QaJj5jAvmt2oe",
                "name": "StudioMode",
                "type": "artist",
                "uri": "spotify:artist:4v7EXvmI6QaJj5jAvmt2oe"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/20LzhP9HADkKhfLKgOqfe6"
            },
            "href": "https://api.spotify.com/v1/albums/20LzhP9HADkKhfLKgOqfe6",
            "id": "20LzhP9HADkKhfLKgOqfe6",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273d28f124bcc9cfa8af017fe1b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02d28f124bcc9cfa8af017fe1b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851d28f124bcc9cfa8af017fe1b",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder",
            "release_date": "2020-06-05",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:20LzhP9HADkKhfLKgOqfe6"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4v7EXvmI6QaJj5jAvmt2oe"
              },
              "href": "https://api.spotify.com/v1/artists/4v7EXvmI6QaJj5jAvmt2oe",
              "id": "4v7EXvmI6QaJj5jAvmt2oe",
              "name": "StudioMode",
              "type": "artist",
              "uri": "spotify:artist:4v7EXvmI6QaJj5jAvmt2oe"
            }
          ],
          "disc_number": 1,
          "duration_ms": 275625,
          "explicit": false,
          "external_ids": {
            "isrc": "SEYOK2027440"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/0hPtDD53Bc1rD1iPPcvfvQ"
          },
          "href": "https://api.spotify.com/v1/tracks/0hPtDD53Bc1rD1iPPcvfvQ",
          "id": "0hPtDD53Bc1rD1iPPcvfvQ",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder",
          "popularity": 38,
          "preview_url": "https://p.scdn.co/mp3-preview/77555a2b110d7a32e55268449cb7af576f6834a0?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:0hPtDD53Bc1rD1iPPcvfvQ"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5S32jUs4dlmMUKF9Kqvwh5"
            },
            "href": "https://api.spotify.com/v1/albums/5S32jUs4dlmMUKF9Kqvwh5",
            "id": "5S32jUs4dlmMUKF9Kqvwh5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273be3f861455272870e81cfc2b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02be3f861455272870e81cfc2b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851be3f861455272870e81cfc2b",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder (Remixes)",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:5S32jUs4dlmMUKF9Kqvwh5"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1Yf3fs3eLssRoT9T326j8i"
              },
              "href": "https://api.spotify.com/v1/artists/1Yf3fs3eLssRoT9T326j8i",
              "id": "1Yf3fs3eLssRoT9T326j8i",
              "name": "047",
              "type": "artist",
              "uri": "spotify:artist:1Yf3fs3eLssRoT9T326j8i"
            }
          ],
          "disc_number": 1,
          "duration_ms": 198750,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1101009"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4obS06kVYaI9WMnrNooddI"
          },
          "href": "https://api.spotify.com/v1/tracks/4obS06kVYaI9WMnrNooddI",
          "id": "4obS06kVYaI9WMnrNooddI",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder - 047 Rädda Mig Remix",
          "popularity": 36,
          "preview_url": "https://p.scdn.co/mp3-preview/22260ca022870a72c8aa1b4a095256210b586a16?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:4obS06kVYaI9WMnrNooddI"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5S32jUs4dlmMUKF9Kqvwh5"
            },
            "href": "https://api.spotify.com/v1/albums/5S32jUs4dlmMUKF9Kqvwh5",
            "id": "5S32jUs4dlmMUKF9Kqvwh5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273be3f861455272870e81cfc2b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02be3f861455272870e81cfc2b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851be3f861455272870e81cfc2b",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder (Remixes)",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:5S32jUs4dlmMUKF9Kqvwh5"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7ngHgvOBZdRQb9ITJfLvdO"
              },
              "href": "https://api.spotify.com/v1/artists/7ngHgvOBZdRQb9ITJfLvdO",
              "id": "7ngHgvOBZdRQb9ITJfLvdO",
              "name": "The Very Best",
              "type": "artist",
              "uri": "spotify:artist:7ngHgvOBZdRQb9ITJfLvdO"
            }
          ],
          "disc_number": 1,
          "duration_ms": 264333,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1101002"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3yMBH81NtMhO3UnqzhSqOe"
          },
          "href": "https://api.spotify.com/v1/tracks/3yMBH81NtMhO3UnqzhSqOe",
          "id": "3yMBH81NtMhO3UnqzhSqOe",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder - The Very Best Remix",
          "popularity": 25,
          "preview_url": "https://p.scdn.co/mp3-preview/78a41891f7e8bc73c60f4dea652c67816319158c?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:3yMBH81NtMhO3UnqzhSqOe"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/295SPRt7YTtIPdYoMkkF7K"
                },
                "href": "https://api.spotify.com/v1/artists/295SPRt7YTtIPdYoMkkF7K",
                "id": "295SPRt7YTtIPdYoMkkF7K",
                "name": "ODZ",
                "type": "artist",
                "uri": "spotify:artist:295SPRt7YTtIPdYoMkkF7K"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1fCnXqOaucKYCUmf1cKj28"
            },
            "href": "https://api.spotify.com/v1/albums/1fCnXqOaucKYCUmf1cKj28",
            "id": "1fCnXqOaucKYCUmf1cKj28",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735600b275af70af0a8b1a6720",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025600b275af70af0a8b1a6720",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515600b275af70af0a8b1a6720",
                "width": 64
              }
            ],
            "name": "Dom kallar oss odz",
            "release_date": "2016-10-02",
            "release_date_precision": "day",
            "total_tracks": 6,
            "type": "album",
            "uri": "spotify:album:1fCnXqOaucKYCUmf1cKj28"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/295SPRt7YTtIPdYoMkkF7K"
              },
              "href": "https://api.spotify.com/v1/artists/295SPRt7YTtIPdYoMkkF7K",
              "id": "295SPRt7YTtIPdYoMkkF7K",
              "name": "ODZ",
              "type": "artist",
              "uri": "spotify:artist:295SPRt7YTtIPdYoMkkF7K"
            }
          ],
          "disc_number": 1,
          "duration_ms": 165714,
          "explicit": true,
          "external_ids": {
            "isrc": "SE3OH1622674"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/4wW7D0BnFystgJcf5KWkOs"
          },
          "href": "https://api.spotify.com/v1/tracks/4wW7D0BnFystgJcf5KWkOs",
          "id": "4wW7D0BnFystgJcf5KWkOs",
          "is_local": false,
          "is_playable": true,
          "name": "Mitt bland gatuljusen",
          "popularity": 41,
          "preview_url": "https://p.scdn.co/mp3-preview/7f3ee5a87f93e3059b7686947ef84ca5bd0d1ee5?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:4wW7D0BnFystgJcf5KWkOs"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5S32jUs4dlmMUKF9Kqvwh5"
            },
            "href": "https://api.spotify.com/v1/albums/5S32jUs4dlmMUKF9Kqvwh5",
            "id": "5S32jUs4dlmMUKF9Kqvwh5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273be3f861455272870e81cfc2b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02be3f861455272870e81cfc2b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851be3f861455272870e81cfc2b",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder (Remixes)",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:5S32jUs4dlmMUKF9Kqvwh5"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4TzSCfS4LS5SVChh2AB2wH"
              },
              "href": "https://api.spotify.com/v1/artists/4TzSCfS4LS5SVChh2AB2wH",
              "id": "4TzSCfS4LS5SVChh2AB2wH",
              "name": "Slagsmålsklubben",
              "type": "artist",
              "uri": "spotify:artist:4TzSCfS4LS5SVChh2AB2wH"
            }
          ],
          "disc_number": 1,
          "duration_ms": 271459,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1101001"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/54tpmZA40gZ3oVjXf0sesV"
          },
          "href": "https://api.spotify.com/v1/tracks/54tpmZA40gZ3oVjXf0sesV",
          "id": "54tpmZA40gZ3oVjXf0sesV",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder - Slagsmålsklubben Pianogymnastik Remix",
          "popularity": 19,
          "preview_url": "https://p.scdn.co/mp3-preview/bbf0be1fe9eccb8f99be8bef7240ee50abb499c8?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:54tpmZA40gZ3oVjXf0sesV"
        },
        {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
                },
                "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
                "id": "3cMEiDsx9VpGvF71hUGswS",
                "name": "Eddie Meduza",
                "type": "artist",
                "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/11GI2hWnNTUSDoILbZkVYg"
            },
            "href": "https://api.spotify.com/v1/albums/11GI2hWnNTUSDoILbZkVYg",
            "id": "11GI2hWnNTUSDoILbZkVYg",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fb6d79fec4cf5ed0b175c0c6",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fb6d79fec4cf5ed0b175c0c6",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fb6d79fec4cf5ed0b175c0c6",
                "width": 64
              }
            ],
            "name": "Eddie Meduzas Samlade Verk",
            "release_date": "1994-01-01",
            "release_date_precision": "day",
            "total_tracks": 25,
            "type": "album",
            "uri": "spotify:album:11GI2hWnNTUSDoILbZkVYg"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
              },
              "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
              "id": "3cMEiDsx9VpGvF71hUGswS",
              "name": "Eddie Meduza",
              "type": "artist",
              "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
            }
          ],
          "disc_number": 1,
          "duration_ms": 209666,
          "explicit": false,
          "external_ids": {
            "isrc": "SEPQM0611933"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1TGNEbCpVPCy9TiCt34p2L"
          },
          "href": "https://api.spotify.com/v1/tracks/1TGNEbCpVPCy9TiCt34p2L",
          "id": "1TGNEbCpVPCy9TiCt34p2L",
          "is_local": false,
          "is_playable": true,
          "name": "Runke ball",
          "popularity": 38,
          "preview_url": "https://p.scdn.co/mp3-preview/725da1d66668201c5f9f1c8e87be74195537bfa5?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:1TGNEbCpVPCy9TiCt34p2L"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7G2hJ8hTQsyYWjYklffDNU"
            },
            "href": "https://api.spotify.com/v1/albums/7G2hJ8hTQsyYWjYklffDNU",
            "id": "7G2hJ8hTQsyYWjYklffDNU",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273f7b62e8cb59e518e2d4dada4",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02f7b62e8cb59e518e2d4dada4",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851f7b62e8cb59e518e2d4dada4",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder",
            "release_date": "2011-07-01",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:7G2hJ8hTQsyYWjYklffDNU"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            }
          ],
          "disc_number": 1,
          "duration_ms": 212109,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1100401"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5thSFXj0vv7r8wLr50pxxh"
          },
          "href": "https://api.spotify.com/v1/tracks/5thSFXj0vv7r8wLr50pxxh",
          "id": "5thSFXj0vv7r8wLr50pxxh",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder",
          "popularity": 26,
          "preview_url": "https://p.scdn.co/mp3-preview/79a3839c1e4f3739ebe0505e8088a3e37ad7be89?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:5thSFXj0vv7r8wLr50pxxh"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/72T7KgrFiMTgXRWxfuDn5o"
                },
                "href": "https://api.spotify.com/v1/artists/72T7KgrFiMTgXRWxfuDn5o",
                "id": "72T7KgrFiMTgXRWxfuDn5o",
                "name": "Erato",
                "type": "artist",
                "uri": "spotify:artist:72T7KgrFiMTgXRWxfuDn5o"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/1CouXJCd3sL2308Lmp1Liy"
            },
            "href": "https://api.spotify.com/v1/albums/1CouXJCd3sL2308Lmp1Liy",
            "id": "1CouXJCd3sL2308Lmp1Liy",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737ec6c9cca19e5d6329e548a4",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027ec6c9cca19e5d6329e548a4",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517ec6c9cca19e5d6329e548a4",
                "width": 64
              }
            ],
            "name": "Grammismedley - Årets Låt 2012",
            "release_date": "2012-02-14",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:1CouXJCd3sL2308Lmp1Liy"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/72T7KgrFiMTgXRWxfuDn5o"
              },
              "href": "https://api.spotify.com/v1/artists/72T7KgrFiMTgXRWxfuDn5o",
              "id": "72T7KgrFiMTgXRWxfuDn5o",
              "name": "Erato",
              "type": "artist",
              "uri": "spotify:artist:72T7KgrFiMTgXRWxfuDn5o"
            }
          ],
          "disc_number": 1,
          "duration_ms": 203910,
          "explicit": false,
          "external_ids": {
            "isrc": "SEVJH1200201"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6AJuPPtbMxfcY902YcA7TQ"
          },
          "href": "https://api.spotify.com/v1/tracks/6AJuPPtbMxfcY902YcA7TQ",
          "id": "6AJuPPtbMxfcY902YcA7TQ",
          "is_local": false,
          "is_playable": true,
          "name": "Grammismedley - Årets Låt 2012 - (Baksmälla / Vart Jag Mig I Världen Vänder / Om Sanningen Ska Fram (Vill Du Ligga Med Mig?) / Popular / Mikrofonkåt / Save the World / Resten Av Ditt Liv / Levels / White Light Moment / Jag Kommer)",
          "popularity": 20,
          "preview_url": "https://p.scdn.co/mp3-preview/bdc6ddccd6864c8235bf21d6e4ad23557bf910a7?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:6AJuPPtbMxfcY902YcA7TQ"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3uFum0NCM1PtmCO0MwsOAt"
                },
                "href": "https://api.spotify.com/v1/artists/3uFum0NCM1PtmCO0MwsOAt",
                "id": "3uFum0NCM1PtmCO0MwsOAt",
                "name": "Carola",
                "type": "artist",
                "uri": "spotify:artist:3uFum0NCM1PtmCO0MwsOAt"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5iNMs1y6w5DMwlmxkzyRBa"
            },
            "href": "https://api.spotify.com/v1/albums/5iNMs1y6w5DMwlmxkzyRBa",
            "id": "5iNMs1y6w5DMwlmxkzyRBa",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273753611f7bb799963244d0f6f",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02753611f7bb799963244d0f6f",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851753611f7bb799963244d0f6f",
                "width": 64
              }
            ],
            "name": "Sov på min arm",
            "release_date": "2001-02-14",
            "release_date_precision": "day",
            "total_tracks": 19,
            "type": "album",
            "uri": "spotify:album:5iNMs1y6w5DMwlmxkzyRBa"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3uFum0NCM1PtmCO0MwsOAt"
              },
              "href": "https://api.spotify.com/v1/artists/3uFum0NCM1PtmCO0MwsOAt",
              "id": "3uFum0NCM1PtmCO0MwsOAt",
              "name": "Carola",
              "type": "artist",
              "uri": "spotify:artist:3uFum0NCM1PtmCO0MwsOAt"
            }
          ],
          "disc_number": 1,
          "duration_ms": 88946,
          "explicit": false,
          "external_ids": {
            "isrc": "NOFKF0103180"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3YGkj3Uq0YKH1hhnohoEHv"
          },
          "href": "https://api.spotify.com/v1/tracks/3YGkj3Uq0YKH1hhnohoEHv",
          "id": "3YGkj3Uq0YKH1hhnohoEHv",
          "is_local": false,
          "is_playable": true,
          "name": "Gud som haver barnen kär",
          "popularity": 33,
          "preview_url": null,
          "track_number": 18,
          "type": "track",
          "uri": "spotify:track:3YGkj3Uq0YKH1hhnohoEHv"
        },
        {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0kWWPlF3hudGPbahg5Xt9n"
                },
                "href": "https://api.spotify.com/v1/artists/0kWWPlF3hudGPbahg5Xt9n",
                "id": "0kWWPlF3hudGPbahg5Xt9n",
                "name": "Vikingarna",
                "type": "artist",
                "uri": "spotify:artist:0kWWPlF3hudGPbahg5Xt9n"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4ORc1m2MTym9YXt29Bhrzv"
            },
            "href": "https://api.spotify.com/v1/albums/4ORc1m2MTym9YXt29Bhrzv",
            "id": "4ORc1m2MTym9YXt29Bhrzv",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2739f4f7e61f99d392fabd6a5cd",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e029f4f7e61f99d392fabd6a5cd",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048519f4f7e61f99d392fabd6a5cd",
                "width": 64
              }
            ],
            "name": "Vikingarna - Guldkorn",
            "release_date": "2000",
            "release_date_precision": "year",
            "total_tracks": 40,
            "type": "album",
            "uri": "spotify:album:4ORc1m2MTym9YXt29Bhrzv"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0kWWPlF3hudGPbahg5Xt9n"
              },
              "href": "https://api.spotify.com/v1/artists/0kWWPlF3hudGPbahg5Xt9n",
              "id": "0kWWPlF3hudGPbahg5Xt9n",
              "name": "Vikingarna",
              "type": "artist",
              "uri": "spotify:artist:0kWWPlF3hudGPbahg5Xt9n"
            }
          ],
          "disc_number": 1,
          "duration_ms": 229959,
          "explicit": false,
          "external_ids": {
            "isrc": "SEPQM0610350"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1SJ3MtEp4BvuJVZXptJ1op"
          },
          "href": "https://api.spotify.com/v1/tracks/1SJ3MtEp4BvuJVZXptJ1op",
          "id": "1SJ3MtEp4BvuJVZXptJ1op",
          "is_local": false,
          "is_playable": true,
          "name": "Santa Maria",
          "popularity": 30,
          "preview_url": "https://p.scdn.co/mp3-preview/d657fa842a9e5f9167b3bcb8bfb29e5733699960?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 4,
          "type": "track",
          "uri": "spotify:track:1SJ3MtEp4BvuJVZXptJ1op"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/00PLVqZ4oaOmbI4lacLUBO"
                },
                "href": "https://api.spotify.com/v1/artists/00PLVqZ4oaOmbI4lacLUBO",
                "id": "00PLVqZ4oaOmbI4lacLUBO",
                "name": "Stiftelsen",
                "type": "artist",
                "uri": "spotify:artist:00PLVqZ4oaOmbI4lacLUBO"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/02l3IMmYpgTPixONhItSBp"
            },
            "href": "https://api.spotify.com/v1/albums/02l3IMmYpgTPixONhItSBp",
            "id": "02l3IMmYpgTPixONhItSBp",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fcb40ffbc7c5d2f20b62b0aa",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fcb40ffbc7c5d2f20b62b0aa",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fcb40ffbc7c5d2f20b62b0aa",
                "width": 64
              }
            ],
            "name": "Ljungaverk",
            "release_date": "2012-01-01",
            "release_date_precision": "day",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:02l3IMmYpgTPixONhItSBp"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/00PLVqZ4oaOmbI4lacLUBO"
              },
              "href": "https://api.spotify.com/v1/artists/00PLVqZ4oaOmbI4lacLUBO",
              "id": "00PLVqZ4oaOmbI4lacLUBO",
              "name": "Stiftelsen",
              "type": "artist",
              "uri": "spotify:artist:00PLVqZ4oaOmbI4lacLUBO"
            }
          ],
          "disc_number": 1,
          "duration_ms": 207333,
          "explicit": false,
          "external_ids": {
            "isrc": "SEVST1200301"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5hDowhxXBk5POQppBYONeO"
          },
          "href": "https://api.spotify.com/v1/tracks/5hDowhxXBk5POQppBYONeO",
          "id": "5hDowhxXBk5POQppBYONeO",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag än går",
          "popularity": 59,
          "preview_url": null,
          "track_number": 8,
          "type": "track",
          "uri": "spotify:track:5hDowhxXBk5POQppBYONeO"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7gImYoIXr9WeQBGLIpK6H1"
                },
                "href": "https://api.spotify.com/v1/artists/7gImYoIXr9WeQBGLIpK6H1",
                "id": "7gImYoIXr9WeQBGLIpK6H1",
                "name": "Blomster",
                "type": "artist",
                "uri": "spotify:artist:7gImYoIXr9WeQBGLIpK6H1"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7cAVPCekYgpH3O1KX2c24h"
            },
            "href": "https://api.spotify.com/v1/albums/7cAVPCekYgpH3O1KX2c24h",
            "id": "7cAVPCekYgpH3O1KX2c24h",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27389548b2f33de6d8df53b6dc4",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0289548b2f33de6d8df53b6dc4",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485189548b2f33de6d8df53b6dc4",
                "width": 64
              }
            ],
            "name": "Vart Jag Mig I Världen Vänder (Remixes)",
            "release_date": "2018-07-27",
            "release_date_precision": "day",
            "total_tracks": 2,
            "type": "album",
            "uri": "spotify:album:7cAVPCekYgpH3O1KX2c24h"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2OBR7i8dr8XxExNgvDucDf"
              },
              "href": "https://api.spotify.com/v1/artists/2OBR7i8dr8XxExNgvDucDf",
              "id": "2OBR7i8dr8XxExNgvDucDf",
              "name": "RECO",
              "type": "artist",
              "uri": "spotify:artist:2OBR7i8dr8XxExNgvDucDf"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7gImYoIXr9WeQBGLIpK6H1"
              },
              "href": "https://api.spotify.com/v1/artists/7gImYoIXr9WeQBGLIpK6H1",
              "id": "7gImYoIXr9WeQBGLIpK6H1",
              "name": "Blomster",
              "type": "artist",
              "uri": "spotify:artist:7gImYoIXr9WeQBGLIpK6H1"
            }
          ],
          "disc_number": 1,
          "duration_ms": 203478,
          "explicit": false,
          "external_ids": {
            "isrc": "SE5F81800801"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/15Uue8OeuuCHupBeTBjsGL"
          },
          "href": "https://api.spotify.com/v1/tracks/15Uue8OeuuCHupBeTBjsGL",
          "id": "15Uue8OeuuCHupBeTBjsGL",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder - RECO Remix",
          "popularity": 12,
          "preview_url": "https://p.scdn.co/mp3-preview/e2d7b8a200fcc780db3489ea9dad33eed3871e71?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:15Uue8OeuuCHupBeTBjsGL"
        },
        {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
                },
                "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
                "id": "3cMEiDsx9VpGvF71hUGswS",
                "name": "Eddie Meduza",
                "type": "artist",
                "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/61YtIcx4S60zeiYe45rqgG"
            },
            "href": "https://api.spotify.com/v1/albums/61YtIcx4S60zeiYe45rqgG",
            "id": "61YtIcx4S60zeiYe45rqgG",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b280a7d3e5473bf1576606e7",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b280a7d3e5473bf1576606e7",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b280a7d3e5473bf1576606e7",
                "width": 64
              }
            ],
            "name": "En jävla massa hits",
            "release_date": "2014-06-04",
            "release_date_precision": "day",
            "total_tracks": 52,
            "type": "album",
            "uri": "spotify:album:61YtIcx4S60zeiYe45rqgG"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
              },
              "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
              "id": "3cMEiDsx9VpGvF71hUGswS",
              "name": "Eddie Meduza",
              "type": "artist",
              "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
            }
          ],
          "disc_number": 1,
          "duration_ms": 207866,
          "explicit": true,
          "external_ids": {
            "isrc": "SEBGA1200463"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6EpiFTKPPvaQOA3ICcG9Vh"
          },
          "href": "https://api.spotify.com/v1/tracks/6EpiFTKPPvaQOA3ICcG9Vh",
          "id": "6EpiFTKPPvaQOA3ICcG9Vh",
          "is_local": false,
          "is_playable": true,
          "name": "Runke ball",
          "popularity": 28,
          "preview_url": "https://p.scdn.co/mp3-preview/a20d4de685365eb900d393eb2f315213a2844f28?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 28,
          "type": "track",
          "uri": "spotify:track:6EpiFTKPPvaQOA3ICcG9Vh"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
                },
                "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
                "id": "0NyrvUybTePmsuED5vZi4G",
                "name": "Den svenska björnstammen",
                "type": "artist",
                "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5S32jUs4dlmMUKF9Kqvwh5"
            },
            "href": "https://api.spotify.com/v1/albums/5S32jUs4dlmMUKF9Kqvwh5",
            "id": "5S32jUs4dlmMUKF9Kqvwh5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273be3f861455272870e81cfc2b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02be3f861455272870e81cfc2b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851be3f861455272870e81cfc2b",
                "width": 64
              }
            ],
            "name": "Vart jag mig i världen vänder (Remixes)",
            "release_date": "2011-01-01",
            "release_date_precision": "day",
            "total_tracks": 18,
            "type": "album",
            "uri": "spotify:album:5S32jUs4dlmMUKF9Kqvwh5"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/0NyrvUybTePmsuED5vZi4G"
              },
              "href": "https://api.spotify.com/v1/artists/0NyrvUybTePmsuED5vZi4G",
              "id": "0NyrvUybTePmsuED5vZi4G",
              "name": "Den svenska björnstammen",
              "type": "artist",
              "uri": "spotify:artist:0NyrvUybTePmsuED5vZi4G"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3SZ8ar93t0KaCd0WCBYoAN"
              },
              "href": "https://api.spotify.com/v1/artists/3SZ8ar93t0KaCd0WCBYoAN",
              "id": "3SZ8ar93t0KaCd0WCBYoAN",
              "name": "Lovisa Negga",
              "type": "artist",
              "uri": "spotify:artist:3SZ8ar93t0KaCd0WCBYoAN"
            }
          ],
          "disc_number": 1,
          "duration_ms": 202953,
          "explicit": false,
          "external_ids": {
            "isrc": "SE2UI1101018"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2WL72l9YOO8G20lZPUnMw4"
          },
          "href": "https://api.spotify.com/v1/tracks/2WL72l9YOO8G20lZPUnMw4",
          "id": "2WL72l9YOO8G20lZPUnMw4",
          "is_local": false,
          "is_playable": true,
          "name": "Vart jag mig i världen vänder - Lovisa Negga Världen Med Tomma Händer Remix",
          "popularity": 11,
          "preview_url": "https://p.scdn.co/mp3-preview/998a7bebaa4f3f6ca4a1b4ddea3a358319244875?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 18,
          "type": "track",
          "uri": "spotify:track:2WL72l9YOO8G20lZPUnMw4"
        },
        {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
                },
                "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
                "id": "3cMEiDsx9VpGvF71hUGswS",
                "name": "Eddie Meduza",
                "type": "artist",
                "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5BhJMZ73wFxaMRwi69wJC9"
            },
            "href": "https://api.spotify.com/v1/albums/5BhJMZ73wFxaMRwi69wJC9",
            "id": "5BhJMZ73wFxaMRwi69wJC9",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2730e5de881b12cf91745bb35a8",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e020e5de881b12cf91745bb35a8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048510e5de881b12cf91745bb35a8",
                "width": 64
              }
            ],
            "name": "E. Hitler på dansrotundan",
            "release_date": "1987-05-04",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:5BhJMZ73wFxaMRwi69wJC9"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
              },
              "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
              "id": "3cMEiDsx9VpGvF71hUGswS",
              "name": "Eddie Meduza",
              "type": "artist",
              "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
            }
          ],
          "disc_number": 1,
          "duration_ms": 210000,
          "explicit": true,
          "external_ids": {
            "isrc": "SEBGA1200463"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/00JvMQmOtUIC8lPWPQepr6"
          },
          "href": "https://api.spotify.com/v1/tracks/00JvMQmOtUIC8lPWPQepr6",
          "id": "00JvMQmOtUIC8lPWPQepr6",
          "is_local": false,
          "is_playable": true,
          "name": "Runke ball",
          "popularity": 25,
          "preview_url": "https://p.scdn.co/mp3-preview/7e283f41ca74646a02413f28d7ca3521d64a106b?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 9,
          "type": "track",
          "uri": "spotify:track:00JvMQmOtUIC8lPWPQepr6"
        },
        {
          "album": {
            "album_type": "compilation",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                },
                "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                "id": "0LyfQWJT6nXafLPZqxe9Of",
                "name": "Blandade Artister",
                "type": "artist",
                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5ZZdCuph0g7qxFIPZXQ255"
            },
            "href": "https://api.spotify.com/v1/albums/5ZZdCuph0g7qxFIPZXQ255",
            "id": "5ZZdCuph0g7qxFIPZXQ255",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738d08929236a0b8cacb2f93a1",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028d08929236a0b8cacb2f93a1",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518d08929236a0b8cacb2f93a1",
                "width": 64
              }
            ],
            "name": "Raggarbilshits, Vol. 3 - Raggarrock & Rockabilly",
            "release_date": "2018-07-06",
            "release_date_precision": "day",
            "total_tracks": 21,
            "type": "album",
            "uri": "spotify:album:5ZZdCuph0g7qxFIPZXQ255"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/3cMEiDsx9VpGvF71hUGswS"
              },
              "href": "https://api.spotify.com/v1/artists/3cMEiDsx9VpGvF71hUGswS",
              "id": "3cMEiDsx9VpGvF71hUGswS",
              "name": "Eddie Meduza",
              "type": "artist",
              "uri": "spotify:artist:3cMEiDsx9VpGvF71hUGswS"
            }
          ],
          "disc_number": 1,
          "duration_ms": 207866,
          "explicit": true,
          "external_ids": {
            "isrc": "SEBGA1200463"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3gwLHy2YoytpOsb6Jfd3lB"
          },
          "href": "https://api.spotify.com/v1/tracks/3gwLHy2YoytpOsb6Jfd3lB",
          "id": "3gwLHy2YoytpOsb6Jfd3lB",
          "is_local": false,
          "is_playable": true,
          "name": "Runke ball",
          "popularity": 24,
          "preview_url": "https://p.scdn.co/mp3-preview/a20d4de685365eb900d393eb2f315213a2844f28?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 17,
          "type": "track",
          "uri": "spotify:track:3gwLHy2YoytpOsb6Jfd3lB"
        },
        {
          "album": {
            "album_type": "single",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/1SU2pMMSbU1hqWyFXp97Br"
                },
                "href": "https://api.spotify.com/v1/artists/1SU2pMMSbU1hqWyFXp97Br",
                "id": "1SU2pMMSbU1hqWyFXp97Br",
                "name": "LIAMOO",
                "type": "artist",
                "uri": "spotify:artist:1SU2pMMSbU1hqWyFXp97Br"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/5V90vPXC1pH7cbi3lsILVw"
            },
            "href": "https://api.spotify.com/v1/albums/5V90vPXC1pH7cbi3lsILVw",
            "id": "5V90vPXC1pH7cbi3lsILVw",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d810c827a2ebf687f46642c",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025d810c827a2ebf687f46642c",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515d810c827a2ebf687f46642c",
                "width": 64
              }
            ],
            "name": "Bluffin",
            "release_date": "2022-02-26",
            "release_date_precision": "day",
            "total_tracks": 2,
            "type": "album",
            "uri": "spotify:album:5V90vPXC1pH7cbi3lsILVw"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/1SU2pMMSbU1hqWyFXp97Br"
              },
              "href": "https://api.spotify.com/v1/artists/1SU2pMMSbU1hqWyFXp97Br",
              "id": "1SU2pMMSbU1hqWyFXp97Br",
              "name": "LIAMOO",
              "type": "artist",
              "uri": "spotify:artist:1SU2pMMSbU1hqWyFXp97Br"
            }
          ],
          "disc_number": 1,
          "duration_ms": 179603,
          "explicit": false,
          "external_ids": {
            "isrc": "SEPQA2200052"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2Cyow8nZDqP9tolduIf2KX"
          },
          "href": "https://api.spotify.com/v1/tracks/2Cyow8nZDqP9tolduIf2KX",
          "id": "2Cyow8nZDqP9tolduIf2KX",
          "is_local": false,
          "is_playable": true,
          "name": "Bluffin",
          "popularity": 73,
          "preview_url": "https://p.scdn.co/mp3-preview/d292b69ab5bc616e11b9fbe7a7257a637433ccb0?cid=7c7de202e4df4600b614ed6890bf4cba",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2Cyow8nZDqP9tolduIf2KX"
        }
      ],
      "limit": 20,
      "next": "https://api.spotify.com/v1/search?query=Vart+jag+mig+i+v%C3%A4rlden+v%C3%A4nder&type=track&market=SE&locale=sv-SE%2Csv%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=20&limit=20",
      "offset": 0,
      "previous": null,
      "total": 73
    }
  }
function setup(){
    const types = ["album", "artist", "playlist", "track", "show", "episode"];
}

function SearchBar() {
    const accesstoken = useSelector(state => state.spotify.accessToken)
    const [search, setSearch] = useState(() => "");
    const searcher = search.replace(" ", "%20");
    const searchString = "/search?q=$" + searcher + "&type=track&limit=10" 
    //console.log(searchString)
    const fippel = spotifyGet(searchString, accesstoken);
    console.log(fippel);
    //const {searchString: searchString, searchType: searchType} = useSelector(state => state.searchinfo);
    //function onChange(actionType, e) {
    //    dispatch({type: "searchinfo/" + actionType, payload: e.target.value})
    //}


    //setSearchString("/search?" + "type=" + types.join() + search);
    //console.log(searchString);
    //const response = spotifyGet(searchString, token)
    
    

    //console.log(search);
    //console.log(response.tracks.items);
    const trackmap = response.tracks.items.map(trackRes => 
        <li key={trackRes.id}>{trackRes.name}</li>);

    return <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Här nedanför borde en sökruta finnas</h1>
        <input id="searchText" type="text" placeholder="Search here" onChange={e => setSearch(e.target.value)}/>
        <div style={{overflowY: 'auto', maxWidth: '15em', display: 'flex', justifyContent: "center", alignItems: "center" }}><ol>{trackmap}</ol></div>
        <div>Bottom</div>
    </div>
}


export default SearchBar