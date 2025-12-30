const PORT = 8000;

const CONTENT_TYPES: Record<string, string> = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  let path = url.pathname;

  if (path === "/") {
    path = "/index.html";
  }

  const filePath = `./public${path}`;
  const ext = path.substring(path.lastIndexOf("."));
  const contentType = CONTENT_TYPES[ext] || "application/octet-stream";

  try {
    const file = await Deno.readFile(filePath);
    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response("Not Found", { status: 404 });
  }
}

console.log(`Server running at http://localhost:${PORT}`);
Deno.serve({ port: PORT }, handler);
