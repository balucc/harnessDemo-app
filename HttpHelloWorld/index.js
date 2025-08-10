module.exports = async function (context, req) {
  const name = (req.query && req.query.name) || "World";
  const html = `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Azure Function • Hello</title>
    <style>
      :root { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"; }
      body { margin: 0; background: #0f172a; color: #e2e8f0; display:flex; min-height:100vh; align-items:center; justify-content:center; }
      .card { background:#111827; padding:32px 36px; border-radius:16px; box-shadow: 0 10px 30px rgba(0,0,0,.35); max-width:720px; }
      h1 { margin: 0 0 8px; font-size: 28px; }
      p { margin: 6px 0; line-height:1.6; color:#cbd5e1; }
      .chip { display:inline-block; padding:4px 10px; border-radius:999px; background:#1f2937; color:#93c5fd; font-weight:600; font-size:12px; letter-spacing:.02em; }
      .footer { margin-top: 16px; font-size: 12px; color:#94a3b8; }
      a { color:#93c5fd; text-decoration: none; }
      a:hover { text-decoration: underline; }
      code { background:#0b1220; padding:3px 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="chip">Azure Functions • Node.js</div>
      <h1>Hello, ${name}! 👋</h1>
      <p>Your serverless function is live. This response was rendered by <code>HttpHelloWorld/index.js</code>.</p>
      <p>Try adding a query string like <code>?name=Balu</code> to personalize the greeting.</p>
      <div class="footer">
        <p>Path: <code>/api/HttpHelloWorld</code></p>
      </div>
    </main>
  </body>
  </html>`;

  context.res = {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
    body: html
  };
};
