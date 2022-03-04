# fake-riseUp-front
This is a test env for our backend repo routes

After you get the backend db set up, seeds run, and server started, when you clone it down and "npm run start", you should see this:

<img width="700" alt="Screen Shot 2022-03-04 at 9 41 23 AM" src="https://user-images.githubusercontent.com/95940864/156814291-27bd3852-84e2-4b2e-be44-86e6c481ab14.png">

<img width="800" alt="Screen Shot 2022-03-04 at 9 43 54 AM" src="https://user-images.githubusercontent.com/95940864/156814780-13b5bad5-934a-475c-a4d1-a3c71262afff.png">
Your JWT token is visible in the console.log right now.

I highjacked Joe's example...

If you login with one of the seed users you should see this:
<img width="700" alt="Screen Shot 2022-03-04 at 9 43 04 AM" src="https://user-images.githubusercontent.com/95940864/156814541-a2e361b0-5e8c-430b-bd48-2aa9cbc07541.png">

Each button should make a small form pop up below, asking for the info needed to send over the route.
<img width="700" alt="Screen Shot 2022-03-04 at 9 45 27 AM" src="https://user-images.githubusercontent.com/95940864/156814918-987e2f28-3ccd-41b9-9730-97c68ecc9092.png">

Some of the routes are not working right now (most noticeably the POST routes, as well as the comment routes that are dependent on the post id's (these are not associated in the db seeds, so will show nothing until we can start POSTing new users, posts and comments).

I hope we can use this to debug the routes in a more "real" and tangible way? I knowit's helped me with my grasp of them a bit.
