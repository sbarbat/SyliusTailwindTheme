<p align="center">
    <img width="33.333%" src="https://sylius.com/wp-content/uploads/2018/07/logowhite.jpg" />
    <img width="33.333%" src="https://i.imgur.com/EVV4jS8.png" />
    <!-- <img width="33.333%" src="https://miro.medium.com/max/1032/1*OrjCKmou1jT4It5so5gvOA.jpeg" /> -->
    <h1 align="center">Sylius Tailwind Theme</h1>
    <p align="center">Sylius Tailwind theme with build process based on <a target="_blank" href="https://symfony.com/doc/current/frontend.html">Webpack Encore.</a></p>
    It allows to swap to Tailwind-based theme separately in each channel.
</p>

**This theme is under development, feel free to help building the tailwind views! 😁**


# Installation

1. Copy files from repository to `./themes/TailwindTheme`

2. Install Encore

    ```bash
    composer require encore
    ```
    
3. Install node dependencies

    ```bash
    yarn
    yarn add --dev @symfony/webpack-encore sass-loader node-sass tailwindcss autoprefixer postcss-loader webpack-notifier purgecss-webpack-plugin glob-all lodash path
    ```

4. Create postcss config file

    ```bash
    # ./postcss.config.js
    module.exports = {
        plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    }
    ```

4. Create Tailwind config file

    ```bash
    npx tailwind init
    ````

5. Import tailwind-theme config in the main webpack file

    ```bash
    # ./webpack.config.js
    
    const Encore = require('@symfony/webpack-encore');
    const tailwindTheme = require('./themes/TailwindTheme/webpack.config');
    module.exports = [tailwindTheme];
    ```

6. Edit project config files

    ```bash
    # ./config/packages/assets.yaml
    
    framework:
        assets:
            packages:
                bootstrapTheme:
                    json_manifest_path: '%kernel.project_dir%/public/tailwind-theme/manifest.json'  
    ```
    
    ```bash
    # ./config/packages/webpack_encore.yaml
    
    webpack_encore:
        output_path: '%kernel.project_dir%/public/tailwind-theme'
    ```

7. To build the assets, run one of the following commands

    ```bash
    # compile assets once
    yarn encore dev      
    
    # recompile assets automatically when files change
    yarn encore dev --watch
    
    # recompile assets automatically with live reload
    yarn encore dev-server
    
    # create a production build
    yarn encore production
    ```

8. Change theme in the admin panel by visiting the Edit Channel page
