// netlify/functions/placeholder.js
export default async (req, context) => {
  // Extract dimensions from URL path
  const segments = req.url.split("/");
  const dimensions = segments[segments.length - 1]; // e.g. "300x200"

  // Validate format (digits x digits)
  if (!/\d+x\d+/.test(dimensions)) {
    return new Response("Invalid dimensions format. Use WIDTHxHEIGHT.", {
      status: 400,
    });
  }

  // Redirect to placeholder service
  return Response.redirect(
    `https://via.placeholder.com/${dimensions}`,
    301 // Permanent redirect for caching
  );
};
