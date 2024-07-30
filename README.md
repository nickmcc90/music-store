# Music Store E-commerce website - Made With Next.js, TailwindCSS, Zustand, and Stripe

This website offers preview videos and midi files of me playing the piano. I've done covers of songs, put my own style on songs that I like, and also
include a song that I've made. The customer can check out each song and add items to their cart. A seamless checkout with Stripe will eventually be followed by a confirmation email to the customer with a bundle of the preview video and a midi file of the songs they selected.

## Things I learned from this project

Skills learned: 
How to...
* retrieve signed URLs from GCP to display preview videos with each product.
* manage state variables and create functions with Zustand.
* persist data upon refreshing the page with Zustand.
* process payments with Stripe
* server side render products through after initializing them in Stripe.
* utilize git crypt to upload to github with secret information (apart from gitignore)
* route to different pages and directories with next.js
* have clean, maintainable, and organized code with proper structure.
* debugging skills for problems that came up along the way.


## Extra information
The video previews do not load on the website url posted in this repo. This is because I have git crypted my credentials to fetch
these videos from the GCP storage buckets. GCP authorizes database retrieval with its environment variables set to the path of
the GCP .json credentials file instead of the environment variables being the key=values within the .json file. I haven't figured
out a way around this yet, so the video that I show demonstrating the website shall suffice for now.
