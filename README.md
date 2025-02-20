# Presence

> Aliaume's Presence on the Internet. 

## How To Use

Do one of the following:

- Open the [github page](https://aliaumel.github.io/presence/) to see where I am.
- Get the `assets/presence.json` file from the [github page](https://aliaumel.github.io/presence/assets/presence.json).
- Get the `assets/presence.json` file from this repository.

To directly embed `presence` on your website, you can copy
the following HTML snippet:

```html
<!-- load the assets/presence.js file -->
<!-- In the head of your html file -->
<script src="https://aliaumel.github.io/presence/assets/presence.js"></script>
<!-- create a script tag to load the presence -->
<script>
  // load the presence, webDiv, mailDiv and mainDiv are DOM elmeents meant to be
  // filled with presence information.
  updatePresence({ webDiv, mailDiv, mainDiv });
</script>
```
