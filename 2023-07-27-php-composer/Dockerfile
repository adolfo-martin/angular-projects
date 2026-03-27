FROM php:8.1-apache

WORKDIR /var/www/html/

RUN pecl install xdebug \
    && apt update \
    && apt install libzip-dev -y \
    && docker-php-ext-enable xdebug \
    && a2enmod rewrite \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY composer.json composer.json
COPY composer.lock composer.lock

# RUN groupadd -r user && useradd -r -g user user
# USER user
RUN composer install --no-dev
# RUN composer require mpdf/mpdf

# COPY . .

EXPOSE 80

# docker build -t composer-mpdf:0.2 .