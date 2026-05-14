import type { APIRoute } from "astro";
import type { ProjectEntry, ExperienceEntry } from "@/content.config.ts";
import { getCollection } from "astro:content";
import { locales } from "@/i18n/translations.ts";

interface Page {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  locale: string;
  alternates: AlternatePage[];
}

interface AlternatePage {
  url: string;
  locale: string;
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    return new Response("Site configuration missing", { status: 500 });
  }

  const baseUrl = site.origin;
  const lastMod = import.meta.env.BUILD_DATE as string;
  const pages: Page[] = [];

  await Promise.all(
    locales.map(async (locale) => {
      const projects = (await getCollection("projects")).filter(
        (project: ProjectEntry) => project.id.startsWith(`${locale.code}/`),
      );
      const experience = (await getCollection("experience")).filter(
        (position: ExperienceEntry) => position.id.startsWith(`${locale.code}/`),
      );
      const paths = [
        "",
        "/about",
        "/about/education",
        "/projects",
        "/experience",
      ].concat(
        projects.flatMap((project) => {
          const id = project.id;
          return `/${id.substring(id.indexOf("/"))}`;
        }),
        experience.flatMap((position) => {
          const id = position.id;
          return `/${id.substring(id.indexOf("/"))}`;
        }),
      );

      paths.forEach((path) => {
        pages.push({
          url: `/${locale.code}${path}`,
          lastmod: lastMod,
          changefreq: "monthly",
          priority: "1.0",
          locale: locale.code,
          alternates: locales
            .filter((altLocale) => altLocale.code !== locale.code)
            .map((altLocale) => {
              return { url: `/${altLocale.code}${path}`, locale: altLocale.code };
            }),
        });
      });
    }),
  );

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${pages
      .map(
        (page) => `
        <url>
          <loc>${baseUrl}${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
          ${page.alternates.map((alternate) => `<xhtml:link rel="alternate" hreflang="${alternate.locale}" href="${baseUrl}${alternate.url}" />`).join("\n          ")}
        </url>`,
      )
      .join("\n")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
};
