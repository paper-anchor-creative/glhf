<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package Sip
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'sip' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
		
		<div class="site-branding">
			<?php if ( is_front_page() ) : ?>
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/glhf-logo.svg" alt="<?php bloginfo( 'name' ); ?>"></a>
				<h1 class="site-title"><?php bloginfo( 'name' ); ?></h1>
				<h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
			<?php else : ?>
				<h2 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h2>
				<h3 class="site-description"><?php bloginfo( 'description' ); ?></h3>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<nav id="site-navigation" class="main-navigation" role="navigation">
			<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
		</nav><!-- #site-navigation -->

		<a href="#" class="cart"><i class="fa fa-shopping-cart"></i></a>

		<div class="site-builder">
			<a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
			<a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
			<a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
			<a href="#" class="shirt-builder-toggle">ShirtBuilder</a>
		</div>
	</header><!-- #masthead -->

	<div id="shirt-builder">
		
	</div>
	
	<div id="content" class="site-content">
