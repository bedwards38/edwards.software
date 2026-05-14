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
    const localArr = translations[lang][key] as string[] | undefined;
    const defaultArr = translations[defaultLocaleCode][key] as string[] | undefined;
    return localArr?.[index] || defaultArr?.[index];
  }

  return { t, tArr };
}

const typewriterTimeouts = new WeakMap<HTMLElement, number[]>();
export function typewriter(element: HTMLElement, index: number) {
  const animationSpeed = 50;
  const content = element.dataset.content!;
  if (index === 0) {
    typewriterTimeouts.get(element)?.forEach((id) => clearTimeout(id));
    element.innerHTML = "";
    typewriterTimeouts.set(element, []);
    element.classList.remove("typing-done");
  }

  if (index >= 0 && index <= (content ? content.length - 1 : 0)) {
    element.innerHTML += content?.charAt(index);
    typewriterTimeouts.get(element)!.push(
      setTimeout(typewriter, animationSpeed, element, ++index),
    );
  } else {
    typewriterTimeouts.get(element)?.forEach((id) => clearTimeout(id));
    typewriterTimeouts.set(element, []);
    element.classList.add("typing-done");
  }
}

const reverseTypewriterTimeouts = new WeakMap<HTMLElement, number[]>();
export function reverseTypewriter(element: HTMLElement, index: number) {
  const animationSpeed = 35;
  const content = element.dataset.reverse!;
  if (index === content.length - 1) {
    reverseTypewriterTimeouts.set(element, []);
  }

  if (index >= 0 && index <= (content ? content.length - 1 : 0)) {
    element.innerHTML = element.innerHTML.substring(0, index);
    reverseTypewriterTimeouts.get(element)!.push(
      setTimeout(reverseTypewriter, animationSpeed, element, --index),
    );
  } else {
    reverseTypewriterTimeouts.get(element)?.forEach((id) => clearTimeout(id));
    reverseTypewriterTimeouts.set(element, []);
    typewriter(element, 0);
  }
}
