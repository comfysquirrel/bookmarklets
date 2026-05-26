javascript:(() => {
    const currentURL = window.location.href;
    const domain = currentURL.match(/https?:\/\/[a-z0-1.]*(?<domain>((amazon)|(youtube))\.[^\/]*)/i).groups.domain;
    let cleanURL;
    if (domain.includes("amazon")) {
        const id = currentURL.match(/(\/(dp|gp\/product(\/glance)?|gp\/aw\/d|exec\/obidos\/asin)\/)(?<id>[a-z0-9]*)/i).groups.id;
        cleanURL = `https://${domain}/dp/${id}`;
    }
    if (domain.includes("youtube")) {

    }
    navigator.clipboard.writeText(cleanURL);
})();