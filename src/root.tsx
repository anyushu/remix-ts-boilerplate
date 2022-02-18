import { Meta, Links, Outlet, ScrollRestoration, Scripts, LiveReload } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/react/routeModules'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
