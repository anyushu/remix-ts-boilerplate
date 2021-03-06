import { renderToString } from 'react-dom/server'
import { RemixServer, EntryContext } from 'remix'

const handleRequest = (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) => {
  const markup = renderToString(<RemixServer context={remixContext} url={request.url} />)

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  })
}

export default handleRequest
