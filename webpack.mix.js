const mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const CKEStyles = require('@ckeditor/ckeditor5-dev-utils').styles;
const CKERegex = {
  svg: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
  css: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
};

Mix.listen('configReady', (webpackConfig) => {
  const rules = webpackConfig.module.rules;
  const targetSVG = /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/;
  const targetFont = /(\.(woff2?|ttf|eot|otf)$|font.*\.svg$)/;
  const targetCSS = /\.css$/;

  // exclude CKE regex from mix's default rules
  for (let rule of rules) {
    if (rule.test.toString() === targetSVG.toString()) {
      rule.exclude = CKERegex.svg;
    } else if (rule.test.toString() === targetFont.toString()) {
      rule.exclude = CKERegex.svg;
    } else if (rule.test.toString() === targetCSS.toString()) {
      rule.exclude = CKERegex.css;
    }
  }
});

mix.webpackConfig({
  module: {
    rules: [
      {
        test: CKERegex.svg,
        use: ['raw-loader'],
      },
      {
        test: CKERegex.css,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'postcss-loader',
            options: CKEStyles.getPostCssConfig({
              themeImporter: {
                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
              },
              minify: true,
            }),
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new CKEditorWebpackPlugin({
      // UI 호버 시 설명해주는 언어를 세팅합니다. 일단 영어 en로 설정합니다
      language: 'ko',
      additionalLanguages: 'all',
    }),
  ],
  resolve: {
    modules: [path.join(__dirname, 'resources/js'), 'node_modules'],
  },
  output: {
    filename: '[name].js?id=[chunkhash]',
    chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
});

mix.autoload({
  quill: ['window.Quill', 'quill'],
});

/**
 * Clean old chunks
 */
const fs = require('fs');
const chunkPath = './public/js/chunks';
if (fs.existsSync(chunkPath)) {
  fs.readdirSync(chunkPath)
    .filter((file) => /\.js$/.test(file))
    .map((chunk) => {
      fs.unlinkSync(`${chunkPath}/${chunk}`);
    });
}
const jsPath = './public/js';
if (fs.existsSync(jsPath)) {
  fs.readdirSync(jsPath)
    .filter((file) => /\.js$/.test(file))
    .map((chunk) => fs.unlinkSync(`${jsPath}/${chunk}`));
}

mix
  .react('resources/js/App.jsx', 'public/js')
  .copyDirectory('resources/images', 'public/images')
  .copyDirectory('resources/fonts', 'public/fonts')
  .options({
    processCssUrls: false,
    uglify: {
      parallel: 8, // Use multithreading for the processing
      uglifyOptions: {
        mangle: true,
      },
    },
  });

if (!mix.inProduction()) {
  mix.sourceMaps();
  // mix.browserSync('http://localhost:8000');
} else {
  mix.webpackConfig({
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!index.php',
          '!.htaccess',
          '!favicon.ico',
          '!favicon.png',
          '!robots.txt',
          '!ProfileImage',
          '!manifest.js',
          '!vendor.js',
          '!mix-manifest.json',
        ],
      }),
    ],
  });
}
