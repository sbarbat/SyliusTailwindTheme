const Encore = require('@symfony/webpack-encore');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
// const {InjectManifest, GenerateSW} = require('workbox-webpack-plugin');
const path = require('path');
const glob = require('glob-all');
const _ = require('lodash');


const isProduction = Encore.isProduction();

Encore
    .setOutputPath('public/tailwind-theme')
    .setPublicPath('/tailwind-theme')
    .addEntry('app', './themes/TailwindTheme/assets/app.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSassLoader(function (options) {}, {
        resolveUrlLoader: false
    })
    .enableSourceMaps(!isProduction)
    .enableVersioning(isProduction)
    .enableBuildNotifications(!isProduction)
    .enablePostCssLoader()
;


if(isProduction) {
    Encore.addPlugin(new PurgeCssPlugin({
        paths: glob.sync([
            path.join(__dirname, '../../themes/**/views/**/*.html.twig'),
            path.join(__dirname, '../../themes/**/assets/**/*.js'),
            
            path.join(__dirname, '../../vendor/**/Resources/**/*.html.twig'),
            path.join(__dirname, '../../templates/**/Resources/**/*.html.twig')
        ]),
        extractors: [
            {
                extractor: class {
                    static extract(content) {
                        return content.match(/[A-z0-9-_:\/]+/g) || []
                    }
                },
                extensions: [
                    'twig',
                    'js',
                    'vue',
                ],
                whitelistPatterns: [
                ]
            }
        ]
    }));
}

const config = Encore.getWebpackConfig();
config.name = 'tailwindTheme';

module.exports = config;