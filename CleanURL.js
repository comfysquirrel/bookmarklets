javascript:(() => {
    const currentURL = window.location.href;
    const domain = currentURL.match(/https?:\/\/[a-z0-1-.]*(?<domain>(amazon|ebay|etsy|facebook|youtube)\.[^\/]*)/i).groups.domain;
    let cleanURL;
    if (domain.includes("amazon")) {
        const id = currentURL.match(/(\/(dp|gp\/product(\/glance)?|gp\/aw\/d|exec\/obidos\/asin)\/)(?<id>[a-z0-9]*)/i).groups.id;
        cleanURL = `https://${domain}/dp/${id}`;
    }
    if (domain.includes("ebay")) {
        const id = currentURL.match(/(\/itm\/)(?<id>[0-9]*)/i).groups.id;
        cleanURL = `https://${domain}/itm/${id}`;
    }
    if (domain.includes("etsy")) {
        const id = currentURL.match(/(\/listing\/)(?<id>[0-9]*)/i).groups.id;
        cleanURL = `https://${domain}/listing/${id}`;
    }
    if (domain.includes("facebook")) {
        const id = currentURL.match(/(\/marketplace\/item\/)(?<id>[0-9]*)/i).groups.id;
        cleanURL = `https://${domain}/marketplace/item/${id}`;
    }
    if (domain.includes("youtube")) {
        const id = currentURL.match(/(\?v=)(?<id>[a-z0-9-_]*)/i).groups.id;
        cleanURL = `https://youtu.be/${id}`;
    }
    navigator.clipboard.writeText(cleanURL);
})();
