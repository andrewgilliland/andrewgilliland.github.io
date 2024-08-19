---
title: "Redirects vs. Rewrites"
date: "2023-08-13"
excerpt: "An in-depth look at the differences between redirects and rewrites in web development."
draft: false
---

## Redirects vs. Rewrites

In web development, redirects and rewrites are techiques use to manage URLs and control how requests are handled by the server. Here's a detailed explanation of the differences between the two:

### Redirects

URL redirects are a technique used to have more than one URL address to point users to the same website page or destination. URL redirects may also be known as URL forwarding. Redirect responses have status codes that start with `3`.

There are different types of redirects, that can be sorted into three categories:

1. Permanent redirects
2. Temporary redirects
3. Special redirects

#### Permanent Redirects

Permanent redirects can be used to preserve existing links to perserve existing URLs. These redirects are meant to last forever. There are two status codes for permanent redirects:

1. `301` - `Moved Permanently`
2. `308` - `Permanent Redirect`

#### Temporary Redirects

Temporary redirects can be used to redirect users to an alternative page while there maintenance or downtime on a web site or app. There are three status codes for temporary redirects:

1. `302` - `Found`
2. `303` - `See Other`
3. `307` - `Temporary Redirect`

#### Special Redirects

There are two status codes for special redirects:

1. `300` - `Multiple Choices` - Manual redirects
2. `304` - `Not Modified` - Used for caching purposes, not a redirect

### Rewrites

Rewrites are handled entirely on the server and are transparent to the user. The URL in the browser's address bar remains unchanged. Rewrites are useful to make URLs more user and SEO friendly. For example, you could rewrite the URL `website.com/index.php?page=about` to `website.com/about`.

### Key Differences

### Summary

### Resources

[Redirections in HTTP - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)  
[Introduction To URL Rewriting - Smashing Magazine](https://www.smashingmagazine.com/2011/11/introduction-to-url-rewriting/)