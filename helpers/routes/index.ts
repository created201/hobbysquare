type StaticRouteKey<T extends string> = T
type StaticRouteOption<Path extends string> = {
    href: [Path]["length"] extends 1 ? `${Path}` : never
    icon?: (ReactIcon: React.ReactNode) => React.ReactNode
    isCurrentRoute: (pathname: string) => boolean
}

function __getIsCurrentRoute__(pathname: string) {
    return (staticPathname: string) => {
        return staticPathname === pathname
    }
}

export function __getRoutes__() {
    const homeRouteKey: StaticRouteKey<"home"> = "home"
    const homeRouteOption: StaticRouteOption<"/"> = {
        href: "/",
        isCurrentRoute: __getIsCurrentRoute__("/"),
    }

    const createRouteKey: StaticRouteKey<"create"> = "create"
    const createRouteOption: StaticRouteOption<"/posts/create"> = {
        href: "/posts/create",
        isCurrentRoute: __getIsCurrentRoute__("/posts/create"),
    }

    const dashboardRouteKey: StaticRouteKey<"dashboard"> = "dashboard"
    const dashboardRouteOption: StaticRouteOption<"/dashboard"> = {
        href: "/dashboard",
        isCurrentRoute: __getIsCurrentRoute__("/dashboard"),
    }

    const keys = [homeRouteKey, createRouteKey, dashboardRouteKey]
    const values = [homeRouteOption, createRouteOption, dashboardRouteOption]

    let routes: Record<
        [
            typeof homeRouteKey,
            typeof createRouteKey,
            typeof dashboardRouteKey
        ][number],
        [
            typeof homeRouteOption,
            typeof createRouteOption,
            typeof dashboardRouteOption
        ][number]
    > = { home: null, create: null, dashboard: null }

    routes[homeRouteKey] = homeRouteOption
    routes[createRouteKey] = createRouteOption
    routes[dashboardRouteKey] = dashboardRouteOption

    return {
        keys,
        values,
        routes,
    }
}
