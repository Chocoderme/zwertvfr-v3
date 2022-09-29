import { ref, computed, type Component } from "vue";
import { defineStore } from "pinia";

export interface Project {
  title: string;
  image?: string;
  type: string;
  tags: string[];
  summary: string;
  links?: { icon?: "github" | "url"; url: string }[];
}

export interface Tag {
  label: string;
  values: string[];
}

export const useProjectStore = defineStore("project", () => {
  const projects = ref<Project[]>([
    {
      title: "KoaEko",
      type: "Open-source Library",
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaJS open-source pour générer des routes REST en utilisant koa-router et les decorators (typescript)",
      links: [{ icon: "github", url: "https://github.com/Chocoderme/koa-eko" }],
      image: import.meta.env.BASE_URL + "portfolio/koaeko.png",
    },
    {
      title: "KoaEko Scope",
      type: "Open-source Library",
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaEko open-source permettant la génération de routes API scopées et fieldées",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-scope" },
      ],
      image: import.meta.env.BASE_URL + "portfolio/koaekoscope.png",
    },
    {
      title: "KoaEko Doc",
      type: "Open-source Library",
      tags: ["Typescript", "Sequelize", "Koa", "Reflect-metadata", "Backend"],
      summary:
        "Un module KoaEko open-source permettant la génération d'une documation API en ligne en utilisant les decorators",
      links: [
        { icon: "github", url: "https://github.com/Chocoderme/koa-eko-doc" },
      ],
      image: import.meta.env.BASE_URL + "portfolio/koaekodoc.png",
    },
    {
      title: "CV en ligne (V1)",
      type: "Website",
      tags: ["HTML/CSS", "Javascript", "Frontend"],
      summary: "Premiere version de mon site personnel",
      links: [{ icon: "url", url: "https://me.zwertv.fr" }],
      image: import.meta.env.BASE_URL + "portfolio/website_vignette.png",
    },
    {
      title: "CV en ligne (V2)",
      type: "Website",
      tags: ["Vue3", "Typescript", "Pinia", "HTML/SCSS", "Frontend"],
      summary: "Mon site personnel (version actuelle)",
      links: [{ icon: "url", url: "https://me.zwertv.fr" }],
    },
  ]);

  const tags = ref<Tag[]>([
    { label: "All", values: [] },
    { label: "Angular", values: ["Angular"] },
    { label: "React", values: ["React"] },
    { label: "Python/Django", values: ["Python", "Django"] },
    { label: "Ruby/Rails", values: ["Ruby", "Rails"] },
    { label: "PHP", values: ["PHP"] },
    { label: "HTML", values: ["HTML"] },
    { label: "Frontend", values: ["Frontend"] },
    { label: "Backend", values: ["Backend"] },
  ]);
  const activeTag = ref<Tag | undefined>(tags.value[0]);

  const activeProjects = computed(() =>
    activeTag.value === undefined || activeTag.value.label === "All"
      ? projects.value
      : projects.value.filter((p) =>
          p.tags
            .map((t) => t.toLowerCase())
            .some((t) =>
              activeTag.value?.values
                .map((v) => v.toLowerCase())
                .some((v) => t.split("/").includes(v))
            )
        )
  );

  return { projects, tags, activeTag, activeProjects };
});
