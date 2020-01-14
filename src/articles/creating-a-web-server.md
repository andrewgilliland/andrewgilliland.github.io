---
title: "Creating a Web Server in Node.js"
date: "2020-01-13"
---

The first step is to include the node 'http' module.

<div class="text-blue-grey-050 font-sans bg-blue-grey-900 p-2 rounded border-b-1">
index.js
<code class="text-magenta-400 border-t">  

const http = require('http');
</code>
</div>

There are two steps to build a server:

- First we create the server.
- Then we start the server.

Next, we use the createSever method on the http object.

The createServer method accepts a callback function.

This callback function gets access to two important variables.

- The request variable - `req`.
- The response variable - `res`.
