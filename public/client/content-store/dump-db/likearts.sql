-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 01, 2016 at 04:25 
-- Server version: 5.5.45
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `likearts`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2016_03_12_200345_create_posts_table', 1),
('2016_03_13_135105_create_portfolios_table', 2),
('2016_03_13_181530_create_prices_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE IF NOT EXISTS `portfolios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_color` text COLLATE utf8_unicode_ci,
  `second_color` text COLLATE utf8_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=7 ;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `description`, `link`, `name`, `image`, `first_color`, `second_color`, `created_at`, `updated_at`) VALUES
(1, 'Стоматология доктора Утяпова', '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://garantslv.ru/', 'somename', 'public/client/img/content/portfolio/1.png', '#8BC34A', '#009688', '2016-03-13 09:00:15', '2016-03-13 09:00:17'),
(2, 'Индустрия красоты', 'Крупнейший поставщик товаров для салонов красоты.', 'http://nail-industry.ru\r\n', 'somename', 'public/client/img/content/portfolio/2.png', '#3F51B5', '#2196F3', '2016-03-13 09:01:55', '2016-03-13 09:01:56'),
(3, 'CoPartner', '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://co-part.ru/', 'somename', 'public/client/img/content/portfolio/3.png', '#3F51B5', '#2196F3', '2016-03-13 09:03:03', '2016-03-13 09:03:05'),
(4, 'Миногинъ', 'Семейное предприятие, которое оказывает услуги в области фотосъемки, а также предлагает широкий выбор изделий ручной работы.', 'http://skminogin.ru', 'somename', 'public/client/img/content/portfolio/4.png', '#3F51B5', '#2196F3', '2016-03-13 09:04:03', '2016-03-13 09:04:05'),
(5, 'ИнвестСтройМелеуз', '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://investstroimeleuz.ru/', 'somename', 'public/client/img/content/portfolio/5.png', '#3F51B5', '#2196F3', '2016-03-13 09:05:06', '2016-03-13 09:06:08'),
(6, 'Справочная служба', '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus.', 'http://csslv.ru/', 'somename', 'public/client/img/content/portfolio/6.png', '#3F51B5', '#2196F3', '2016-03-13 09:06:06', '2016-03-13 09:06:10');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_anonce` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image_detail` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alt_anonce` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `text_anonce` text COLLATE utf8_unicode_ci,
  `text_detail` text COLLATE utf8_unicode_ci,
  `published_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `image_anonce`, `image_detail`, `alt_anonce`, `text_anonce`, `text_detail`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 'Зачем вам сайт?', 'public/client/img/content/posts/anonce/1.jpg', 'public/client/img/content/posts/detail/1.jpg', 'Заказ сайта', 'Современный, шагающий в ногу со временем бизнес неразрывно связан с IT технологиями и интернетом. Поэтому для того, чтобы сохранить и преувеличить поток клиентов необходимо принять тот факт, что вашему бизнесу нужен качественный сайт. На сегодняшний день сайт - это не просто ваша визитка в интернете, сайт – это инструмент для бизнеса, открывающий для вас новые возможности и предоставляющий вам различные вариации развития вашего бизнеса. Наша компания предлагает услуги по разработке, продвижению и оптимизации сайта.', '<p>\r\nСовременный, шагающий в ногу со временем бизнес неразрывно связан с IT технологиями и интернетом. Поэтому для того, чтобы сохранить и преувеличить поток клиентов необходимо принять тот факт, что вашему бизнесу нужен качественный сайт.\r\n</p>\r\n\r\n<p>\r\n На сегодняшний день сайт - это не просто ваша визитка в интернете, сайт – это инструмент для бизнеса, открывающий для вас новые возможности и предоставляющий вам различные вариации развития вашего бизнеса. \r\n </p>\r\n\r\n <p>\r\n Наша компания предлагает услуги по разработке, продвижению и оптимизации сайта. У нас вы можете заказать сайт с индивидуальным дизайном и интерфейсом. \r\n </p>\r\n\r\n<p>\r\n Прежде чем заказать сайт вы получаете подробную консультацию наших специалистов, которые предложат вам несколько вариантов дизайна, интерфейса и помогут определиться с функционалом сайта. \r\n </p>\r\n\r\n<p>\r\n Заказать сайт – значит сделать выбор в пользу современного, активно развивающегося и эффективного бизнеса. Если вы все еще думаете, у кого заказать сайт, остановите свой выбор на нашей студии. И мы откроем для вас новые горизонты развития.\r\n </p>', '2016-03-16 08:22:40', '2016-03-16 08:22:42', '2016-03-16 08:22:48'),
