# Full Stack React & Firebase Tutorial- Build a social media app

## By Classsed and .freeCodeCamp.org

## URL: https://www.youtube.com/watch?v=m_u6P5k0vP0

## Video Series Starts:

https://www.youtube.com/watch?v=RkBfu-W7tt0&list=PLMhAeHCz8S38ryyeMiBPPUnFAiWnoPvWP&index=1

---

## 1) Introduction- 0:00

Technologies:

- React, Firebase, Matetial-UI, Express.js, Redux- needed due to many
  components.

- Without this the components will pass data from one
  component to the next(prop drilling) which is a bad practice on large
  projects. Redux creates a application wide state.

# 2) Create and Read Data- 7:03

**Add the firebase command line interface:**

```
npm install -g firebase-tools
```

**Login into Firebase:**

```
firebase login
```

**Initialize Firebase:**

```
init firebase
    NOTE: At this point add the Functions feature.
```

**To deploy firebase:**

```
firebase deploy
    The deploy will create a http endpoint to work within Postman. When the post
        route is executed, the helloWorld function runs from the index.js file
        wihtin the functions directory.
    NOTE: Deploy everytime the index.js is changed to use new functions.
```

`NOTE:` As firebase deploy takes a long time to run, instead deploy locally with:

```
firebase serve
```

`ISSUE:` With local host had an issue when posting for the `createScream()` function:
Error: Could not load the default credentials. Browse to https://cloud.google.com/docs/authentication/getting-started for more information.
`Quick Fix:` downgrade to version 6.8:

```
Run "npm install -g firebase-tools@6.8.0"
```

## 3) Express and Formatting Response- 27:57

**Move to the functions folder and add express**

```
npm i express
```

**Add new express get() function(replace getScreams function), add api export, then redeploy:**

```
firebase deploy
```

## 4) User Registration- 42:37

Add Firebase and email/password authentication from Firebase Account.

**Within the functions directory, add firebase:**

```
npm i firebase
```

## 5) Validation & Login Route- 1:03:23

## 6) Authentication Middleware- 1:19:33

### Authentication testing- 1:31:10

## 7) Refactoring and Organization- 1:33:10

## 8) Image Upload- 1:48:48

**Within the functions directory, run:**

```
npm i busboy
```

`2:08:30-` Image testing in Postman

## 9) Add and Get User Profile Details- 2:13:45

## 10) Getting and Commenting On Scream- 2:33:15

    `Not Working?`

## 11) Like, Unlike, and Delete Post- 2:56:38

## 12) Create and Get Notifications- 3:25:38

**Upon adding database triggers, from the functions folder deploy firebase:**

```
firebase deploy
```

## 13) Finishing Up Cloud Functions- 3:58:11

## 14) Getting Started with React- 4:23:46

**Create react app:**

```
create-reacte-app socialape-client
```

**Within the socialape-client, add router-com:**

```
npm i react-router-dom
```

**Install material-ui in socialape-client:**
npm i --save @material-ui/core

## 15) Post Card Details- 4:44:01

**To access screams, use axios in the socialape-client directory:**

```
npm i axios
```

Left off at `4:54`
