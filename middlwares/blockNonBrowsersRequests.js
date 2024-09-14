const browserUserAgents = [
    'Mozilla',
    'Chrome',
    'Safari',
    'Firefox',
    'Edge',
    'Opera'
];

export async function blockNonBrowsersRequests(req, res, next) {
    try {
        const userAgent = req.headers['user-agent'];
        const postmanToken = req.headers['postman-token'];

        const isBrowser = browserUserAgents.some(agent => userAgent.includes(agent));

        if (isBrowser && !postmanToken) {
            next();
        } else {
            res.status(403).send('Access forbidden: Non-browser requests are not allowed');
        }
    } catch (e) {
        console.log(e);
        console.error(`Error from blockNonBrowsersRequests ERROR:${e.message}`);
    }
}