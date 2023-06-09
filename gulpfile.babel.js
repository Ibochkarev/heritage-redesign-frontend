"use strict";

import gulp from "gulp";
const lighthouseTask = require("./gulp/tasks/lighthouse");

const requireDir = require("require-dir"),
  paths = {
    views: {
      src: ["./src/views/pages/**/*.pug", "./src/views/homepage.pug"],
      dist: "./docs/",
      pagelist: "./src/index.yaml",
      icons: "./src/icons",
      iconsPng: "./src/icons/png",
      iconsSvgMono: "./src/icons/svg-mono",
      iconsSvgColor: "./src/icons/svg-colors",
      iconsFont: "./src/icons",
      sassGen: "./src/styles/generated",
      watch: ["./src/blocks/**/*.pug", "./src/views/**/*.pug"],
    },
    styles: {
      src: "./src/styles/*.{scss,sass}",
      dist: "./docs/styles/",
      watch: ["./src/blocks/**/*.{scss,sass}", "./src/styles/**/*.{scss,sass}"],
    },
    scripts: {
      src: "./src/js/index.js",
      dist: "./docs/js/",
      watch: ["./src/blocks/**/*.js", "./src/js/**/*.js"],
    },
    images: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,gif,tiff,svg}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}",
      ],
      dist: "./docs/img/",
      watch: "./src/img/**/*.{jpg,jpeg,png,gif,svg}",
    },
    webp: {
      src: [
        "./src/img/**/*.{jpg,jpeg,png,tiff}",
        "!./src/img/favicon/*.{jpg,jpeg,png,gif}",
      ],
      dist: "./docs/img/",
      watch: [
        "./src/img/**/*.{jpg,jpeg,png,tiff}",
        "!./src/img/favicon.{jpg,jpeg,png,gif}",
      ],
    },
    sprites: {
      src: "./src/img/svg/*.svg",
      dist: "./docs/img/sprites/",
      watch: "./src/img/svg/*.svg",
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dist: "./docs/fonts/",
      watch: "./src/fonts/**/*.{woff,woff2}",
    },
    json: {
      src: "./src/dictionary/*.json",
      dist: "./docs/dictionary/",
      watch: "./src/dictionary/*.json",
    },
    pdf: {
      src: "./src/userfiles/*.pdf",
      dist: "./docs/userfiles/",
      watch: "./src/userfiles/*.pdf",
    },
    php: {
      src: "./src/*.php",
      dist: "./docs/",
      watch: "./src/*.php",
    },
    videos: {
      src: "./src/videos/**/*.mp4",
      dist: "./docs/videos/",
      watch: "./src/videos/**/*.mp4",
    },
    favicons: {
      src: "./src/img/favicon/*.{jpg,jpeg,png,gif,tiff,xml,icon,json}",
      dist: "./docs/img/favicons/",
    },
    gzip: {
      src: "./src/.htaccess",
      dist: "./docs/",
    },
  };

export const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV != "production";

requireDir("./gulp/tasks/", {
  recurse: true,
});

export { paths };

export const development = gulp.series(
  "clean",
  gulp.parallel([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "sprite:png",
    "sprite:svg",
    "fonts",
    "json",
    "pdf",
    "php",
    "videos",
    "favicons",
    "list-pages",
  ]),
  gulp.parallel("serve")
);

export const prod = gulp.series(
  "clean",
  gulp.series([
    "views",
    "styles",
    "scripts",
    "images",
    "webp",
    "sprite:png",
    "sprite:svg",
    "fonts",
    "json",
    "pdf",
    "php",
    "videos",
    "favicons",
    "gzip",
    "list-pages",
  ])
);

export const lighthouse = gulp.series(lighthouseTask);

export default development;
