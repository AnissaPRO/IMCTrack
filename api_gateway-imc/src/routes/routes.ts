interface Route {
    url: string;
    auth: boolean;
    creditCheck: boolean;
    rateLimit?: {
        windowMs: number;
        max: number;
    };
    proxy: {
        target: string;
        router?: { [key: string]: string };
        changeOrigin: boolean;
        pathFilter?: string;
        pathRewrite?: { [key: string]: string };
    };
}

const ROUTES: Route[] = [
    {
        url: '/user',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://user_app:9000",
            changeOrigin: true
        }
    },
     {
        url: '/food',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://food_app:8000",
            changeOrigin: true,
        }
    },
     {
        url: '/sport',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://sport_app:4000",
            changeOrigin: true,
        }
    },
    {
        url: '/private',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:3333",
            changeOrigin: true,
        }
    }
];

export { ROUTES, Route };