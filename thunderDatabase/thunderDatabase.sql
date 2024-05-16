DROP DATABASE IF EXISTS `thunderDatabase`;
CREATE DATABASE `thunderDatabase`;
USE `thunderDatabase`;

CREATE TABLE `products` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `price` int(50) NOT NULL,
  `discount` smallint(3) default null,
  `product_name` varchar(95) not null,
  `image` varchar(95) not null,
  `created_at` timestamp NOT NULL DEFAULT now(),
  `updated_at` timestamp NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`)
);

create table `categories` (
	`id` smallint(6) unsigned not null auto_increment,
	`name` varchar(96) not null,
	primary key (`id`)
);

create table `products_categories` (
	`id` smallint(9) unsigned not null auto_increment,
	`id_product` smallint(6) unsigned not null,
	`id_category` smallint(6) unsigned not null,
	primary key (`id`),
	key `products_categories_FK` (`id_product`),
	key `products_categories_FK_1` (`id_category`),
	CONSTRAINT `products_categories_FK` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`),
	CONSTRAINT `products_categories_FK_1` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`)
);

create table `users` (
	`id` varchar(96) NOT NULL,
	`name` varchar(96) not null,
	`last_name` varchar(96) not null,
	`email` varchar(96) not null,
	`password` varchar(96) not null,
	`profile_picture` varchar(96) not null,
	`rank` varchar(96) not null,
	`created_at` timestamp NOT NULL DEFAULT now(),
	`updated_at` timestamp NOT NULL DEFAULT now(),
	primary key (`id`)
);

create table `shopping_cart` (
	`id` smallint(9) unsigned not null auto_increment,
	`id_user` varchar(96) not null,
	`id_product` smallint(6) unsigned not null,
	primary key (`id`),
	key `shopping_cart_FK` (`id_user`),
	key `shopping_cart_FK_1` (`id_product`),
	CONSTRAINT `shopping_cart_FK` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`),
	CONSTRAINT `shopping_cart_FK_1` FOREIGN KEY (`id_product`) REFERENCES `products`(`id`)
);