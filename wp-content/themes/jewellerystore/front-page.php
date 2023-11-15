<?php get_header(); ?>
<?php if (have_rows('section_block')) : ?>
    <?php while (have_rows('section_block')) : the_row(); ?>
        <?php if (get_row_layout() == 'hero') : ?>
            <section class="hero section__white">
                <?php $bg_image = get_sub_field('bg_image'); ?>
                <div class="overlay" style="background-image: url('<?php echo $bg_image['url']; ?>')"></div>
                <div class="container">
                    <div class="hero__inner">
                        <div class="content__side">
                            <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                            <h1><?php the_sub_field('title'); ?></h1>
                            <p><?php the_sub_field('description'); ?></p>
                            <div class="btn__box">
                                <?php $shop_link = get_sub_field('shop_link'); ?>
                                <?php if ($shop_link) { ?>
                                    <a class="btn__white" href="<?php echo $shop_link['url']; ?>" target="<?php echo $shop_link['target']; ?>"><?php echo $shop_link['title']; ?></a>
                                <?php } ?>
                                <?php $hero_link = get_sub_field('hero_link'); ?>
                                <?php if ($hero_link) { ?>
                                    <a class="btn__outline" href="<?php echo $hero_link['url']; ?>" target="<?php echo $hero_link['target']; ?>"><?php echo $hero_link['title']; ?></a>
                                <?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'intro') : ?>
            <section class="intro">
                <div class="container">
                    <div class="intro__inner rows">

                        <div class="column left">
                            <div class="content__side">
                                <div class="img__box">
                                    <?php $intro_image = get_sub_field('intro_image'); ?>
                                    <?php if ($intro_image) { ?>
                                        <img src="<?php echo $intro_image['url']; ?>" alt="<?php echo $intro_image['alt']; ?>" />
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="content__side">
                                <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                                <h2><?php the_sub_field('title'); ?></h2>
                                <h4><?php the_sub_field('title_down'); ?></h4>
                                <p><?php the_sub_field('description'); ?></p>
                                <div class="btn__box">
                                    <?php $shop_link = get_sub_field('shop_link'); ?>
                                    <?php if ($shop_link) { ?>
                                        <a class="btn__white" href="<?php echo $shop_link['url']; ?>" target="<?php echo $shop_link['target']; ?>"><?php echo $shop_link['title']; ?></a>
                                    <?php } ?>
                                    <?php $hero_link = get_sub_field('hero_link'); ?>
                                    <?php if ($hero_link) { ?>
                                        <a class="btn__outline" href="<?php echo $hero_link['url']; ?>" target="<?php echo $hero_link['target']; ?>"><?php echo $hero_link['title']; ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'products') : ?>
            <section class="products">
                <div class="container">
                    <div class="products__inner">
                        <div class="section__header">
                            <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                            <h5><?php the_sub_field('title'); ?></h5>
                            <p><?php the_sub_field('description'); ?></p>
                        </div>
                        <div class="section__body">
                            <?php $shop_link = get_sub_field('shop_link'); ?>
                            <?php if (have_rows('cat_products')) : ?>
                                <?php while (have_rows('cat_products')) : the_row(); ?>
                                    <div class="rows block__light">
                                        <div class="column left">
                                            <div class="content__side">
                                                <div class="products__prev">
                                                    <?php $category_term = get_sub_field('category'); ?>
                                                    <?php $term_id = $category_term->term_id;

                                                    $category_image_url = get_term_meta($term_id, 'thumbnail_id', true);
                                                    $image_url = wp_get_attachment_url($category_image_url); ?>
                                                    <div class="img__box">
                                                        <img src="<?php echo esc_url($image_url); ?>" alt="Card Product Ad-min" />
                                                    </div>
                                                    <div class="products__prev__content">
                                                        <div class="products__prev__content__inner">

                                                            <h5><?php echo esc_html($category_term->name); ?></h5>
                                                            <p><?php echo esc_html($category_term->description); ?> </p>
                                                            <div class="link__box">
                                                                <?php if ($shop_link) { ?>
                                                                    <a href="<?php echo $shop_link['url']; ?>" target="<?php echo $shop_link['target']; ?>"><?php echo $shop_link['title']; ?></a>
                                                                <?php } ?>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column right">
                                            <div class="content__side">
                                                <div class="products__slider product__items">
                                                    <?php $category_term = get_sub_field('category');
                                                    $category = $category_term->slug;
                                                    $count = get_sub_field('cout_products');

                                                    echo do_shortcode("[custom_featured_product category='{$category}' count='{$count}']");
                                                    ?>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                <?php endwhile; ?>
                            <?php else : ?>
                                <?php // no rows found 
                                ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'offer') : ?>
            <section class="offer">
                <div class="container">
                    <div class="offer__inner rows">
                        <div class="column left">
                            <div class="content__side">
                                <div class="offer__video">
                                    <div class="img__box">
                                        <?php $video_image = get_sub_field('video_image'); ?>
                                        <video controls crossorigin playsinline poster="<?php echo $video_image['url']; ?>">
                                            <source src="<?php the_sub_field('video_link'); ?>" type="video/mp4" size="576">
                                    </div>

                                    </video>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="content__side">
                                <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                                <h2><?php the_sub_field('title'); ?></h2>
                                <h4><?php the_sub_field('secondary_title'); ?></h4>
                                <div class="btn__box">
                                    <?php $link_btn = get_sub_field('link_btn'); ?>
                                    <?php if ($link_btn) { ?>
                                        <a class="btn__black" href="<?php echo $link_btn['url']; ?>" target="<?php echo $link_btn['target']; ?>"><?php echo $link_btn['title']; ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'discount') : ?>
            <section class="discount custom__list">
                <div class="container">
                    <div class="discount__inner rows">
                        <div class="column left">
                            <div class="content__side">
                                <h2><?php the_sub_field('title'); ?> <span><?php the_sub_field('discount_value'); ?></span></h2>
                                <h4><?php the_sub_field('sedondary_title'); ?></h4>
                                <?php the_sub_field('description'); ?>

                                <div class="btn__box">
                                    <?php $shop_link = get_sub_field('shop_link'); ?>
                                    <?php if ($shop_link) { ?>
                                        <a class="btn__black" href="<?php echo $shop_link['url']; ?>" target="<?php echo $shop_link['target']; ?>"><?php echo $shop_link['title']; ?></a>
                                    <?php } ?>
                                    <?php $discount_link = get_sub_field('discount_link'); ?>
                                    <?php if ($discount_link) { ?>
                                        <a class="btn__black__outline" href="<?php echo $discount_link['url']; ?>" target="<?php echo $discount_link['target']; ?>"><?php echo $discount_link['title']; ?></a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="content__side">
                                <div class="img__box">
                                    <?php $image = get_sub_field('image'); ?>
                                    <?php if ($image) { ?>
                                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'offer_products') : ?>
            <section class="offer2">
                <div class="container">
                    <div class="offer2__inner rows">
                        <div class="column left">
                            <div class="content__side">
                                <div class="offer2__content__box">
                                    <div class="img__box">
                                        <?php $image = get_sub_field('image'); ?>
                                        <?php if ($image) { ?>
                                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                                        <?php } ?>
                                    </div>
                                    <div class="offer2__content">
                                        <div class="offer2__content__inner">
                                            <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                                            <h3><?php the_sub_field('title'); ?></h3>
                                            <div class="title"><?php the_sub_field('description'); ?></div>
                                            <div class="btn__box">
                                                <?php $link_btn = get_sub_field('link_btn'); ?>
                                                <?php if ($link_btn) { ?>
                                                    <a class="btn__black" href="<?php echo $link_btn['url']; ?>" target="<?php echo $link_btn['target']; ?>"><?php echo $link_btn['title']; ?></a>
                                                <?php } ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column right">
                            <div class="content__side">
                                <div class="offer2__rows">

                                    <?php
                                    $cat_featured_products_term = get_sub_field('cat_featured_products');
                                    if ($cat_featured_products_term) :
                                        $featured_product_ids = wc_get_featured_product_ids();

                                        $args_featured = array(
                                            'post_type'      => 'product',
                                            'posts_per_page' => 3,
                                            'post__in'       => $featured_product_ids,
                                            'tax_query'      => array(
                                                array(
                                                    'taxonomy' => 'product_cat',
                                                    'field'    => 'term_id',
                                                    'terms'    => $cat_featured_products_term->term_id,
                                                ),
                                            ),
                                        );

                                        $query_featured = new WP_Query($args_featured);

                                        if ($query_featured->have_posts()) :
                                    ?>
                                            <div class="offer2__column">
                                                <div class="title">FEATURED PRODUCTS</div>
                                                <div class="product__items">
                                                    <?php while ($query_featured->have_posts()) : $query_featured->the_post(); ?>
                                                        <div class="product__item">
                                                            <div class="product__item__inner">
                                                                <a href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer">
                                                                    <div class="product__item__img">
                                                                        <div class="img__box">
                                                                            <?php the_post_thumbnail('thumbnail'); ?>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product__item__content">
                                                                        <div class="product__title"><?php the_title(); ?></div>
                                                                        <div class="product__price"><?php echo wc_price(get_post_meta(get_the_ID(), '_price', true)); ?></div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    <?php endwhile; ?>
                                                </div>
                                            </div>
                                    <?php
                                            wp_reset_postdata();
                                        endif;
                                    endif;
                                    ?>


                                    <?php
                                    $cat_new_products_term = get_sub_field('cat_new_products');
                                    if ($cat_new_products_term) :
                                        $args_new = array(
                                            'post_type'      => 'product',
                                            'posts_per_page' => 3,
                                            'tax_query'      => array(
                                                array(
                                                    'taxonomy' => 'product_cat',
                                                    'field'    => 'term_id',
                                                    'terms'    => $cat_new_products_term->term_id,
                                                ),
                                            ),
                                            'orderby'        => 'date',
                                            'order'          => 'DESC',
                                        );

                                        $query_new = new WP_Query($args_new);

                                        if ($query_new->have_posts()) :
                                    ?>
                                            <div class="offer2__column">
                                                <div class="title">NEW PRODUCTS</div>
                                                <div class="product__items">
                                                    <?php while ($query_new->have_posts()) : $query_new->the_post(); ?>
                                                        <div class="product__item">
                                                            <div class="product__item__inner">
                                                                <a href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer">
                                                                    <div class="product__item__img">
                                                                        <div class="img__box">
                                                                            <?php the_post_thumbnail('thumbnail'); ?>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product__item__content">
                                                                        <div class="product__title"><?php the_title(); ?></div>
                                                                        <div class="product__price"><?php echo wc_price(get_post_meta(get_the_ID(), '_price', true)); ?></div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    <?php endwhile; ?>
                                                </div>
                                            </div>
                                    <?php
                                            wp_reset_postdata();
                                        endif;
                                    endif;
                                    ?>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        <?php elseif (get_row_layout() == 'blog_section') : ?>
            <section class="blog">
                <div class="container">
                    <div class="blog__inner">
                        <div class="section__header">
                            <div class="subtitle"><?php the_sub_field('subtitle'); ?></div>
                            <h5><?php the_sub_field('title'); ?></h5>
                            <p><?php the_sub_field('description'); ?></p>
                        </div>
                        <div class="section__body">
                            <div class="blog__items blog__slider">
                                <?php if (have_rows('post_items')) : ?>
                                    <?php while (have_rows('post_items')) : the_row(); ?>
                                        <?php $post_object = get_sub_field('items'); ?>
                                        <?php if ($post_object) : ?>
                                            <?php $post = $post_object; ?>
                                            <?php setup_postdata($post); ?>
                                            <div class="blog__item">
                                                <div class="blog__item__inner">
                                                    <div class="blog__item__img">
                                                        <div class="img__box">
                                                            <img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>" />
                                                        </div>
                                                        <div class="blog__item__category"><?php echo get_the_category_list(', '); ?></div>
                                                        <div class="blog__item__date">
                                                            <div class="blog__item__date__day"><?php echo get_the_date('d'); ?></div>
                                                            <div class="blog__item__date__month"><?php echo get_the_date('M'); ?></div>
                                                        </div>
                                                        <div class="blog__item__elements">
                                                            <div class="blog__item__element blog__item__element1"></div>
                                                            <div class="blog__item__element blog__item__element2"></div>
                                                            <div class="blog__item__element blog__item__element3"></div>
                                                        </div>
                                                    </div>
                                                    <div class="blog__item__content">
                                                        <h6><?php the_title(); ?></h6>
                                                        <div class="blog__item__author">
                                                            <span><?php _e('Posted by'); ?></span>
                                                            <?php echo get_avatar(get_the_author_meta('ID'), 32); ?>
                                                            <span><?php the_author(); ?></span>
                                                        </div>
                                                        <p><?php the_excerpt(); ?></p>
                                                        <div class="btn__box">
                                                            <a class="link__gold" href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer"><?php _e('Continue reading'); ?></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php wp_reset_postdata(); ?>
                                        <?php endif; ?>

                                    <?php endwhile; ?>
                                <?php else : ?>
                                    <?php // no rows found 
                                    ?>
                                <?php endif; ?>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <?php endif; ?>
    <?php endwhile; ?>
<?php else : ?>
    <?php // no layouts found 
    ?>
<?php endif; ?>

<?php get_footer(); ?>