(2, 'Адаптивные сайты', 'public/client/img/content/posts/anonce/2.jpg', 'public/client/img/content/posts/detail/2.jpg', 'Адаптивные сайты', 'Наверняка каждый владелец сайта задумывался, как смотрится его сайт на смартфонах и планшетах и насколько удобно мобильным пользователям с ним работать. Сегодня пользователей смартфонов гораздо больше чем пользователей компьютеров. Поэтому вопрос мобильной версии сайта рано или поздно обсуждается в любой компании, владеющий собственным web-ресурсом. Специально разработанные мобильные версии – такое решение предлагают компании-разработчики, и объясняют это множеством удобств.\r\n\r\nЗачастую на бегу, по дороге на работу или по делам, человеку удобнее открыть сайт и совершить нужные действия на смартфоне и он даже не задумывается, как выглядел бы этот сайт на широком экране.\r\n\r\nОтсюда возникает вопрос – зачем и для чего нужны мобильные версии сайтов? Ответ прост – для выкачивания денег из владельцев сайтов.', '<p>\r\nНаверняка каждый владелец сайта задумывался, как смотрится его сайт на смартфонах и планшетах и насколько удобно мобильным пользователям с ним работать. Сегодня пользователей смартфонов гораздо больше чем пользователей компьютеров. Поэтому вопрос мобильной версии сайта рано или поздно обсуждается в любой компании, владеющий собственным web-ресурсом. Специально разработанные мобильные версии – такое решение предлагают компании-разработчики, и объясняют это множеством удобств.\r\n</p>\r\n\r\n<p>\r\nЗачастую на бегу, по дороге на работу или по делам, человеку удобнее открыть сайт и совершить нужные действия на смартфоне и он даже не задумывается, как выглядел бы этот сайт на широком экране. Отсюда возникает вопрос – зачем и для чего нужны мобильные версии сайтов? Ответ прост – для выкачивания денег из владельцев сайтов.\r\n</p>\r\n\r\n<p>\r\nКакой выход мы предлагаем в данном случае? Мы предлагаем Вам заказать адаптивный сайт. Это сайт, который самостоятельно подстраивается под разрешение экрана, но что самое главное – функционал сайта остается единым как для просмотра со смартфонов так и для работы с компьютером. Вам не надо доплачивать за разработку дополнительного ресурса, у вас будет один – адаптивный сайт, который будет правильно отображаться абсолютно на всех устройствах.\r\n</p>\r\n\r\n<p>\r\nК тому же зачастую разработчики не сразу сообщают тот факт, что для мобильной версии сайта необходим новый домен (поддомен), то есть фактически это абсолютно другой сайт, и информацию теперь же 2-х ваших сайтов нужно как-то синхронизировать.\r\n</p>\r\n\r\n<p>\r\nЗаказать адаптивный сайт – вот верное решение. Вам не нужно будет переживать о том, как отображается ваш сайт на разных устройствах – адаптивные сайты автоматически подстраиваются под разрешение экрана устройства, на котором просматривается сайт. Заказать адаптивный сайт можно в нашей компании. Мы предоставим вам всю необходимую информацию, проконсультируем по вопросам интерфейса и функционала. Чтобы ваш адаптивный сайт был удобен абсолютно каждому пользователю.\r\n</p>', '2016-03-18 18:28:22', '2016-03-18 18:28:24', '2016-03-18 18:28:26');

-- --------------------------------------------------------

--
-- Table structure for table `prices`
--

CREATE TABLE IF NOT EXISTS `prices` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` float DEFAULT NULL,
  `checked` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=10 ;

--
-- Dumping data for table `prices`
--

INSERT INTO `prices` (`id`, `type`, `name`, `price`, `checked`, `created_at`, `updated_at`) VALUES
(1, 'сайт', 'Я только посмотреть...', 0, 0, '2016-03-13 13:45:05', '2016-03-13 13:45:07'),
(2, 'сайт', 'Промо-сайт', 20000, 0, '2016-03-13 13:32:46', '2016-03-13 13:32:48'),
(3, 'сайт', 'Сайт-визитка', 30000, 0, '2016-03-13 13:33:24', '2016-03-13 13:33:25'),
(4, 'сайт', 'Корпоративный сайт', 40000, 0, '2016-03-13 13:33:55', '2016-03-13 13:33:56'),
(5, 'сайт', 'Продающий лендинг', 10000, 0, '2016-03-13 13:34:32', '2016-03-13 13:34:34'),
(6, 'услуга', 'SEO-оптимизация', 10000, 0, '2016-03-13 13:35:06', '2016-03-13 13:35:07'),
(7, 'услуга', 'Продвижение в Яндекс.Директ', 10000, 0, '2016-03-13 13:35:37', '2016-03-13 13:35:40'),
(8, 'услуга', 'Техническое обслуживание сайта на год', 5000, 0, '2016-03-13 13:36:12', '2016-03-13 13:36:13'),
(9, 'сайт', 'Интернет-магазин', 50000, 0, '2016-03-13 13:31:05', '2016-03-13 13:31:08');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
