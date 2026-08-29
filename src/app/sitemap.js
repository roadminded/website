/**
 * Sitemap configuration for the Roadminded website.
 * @returns Sitemap entries with URLs, change frequency, and priority.
 */
export default function sitemap() {
    const baseUrl = "https://roadminded.com";

    const routes = [
        "",
        "/tunnelmaster",
        "/services",
        "/about",
        "/contact",
        "/privacy",

        "/fi",
        "/fi/tunnelmaster",
        "/fi/services",
        "/fi/about",
        "/fi/contact",
        "/fi/privacy",

        "/zh-tw",
        "/zh-tw/tunnelmaster",
        "/zh-tw/services",
        "/zh-tw/about",
        "/zh-tw/contact",
        "/zh-tw/privacy",

        "/resources/its-terminology",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}