# DogZ or Catz
_____
### The most useless web site using Auth0 webtask that's let you choose between Dog or Cat gifs.

To make it run localy
```
if (!node) {
  axios.get('https://nodejs.org/en/')
  console.error('Install node!')
} else if (!yarn) {
  axios.get('https://yarnpkg.com/en/docs/install')
  console.error('Yarn > NPM')
}
```
Then:

```
> cd front
> yarn
> ...
> npm run dev
```

### The mail is triggered thank a Webtask
### You can look at the code inside the `./back` folder.
I had to upload the code with the option `--secret` for the sender account to not expose my password. So if you want to make it run on your own `sandbox` you need the configuration of `const transporter` (line 19/27) then run `wt create --secret EMAIL_PWD=Y0ur_S3cuR3_P4ssVV0r|) sendMail.js`
