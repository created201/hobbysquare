export function __getRoutes__() {
    const routes = {
        home: {
            href: "/",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/",
        },
        login: {
            href: "/login",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/login",
        },
        dashboard: {
            href: "/dashboard",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/dashboard",
        },
        account: {
            href: "/account",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/account",
        },
        contact: {
            href: "/contact",
            icon: (icon) => icon,
            isCurrentRoute: (routerPathname) => routerPathname === "/contact",
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
    }
}
