---
title: "Creating a Web Server in Node.js"
date: "2020-01-13"
---

In this article I'm going to explain building a basic web server in Node.js. First, you are going to need to have Node installed on your computer. Link <a href="https://nodejs.org/en/" class="font-sans text-magenta-500 font-semibold hover:underline">here</a> if you do not. You will also need a text editor as well. I highly recommend <a href="https://code.visualstudio.com/" class="font-sans text-magenta-500 font-semibold hover:underline">VS Code</a>.

<div class="mt-4">

Let's get started. Create an index.js file in your directory. Then include the node 'http' module.

</div>

<div class="text-blue-grey-050 text-sm font-sans bg-blue-grey-900 mt-4 rounded border-b-1">
<h3 class="p-4 border-b border-blue-grey-700">index.js</h3>
<div class="p-4 text-magenta-400">

    const http = require("http");

</div>
</div>

<div class="mt-8">

There are two main steps to build a server:

- First we create the server.
- Then we start the server.

To create the server, we use the `createServer` method on the http object.

The `createServer` method accepts a callback function. This function will be called every time a request hits the server.

This callback function gets access to two important variables.

- The request variable - `req`.
- The response variable - `res`.

In the callback function we will send a response back to the client. We will do that with the `res` object and it's method `.end`.

</div>

<div class="text-blue-grey-050 text-sm font-sans bg-blue-grey-900 mt-4 rounded border-b-1">
<h3 class="p-4 border-b border-blue-grey-700">index.js</h3>
<div class="pt-4 pl-5 text-magenta-400">

    const http = require("http");

</div>
<div class="pl-4 text-magenta-400 font-mono bg-blue-grey-800 border-l-4 border-magenta-700 whitespace-pre-wrap">http.createServer((req, res) => {
    res.end("Response from the server!");
});
</div>
<div class="p-4">

</div>
</div>

<div class="mt-8">

We will then save the result of `createServer` in the variable `server`. You then call the `listen` method on the `server` object and pass the port, host, and a callback function into it.

</div>

<div class="text-blue-grey-050 text-sm font-sans bg-blue-grey-900 mt-4 rounded border-b-1 ">
<h3 class="p-4 border-b border-blue-grey-700">index.js</h3>
<div class="pt-4 pl-5 text-magenta-400">

    const http = require("http");


</div>
<div class="pl-4 text-magenta-400 font-mono bg-blue-grey-800 border-l-4 border-magenta-700 whitespace-pre-wrap">const server = http.createServer((req, res) => {
</div>
<div class="pl-5 text-magenta-400 font-mono whitespace-pre-wrap">   res.end("Response from the server!");
});

</div>
<div class="pl-4 text-magenta-400 font-mono bg-blue-grey-800 border-l-4 border-magenta-700 whitespace-pre-wrap">server.listen(8000, '127.0.0.1', () => {
    console.log("Requests being listened to on port 8000!");
});
</div>
<div class="p-4">
    
</div>
</div>

<div class="mt-8">

Open up your terminal and run the following command:

</div>

<div class="p-4 text-blue-grey-050 text-sm bg-blue-grey-900 mt-4 rounded border-b-1">

    node index.js

</div>

<div class="mt-8">

Your console will display the `console.log()` in the callback function "Requests being listened to on port 8000!". You will also notice that your application continues to run. If you want to quit this process press `Ctrl + C` while in terminal.  
Then open up your browser and type `127.0.0.1:8000` in your address bar. The window will display `Response from the server!`. Congratulations you just built and started a server in Node.js.

</div>

<div class="mt-8">

<h3 class="text-2xl font-sans font-semibold tracking-tight">Conclusion<h3>

In this article, we learned how to build and start a server in Node.js. This is a crucial step to creating and using any Node.js application.

</div>

<div class="mt-8">

<h3 class="text-2xl font-sans font-semibold tracking-tight">Resources<h3>

<div class="font-sans text-magenta-500 font-semibold hover:underline">

[HTTP | Node.js v13.6.0](https://nodejs.org/api/http.html)

</div>
</div>
