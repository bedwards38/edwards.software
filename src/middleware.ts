import { defineMiddleware } from "astro:middleware";
import { redirectToDefaultLocale, requestHasLocale } from "astro:i18n";

export const onRequest = defineMiddleware((context, next) => {
  const path = context.url.pathname;
  const publicPrefixes = [
    "/favicons/",
    "/images/",
    "/robots.txt",
    "/site.webmanifest",
    "/404",
  ];

  const geoEnabled = ["NA", "EU"];
  if (!geoEnabled.includes(context.request.cf?.continent as string)) {
    return new Response("Forbidden", { status: 403 });
  }

  const isPublicPath =
    publicPrefixes.filter((prefix) => path.startsWith(prefix)).length > 0;

  if (!isPublicPath && !requestHasLocale(context)) {
    return redirectToDefaultLocale(context, 302);
  }

  return next();
});
