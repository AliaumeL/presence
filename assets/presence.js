/*
 * Aliaume's Presence on the Internet.
 * This script fetches the presence of Aliaume on the Internet,
 * and displays it on any website. 
 */

const PRESENCE_STATIC_URL = "https://aliaumel.github.io/presence";

// Fetch the presence of Aliaume on the Internet
const fetchPresence = async () => {
    const response = await fetch(`${PRESENCE_STATIC_URL}/assets/presence.json`);
    const presence = await response.json();
    return presence;
};

// Display the presence of Aliaume on the Internet
// takes a div as argument

const updatePresence = async ({ webDiv, mailDiv }) => {
    const pres = await fetchPresence();
    pres.websites.forEach((website) => {
        if (website.status !== "active") return;
        const a = document.createElement("a");
        const text = document.createTextNode(website.name);
        const li = document.createElement("li");
        a.appendChild(text);
        a.href = website.url;
        li.appendChild(a);
        webDiv.appendChild(li);
    });
    pres.emails.forEach((email) => {
        if (email.status !== "active") return;
        const li = document.createElement("li");
        const a = document.createElement("a");
        const text = document.createTextNode(email.name);
        a.appendChild(text);
        a.href = `mailto:${email.address}`;
        li.appendChild(a);
        mailDiv.appendChild(li);
    });
};
