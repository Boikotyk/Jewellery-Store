<!DOCTYPE html>
<html <?php language_attributes(); ?> xmlns="http://www.w3.org/1999/xhtml">


<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>
</head>

<body>
    <header class="main__header" id="header">
        <div class="nav-overlay"></div>

        <div class="container">
            <div class="top_menu">
                <?php $custom_logo_url = wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full'); ?>
                <div class="header_logo">
                    <a href="<?php echo home_url('/'); ?>" class="logo_link">
                        <img src="<?php echo $custom_logo_url[0]; ?>" alt="company logo" class="logo_img">
                    </a>
                </div>
                <nav class="menu main__nav">
                    <div class="main__nav__inner">

                        <?php custom_menu(); ?>

                        <div class="main__nav__btn">
                            <div class="main__nav__btn__left">
                                <div class="login__btn__wrapper">
                                    <a href="<?php echo wp_login_url(); ?>" rel="noopener noreferrer"><?php _e('Login / Register'); ?> </a>
                                </div>
                            </div>
                            <div class="main__nav__btn__right">
                                <div class="search__btn__wrapper">
                                    <a class="modal__open" href="#search__modal"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/search.svg" alt="" /></a>
                                    <div class="modal__window    modal__window__search" id="search__modal">
                                        <div class="modal__window_content">
                                            <div class="button__box">
                                                <button class="modal__window_close close-popup">
                                                </button>
                                            </div>
                                            <div class="madal__window_content_inner">
                                                <div class="search__results_box">
                                                    <div class="search__results_box_inner">
                                                        <div class="search__results_box_inner_top">
                                                            <form id="form" action="POST" class="global__search_form">
                                                                <button type="button" class="search__btn">
                                                                    <img src="<?php echo get_template_directory_uri(); ?>/assets/img/search.svg" alt="">
                                                                </button>
                                                                <input type="search" name="search" id="search" placeholder="Search for products">
                                                                <button id="reset__btn" type="button" class="reset__search">Clear</button>
                                                            </form>
                                                        </div>
                                                        <div class="search__results_box_inner_bottom">

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cart__btn__wrapper">
                                    <a class="cart__btn modal__open" href="#shopping__cart">
                                        <div class="cart__btn__inner">
                                            <img src="<?php echo get_template_directory_uri(); ?>/assets/img/cart.svg" alt="" />
                                            <?php
                                            $cart_quantity = WC()->cart->get_cart_contents_count();
                                            ?>
                                            <span class="qty_cart"><?php echo esc_html($cart_quantity); ?></span>
                                        </div>
                                        <span class="price__total"><?php echo WC()->cart->get_cart_total(); ?></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="hamburger">
                    <span class="hamburger__line hamburger__line-top"></span>
                    <span class="hamburger__line hamburger__line-center"></span>
                    <span class="hamburger__line hamburger__line-bottom"></span>
                </div>
            </div>
        </div>
    </header>
    <main class="main">