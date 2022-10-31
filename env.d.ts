/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />

declare module "*.vue";

interface ImportMetaEnv {
  readonly VITE_WEBSITE_TITLE: string;
  readonly VITE_WEBSITE_FAVICON: string;
  readonly VITE_WEBSITE_DESCRIPTION: string;

  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
