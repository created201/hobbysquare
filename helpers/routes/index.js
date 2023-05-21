export function __getRoutes__() {
    const routes = {
        home: {
            href: "/",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/",
        },

        dashboard: {
            href: "/dashboard",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/dashboard",
        },
        create: {
            href: "/posts/create",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) =>
                routerPathname === "/posts/create",
        },
    }

    const keys = Object.keys(routes)
    const values = keys.map((key) => routes[key])

    return {
        keys,
        values,
        routes,
    }
}
