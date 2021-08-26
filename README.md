# Spotify Clone

A responsive React application that fetches Tweets from Twitter's API.

See it [here](https://yapper-jb.herokuapp.com/)

# Images

Homepage:

![homepage](https://user-images.githubusercontent.com/43301741/131029614-32b82519-e317-4592-b6ac-897ee04ad5ae.png)

Search Spotify by artist, album, or song:

![searchpage](https://user-images.githubusercontent.com/43301741/131030097-f2eea7b9-5249-4ce1-b744-1cdbf6bdaa93.png)

Sample of artist search:

![artist-search](https://user-images.githubusercontent.com/43301741/131030392-4274acec-9bef-4bc8-a948-0077f0d5a979.png)

Sample of album search:

![album-search](https://user-images.githubusercontent.com/43301741/131034066-6ee4b7ad-6155-4ffd-b897-d076ffcfb143.png)

Sample of song search:

![song-search](https://user-images.githubusercontent.com/43301741/131034278-b31e8357-c1f4-45e0-bcad-43a29c312cf7.png)

Random page:

![randompage](https://user-images.githubusercontent.com/43301741/131033567-f398e16d-2517-4453-acd5-2aa7b65d4d14.png)

Click on a random artist to generate a random song:

![random-song](https://user-images.githubusercontent.com/43301741/131033829-4eb4b32e-a38a-489c-9e64-7fda2c586a29.png)

# Instructions
1) clone project
2) `cd` into project directory
3) go to `www.spotify.com` and create an account (Premium or Free)
4) go to the `Dashboard` page and click `Create an App`. Complete steps
5) `touch .env` (this will create a .env file)
6) follow the .env_sample file (include your API Key & API Secret Key)
7) run `npm start`
8) open a browser and navigate to `localhost:3000`
# Summary

This application utilizes Spotify's API to fetch artists, albums, or songs. Users can search for a Tweet by a specific topic or by a Twitter username. Additionally, by clicking on a Twitter profile on the Random page, users can generate a random Tweet from any of the five Twitter profiles.

Twitter's API is handled via a Node server, with React handling the frontend.

Building this app was loads of fun and had several challenges along the way! Some of these challenges included working with authentication, error handling, and manipulating Twitter's data.

I look forward to adding more features, so stay tuned for more!

# Author

- _Joe Bigio_ Full-Stack Software Developer [Website](https://j-bigio-portfolio.netlify.app/) | [LinkedIn](https://www.linkedin.com/in/joelbigio/)