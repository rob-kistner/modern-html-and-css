# Modern HTML & Javascript
Udemy course from Brad Traversy on Udemy

---

### Deployed

In 106, shows how to set up GitHub to publish to Netlify.

Location:

> https://sleepy-goldstine-c45785.netlify.com


I made a new branch with news-grid as the root project and nothing else, and pushed that to Netlify, worked well that way.

```
git checkout -b news-grid
```

I didn't do this properly, I didn't commit here so I had to...

```
git branch --set-upstream-to=origin/news-grid news-grid
```

but I should've just made a commit, I think that would've taken care of that naturally

```
git add .
git commit -m "Netlify publish"
git push origin news-grid
```

