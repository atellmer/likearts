--
-- Скрипт сгенерирован Devart dbForge Studio for MySQL, Версия 7.0.49.0
-- Домашняя страница продукта: http://www.devart.com/ru/dbforge/mysql/studio
-- Дата скрипта: 16.03.2016 13:43:02
-- Версия сервера: 5.5.45
-- Версия клиента: 4.1
--


-- 
-- Отключение внешних ключей
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Установить режим SQL (SQL mode)
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Установка кодировки, с использованием которой клиент будет посылать запросы на сервер
--
SET NAMES 'utf8';

-- 
-- Установка базы данных по умолчанию
--
USE likearts;

--
-- Описание для таблицы migrations
--
DROP TABLE IF EXISTS migrations;
CREATE TABLE migrations (
  migration VARCHAR(255) NOT NULL,
  batch INT(11) NOT NULL
)
ENGINE = INNODB
AVG_ROW_LENGTH = 5461
CHARACTER SET utf8
COLLATE utf8_unicode_ci;

--
-- Описание для таблицы portfolios
--
DROP TABLE IF EXISTS portfolios;
CREATE TABLE portfolios (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  description VARCHAR(255) DEFAULT NULL,
  link VARCHAR(255) DEFAULT NULL,
  name VARCHAR(255) DEFAULT NULL,
  image VARCHAR(255) DEFAULT NULL,
  first_color TEXT DEFAULT NULL,
  second_color TEXT DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 7
AVG_ROW_LENGTH = 2730
CHARACTER SET utf8
COLLATE utf8_unicode_ci;

--
-- Описание для таблицы posts
--
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  image_anonce VARCHAR(255) DEFAULT NULL,
  image_detail VARCHAR(255) DEFAULT NULL,
  alt_anonce VARCHAR(255) DEFAULT NULL,
  text_anonce TEXT DEFAULT NULL,
  text_detail TEXT DEFAULT NULL,
  published_at TIMESTAMP NULL DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 11
AVG_ROW_LENGTH = 16384
CHARACTER SET utf8
COLLATE utf8_unicode_ci;

--
-- Описание для таблицы prices
--
DROP TABLE IF EXISTS prices;
CREATE TABLE prices (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  type VARCHAR(255) DEFAULT NULL,
  name VARCHAR(255) DEFAULT NULL,
  price FLOAT DEFAULT NULL,
  checked TINYINT(1) DEFAULT NULL,
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = INNODB
AUTO_INCREMENT = 10
AVG_ROW_LENGTH = 1820
CHARACTER SET utf8
COLLATE utf8_unicode_ci;

-- 
-- Вывод данных для таблицы migrations
--
INSERT INTO migrations VALUES
('2016_03_12_200345_create_posts_table', 1),
('2016_03_13_135105_create_portfolios_table', 2),
('2016_03_13_181530_create_prices_table', 3);

-- 
-- Вывод данных для таблицы portfolios
--
INSERT INTO portfolios VALUES
(1, 'Sitename1', '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://www.somelink.com', 'somename', 'public/client/img/content/portfolio/1.png', '#8BC34A', '#009688', '2016-03-13 14:00:15', '2016-03-13 14:00:17'),
(2, 'Sitename2', '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://www.somelink.com', 'somename', 'public/client/img/content/portfolio/2.png', '#3F51B5', '#2196F3', '2016-03-13 14:01:55', '2016-03-13 14:01:56'),
(3, 'Sitename3', '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://www.somelink.com', 'somename', 'public/client/img/content/portfolio/3.png', '#3F51B5', '#2196F3', '2016-03-13 14:03:03', '2016-03-13 14:03:05'),
(4, 'Sitename4', '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://www.somelink.com', 'somename', 'public/client/img/content/portfolio/4.png', '#3F51B5', '#2196F3', '2016-03-13 14:04:03', '2016-03-13 14:04:05'),
(5, 'Sitename5', '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://www.somelink.com', 'somename', 'public/client/img/content/portfolio/5.png', '#3F51B5', '#2196F3', '2016-03-13 14:05:06', '2016-03-13 14:06:08'),
(6, 'Sitename6', '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'www.somelink.com', 'somename', 'public/client/img/content/portfolio/6.png', '#3F51B5', '#2196F3', '2016-03-13 14:06:06', '2016-03-13 14:06:10');

-- 
-- Вывод данных для таблицы posts
--
INSERT INTO posts VALUES
(1, 'Зачем вам сайт?', 'public/client/img/content/posts/anonce/1.jpg', 'public/client/img/content/posts/detail/1.jpg', 'Заказ сайта', 'Современный, шагающий в ногу со временем бизнес неразрывно связан с IT технологиями и интернетом. Поэтому для того, чтобы сохранить и преувеличить поток клиентов необходимо принять тот факт, что вашему бизнесу нужен качественный сайт. На сегодняшний день сайт - это не просто ваша визитка в интернете, сайт – это инструмент для бизнеса, открывающий для вас новые возможности и предоставляющий вам различные вариации развития вашего бизнеса. Наша компания предлагает услуги по разработке, продвижению и оптимизации сайта.', '<p>\r\nСовременный, шагающий в ногу со временем бизнес неразрывно связан с IT технологиями и интернетом. Поэтому для того, чтобы сохранить и преувеличить поток клиентов необходимо принять тот факт, что вашему бизнесу нужен качественный сайт.\r\n</p>\r\n\r\n<p>\r\n На сегодняшний день сайт - это не просто ваша визитка в интернете, сайт – это инструмент для бизнеса, открывающий для вас новые возможности и предоставляющий вам различные вариации развития вашего бизнеса. \r\n </p>\r\n\r\n <p>\r\n Наша компания предлагает услуги по разработке, продвижению и оптимизации сайта. У нас вы можете заказать сайт с индивидуальным дизайном и интерфейсом. \r\n </p>\r\n\r\n<p>\r\n Прежде чем заказать сайт вы получаете подробную консультацию наших специалистов, которые предложат вам несколько вариантов дизайна, интерфейса и помогут определиться с функционалом сайта. \r\n </p>\r\n\r\n<p>\r\n Заказать сайт – значит сделать выбор в пользу современного, активно развивающегося и эффективного бизнеса. Если вы все еще думаете, у кого заказать сайт, остановите свой выбор на нашей студии. И мы откроем для вас новые горизонты развития.\r\n </p>', '2016-03-16 13:22:40', '2016-03-16 13:22:42', '2016-03-16 13:22:48');

-- 
-- Вывод данных для таблицы prices
--
INSERT INTO prices VALUES
(1, 'сайт', 'Я только посмотреть...', 0, 0, '2016-03-13 18:45:05', '2016-03-13 18:45:07'),
(2, 'сайт', 'Промо-сайт', 20000, 0, '2016-03-13 18:32:46', '2016-03-13 18:32:48'),
(3, 'сайт', 'Сайт-визитка', 30000, 0, '2016-03-13 18:33:24', '2016-03-13 18:33:25'),
(4, 'сайт', 'Корпоративный сайт', 40000, 0, '2016-03-13 18:33:55', '2016-03-13 18:33:56'),
(5, 'сайт', 'Интернет-магазин', 50000, 0, '2016-03-13 18:34:32', '2016-03-13 18:34:34'),
(6, 'услуга', 'SEO-оптимизация', 10000, 0, '2016-03-13 18:35:06', '2016-03-13 18:35:07'),
(7, 'услуга', 'Продвижение в Яндекс.Директ', 10000, 0, '2016-03-13 18:35:37', '2016-03-13 18:35:40'),
(8, 'услуга', 'Техническое обслуживание сайта на год', 5000, 0, '2016-03-13 18:36:12', '2016-03-13 18:36:13'),
(9, 'сайт', 'Продающий лендинг', 10000, 0, '2016-03-13 18:31:05', '2016-03-13 18:31:08');

-- 
-- Восстановить предыдущий режим SQL (SQL mode)
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Включение внешних ключей
-- 
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;