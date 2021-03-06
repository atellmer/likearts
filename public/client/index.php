<!DOCTYPE html>
<html lang="ru" data-ng-app="app">

<head data-ng-controller="HeadController as head">
	<base href="/">
	<meta name="fragment" content="!">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="Likearts">
	<meta name="application-name" content="Likearts">
	<meta name="HandheldFriendly" content="true">
	<link rel="apple-touch-icon" sizes="57x57" href="public/client/img/favicon/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="public/client/img/favicon/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="public/client/img/favicon/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="public/client/img/favicon/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="public/client/img/favicon/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="public/client/img/favicon/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="public/client/img/favicon/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="public/client/img/favicon/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="public/client/img/favicon/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="public/client/img/favicon/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="public/client/img/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="public/client/img/favicon/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="public/client/img/favicon/favicon-16x16.png">
	<link rel="icon" type="image/x-icon" href="public/client/img/favicon/favicon.ico">
	<link rel="manifest" href="public/client/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="public/client/img/favicon/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<meta property="vk:app_id" content="5353912">
	<meta property="og:url" content="http://likearts.ru">
	<meta property="og:type" content="website">
	<meta property="og:title" content="{{head.title ? head.title : head.defaultTitle}}">
	<meta property="og:description" content="{{head.description ? head.description : head.defaultDescription}}">
	<meta property="og:image" content="{{head.image ? head.image : head.defaultImage}}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@likearts">
	<meta name="twitter:creator" content="@likearts">
	<meta name="twitter:title" content="{{head.title ? head.title : head.defaultTitle}}">
	<meta name="twitter:description" content="{{head.description ? head.description : head.defaultDescription}}">
	<meta name="twitter:image" content="{{head.image ? head.image : head.defaultImage}}">
	<title data-ng-bind="head.title ? head.title : head.defaultTitle"></title>
	<meta name="description" content="{{head.description ? head.description : head.defaultDescription}}">
	<meta name="keywords" content="{{head.keywords ? head.keywords : head.defaultKeywords}}">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="google-site-verification" content="u9f26_lGx5wnttybbPTfvzmqbT9kJYlrqNtFi3rFo_w">
	<meta name="yandex-verification" content="6776dc3d70e6a139">
	<meta name="wmail-verification" content="bd6e96f84b8a737dcabdbc35ad9a790c">
	<link rel="stylesheet" href="public/client/bower_components/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="public/client/bower_components/angular-material/angular-material.min.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="public/client/dist/bundle.min.css">
</head>

<body>
	<lk-container></lk-container>
	<script src="public/client/bower_components/jquery/dist/jquery.min.js"></script>
	<script src="public/client/bower_components/angular/angular.min.js"></script>
	<script src="public/client/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
	<script src="public/client/bower_components/angular-animate/angular-animate.min.js"></script>
	<script src="public/client/bower_components/angular-aria/angular-aria.min.js"></script>
	<script src="public/client/bower_components/angular-material/angular-material.min.js"></script>
	<script src="public/client/bower_components/hammerjs/hammer.min.js"></script>
	<script src="public/client/bower_components/AngularHammer/angular.hammer.min.js"></script>
	<script src="public/client/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
	<script src="public/client/bower_components/valdr/valdr.min.js"></script>
	<script src="public/client/bower_components/valdr/valdr-message.min.js"></script>
	<script src="public/client/dist/bundle.min.js"></script>
	<script>
		(function (d, w, c) {
			(w[c] = w[c] || []).push(function () {
				try {
					w.yaCounter36426520 = new Ya.Metrika({
						id: 36426520,
						clickmap: true,
						trackLinks: true,
						accurateTrackBounce: true,
						webvisor: true
					});
				} catch (e) {}
			});
			var n = d.getElementsByTagName("script")[0],
				s = d.createElement("script"),
				f = function () {
					n.parentNode.insertBefore(s, n);
				};
			s.type = "text/javascript";
			s.async = true;
			s.src = "https://mc.yandex.ru/metrika/watch.js";
			if (w.opera == "[object Opera]") {
				d.addEventListener("DOMContentLoaded", f, false);
			} else {
				f();
			}
		})(document, window, "yandex_metrika_callbacks");
	</script>
	<noscript>
		<div><img src="https://mc.yandex.ru/watch/36426520" style="position:absolute; left:-9999px;" alt="" /></div>
	</noscript>
</body>

</html>