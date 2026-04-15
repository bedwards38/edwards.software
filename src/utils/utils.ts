import {
  locales,
  translations,
  defaultLocaleCode,
  defaultLanguage,
} from "@/i18n/translations";

export function getLocaleFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLocaleCode;
}

export function getLocaleName(code: string) {
  const locale = locales.find((locale) => code === locale.code);
  return locale ? locale.lang : defaultLanguage;
}

export function useTranslations(lang: keyof typeof translations) {
  function t(key: keyof (typeof translations)[typeof defaultLocaleCode]) {
    return (translations[lang][key] ||
      translations[defaultLocaleCode][key]) as string;
  }

  function tArr(
    key: keyof (typeof translations)[typeof defaultLocaleCode],
    index: number,
  ) {
    return (
      translations[lang][key]![index] ||
      translations[defaultLocaleCode][key]![index]
    );
  }

  return { t, tArr };
}

const typewriterTimeouts: { [K: string]: number[] } = {};
export function typewriter(element: HTMLElement, index: number) {
  const animationSpeed = 50;
  const content = element.dataset.content!;
  if (index === 0) {
    element.innerHTML = "";
    typewriterTimeouts[content] = [];
  }

  if (index >= 0 && index <= (content ? content.length - 1 : 0)) {
    element.innerHTML += content?.charAt(index);

    typewriterTimeouts[content].push(
      setTimeout(typewriter, animationSpeed, element, ++index),
    );
  } else {
    typewriterTimeouts[content].forEach((id) => clearTimeout(id));
    typewriterTimeouts[content] = [];
  }
}

const reverseTypewriterTimeouts: { [K: string]: number[] } = {};
export function reverseTypewriter(element: HTMLElement, index: number) {
  const animationSpeed = 35;
  const content = element.dataset.reverse!;
  if (index === content.length - 1) {
    reverseTypewriterTimeouts[content] = [];
  }

  if (index >= 0 && index <= (content ? content.length - 1 : 0)) {
    element.innerHTML = element.innerHTML.substring(0, index);
    reverseTypewriterTimeouts[content].push(
      setTimeout(reverseTypewriter, animationSpeed, element, --index),
    );
  } else {
    reverseTypewriterTimeouts[content].forEach((id) => clearTimeout(id));
    reverseTypewriterTimeouts[content] = [];
    typewriter(element, 0);
  }
}
