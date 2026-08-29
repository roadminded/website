/**
 * Robots.txt configuration for the website.
 * @returns Robots.txt configuration object containing rules and sitemap URL.
 * 
 */
export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://roadminded.com/sitemap.xml",
    };
}