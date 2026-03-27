FROM php:8.1-apache

# RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www/html/

RUN pecl install xdebug \
    && apt update \
    && apt install libzip-dev -y \
    && docker-php-ext-enable xdebug \
    && a2enmod rewrite \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY --from=composer:2.4 /usr/bin/composer /usr/bin/composer

copy ./app/composer.* ./

RUN composer install --prefer-dist --no-dev --no-scripts --no-progress --no-interaction

copy ./app .

RUN composer dump-autoload --optimize

EXPOSE 80

# docker build -t composer-mpdf:0.7 .