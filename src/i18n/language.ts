export type Language = "de" | "en";

export function getLanguageFromPath(path: string): Language {
    return path.startsWith("/en") || path === "/en" 
        ? "en" : "de";
}

export function getLocalizedPath(
    path: string,
    language: Language
): string {
    const pathWithoutLanguage = path.replace(/^\/(de|en)(?=\/|$)/, "");

    const normalizedPath = pathWithoutLanguage || "/";

    return language === "en"
        ? `/en${normalizedPath === "/" ? "/" : normalizedPath}`
        : `/de${normalizedPath === "/" ? "/" : normalizedPath}`;
}

export function detectBrowserLanguage(): Language {
    console.log("Browser language:", navigator.language);

    const browserLanguage = navigator.language.toLowerCase();

    return browserLanguage.startsWith("de") ? "de" : "en"; 
}