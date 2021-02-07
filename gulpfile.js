var gulp = require("gulp");
var concat = require("gulp-concat");
var minify = require("gulp-minify");
var cleanCss = require("gulp-clean-css");
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
var htmlreplace = require("gulp-html-replace");
var del = require("del");

gulp.task("clean", function () {
  return del(["dist"]);
});

gulp.task("pack-js", function () {
  return gulp
    .src(["src/js/*.js"])
    .pipe(concat("bundle.js"))
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
        noSource: true,
      })
    )
    .pipe(rev())
    .pipe(gulp.dest("dist/js"))
    .pipe(
      rev.manifest("dist/rev-manifest.json", {
        base: "dist/",
        merge: true,
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("pack-css", function () {
  return gulp
    .src(["src/css/*.css"])
    .pipe(concat("stylesheet.css"))
    .pipe(cleanCss())
    .pipe(rev())
    .pipe(gulp.dest("dist/css"))
    .pipe(
      rev.manifest("dist/rev-manifest.json", {
        base: "dist/",
        merge: true,
      })
    )
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-img", function () {
  return gulp.src(["src/img/*"]).pipe(gulp.dest("dist/img"));
});

gulp.task("copy-favicon", function () {
  return gulp.src(["src/favicon.ico"]).pipe(gulp.dest("dist"));
});

gulp.task("pack-html", function () {
  var manifest = gulp.src("dist/rev-manifest.json");

  return gulp
    .src(["src/**/*.html"], {
      base: "src",
    })
    .pipe(
      htmlreplace({
        css: "css/stylesheet.css",
        js: "js/bundle.js",
      })
    )
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest("dist"));
});

gulp.task(
  "default",
  gulp.series(
    "clean",
    "pack-js",
    "pack-css",
    "copy-img",
    "copy-favicon",
    "pack-html"
  )
);
