<?php
require_once("assets/inc/scripts-and-styles.php");

function theme_setup()
{
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
    register_nav_menus(
        array(
            'header-menu' => __('Header Menu'),
        )
    );
}
add_action('after_setup_theme', 'theme_setup');


function widgets_init_footer()
{
    register_sidebar(array(
        'name' => 'OUR STORES',
        'id' => 'our_stores',
        'before_widget' => '<ul class="footer__munu">',
        'after_widget' => '</ul>',
    ));
    register_sidebar(array(
        'name' => 'USEFUL LINKS',
        'id' => 'useful_links',
        'before_widget' => '<ul class="footer__munu">',
        'after_widget' => '</ul>',
    ));
}
add_action('widgets_init', 'widgets_init_footer');


function custom_theme_customize_register($wp_customize)
{
    $wp_customize->add_setting('footer_logo', array());

    $wp_customize->add_control(new WP_Customize_Cropped_Image_Control($wp_customize, 'footer_logo', array(
        'label'    => __('Footer Logo'),
        'section'  => 'title_tagline',
        'settings' => 'footer_logo',
    )));

    $wp_customize->add_setting('footer_description', array(
        'default'           => '',
        'sanitize_callback' => 'wp_kses_post',
    ));

    $wp_customize->add_control('footer_description', array(
        'label'    => __('Footer Description'),
        'section'  => 'title_tagline',
        'type'     => 'textarea',
    ));

    $wp_customize->add_setting('footer_address_icon', array());

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_address_icon', array(
        'label'    => __('Footer Address Icon'),
        'section'  => 'title_tagline',
        'settings' => 'footer_address_icon',
    )));

    $wp_customize->add_setting('footer_address', array(
        'default'           => '',
        'sanitize_callback' => 'wp_kses_post',
    ));

    $wp_customize->add_control('footer_address', array(
        'label'    => __('Footer Address'),
        'section'  => 'title_tagline',
        'type'     => 'text',
    ));
    $wp_customize->add_setting('footer_phone_icon', array());

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_phone_icon', array(
        'label'    => __('Footer Phone Icon'),
        'section'  => 'title_tagline',
        'settings' => 'footer_phone_icon',
    )));
    $wp_customize->add_setting('footer_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('footer_phone', array(
        'label'    => __('Footer Phone'),
        'section'  => 'title_tagline',
        'type'     => 'text',
    ));
    $wp_customize->add_setting('footer_fax_icon', array());

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_fax_icon', array(
        'label'    => __('Footer Fax Icon'),
        'section'  => 'title_tagline',
        'settings' => 'footer_fax_icon',
    )));

    $wp_customize->add_setting('footer_fax', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('footer_fax', array(
        'label'    => __('Footer Fax'),
        'section'  => 'title_tagline',
        'type'     => 'text',
    ));
}
add_action('customize_register', 'custom_theme_customize_register');




function custom_menu()
{
    $menu_args = array(
        'theme_location'  => 'header-menu',
        'menu'            => 'top',
        'container'       => 'ul',
        'container_id'    => 'menu-header-menu',
        'container_class' => 'main__menu',
        'menu_id'         => 'menu-header-menu',
        'menu_class'      => 'main__menu',
        'depth'           => 3,
        'walker'          => new Custom_Walker_Nav_Menu(),
    );

    wp_nav_menu($menu_args);
}


class Custom_Walker_Nav_Menu extends Walker
{
    public $tree_type = array('post_type', 'taxonomy', 'custom');
    public $db_fields = array('parent' => 'menu_item_parent', 'id' => 'db_id');

    public function start_lvl(&$output, $depth = 0, $args = null)
    {
        $t = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\t";
        $n = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\n";
        $indent = str_repeat($t, $depth);
        $classes = array('sub__menu');
        $class_names = implode(' ', apply_filters('nav_menu_submenu_css_class', $classes, $args, $depth));
        $atts = array('class' => !empty($class_names) ? $class_names : '');
        $atts = apply_filters('nav_menu_submenu_attributes', $atts, $args, $depth);
        $attributes = $this->build_atts($atts);
        $output .= "{$n}{$indent}<ul{$attributes} class=\"sub__menu__inner\">{$n}";
    }

    public function end_lvl(&$output, $depth = 0, $args = null)
    {
        $t = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\t";
        $n = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\n";
        $indent = str_repeat($t, $depth);
        $output .= "$indent</ul>{$n}";
    }

    public function start_el(&$output, $data_object, $depth = 0, $args = null, $current_object_id = 0)
    {
        $menu_item = $data_object;
        $t = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\t";
        $n = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\n";
        $indent = $depth ? str_repeat($t, $depth) : '';
        $classes = empty($menu_item->classes) ? array() : (array) $menu_item->classes;
        $classes[] = 'menu-item-' . $menu_item->ID;
        $args = apply_filters('nav_menu_item_args', $args, $menu_item, $depth);
        $class_names = implode(' ', apply_filters('nav_menu_css_class', array_filter($classes), $menu_item, $args, $depth));
        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $menu_item->ID, $menu_item, $args, $depth);
        $li_atts = array('id' => !empty($id) ? $id : '', 'class' => !empty($class_names) ? $class_names : '');
        $li_atts = apply_filters('nav_menu_item_attributes', $li_atts, $menu_item, $args, $depth);
        $li_attributes = $this->build_atts($li_atts);
        $output .= $indent . '<li' . $li_attributes . '>';
        $atts = array('title' => !empty($menu_item->attr_title) ? $menu_item->attr_title : '', 'target' => !empty($menu_item->target) ? $menu_item->target : '');
        $atts['rel'] = '_blank' === $menu_item->target && empty($menu_item->xfn) ? 'noopener' : $menu_item->xfn;
        $atts['href'] = !empty($menu_item->url) ? ('#privacy-policy' === $menu_item->url ? $menu_item->url : esc_url($menu_item->url)) : '#';
        $atts['aria-current'] = $menu_item->current ? 'page' : '';
        $atts = apply_filters('nav_menu_link_attributes', $atts, $menu_item, $args, $depth);
        $attributes = $this->build_atts($atts);
        $title = apply_filters('the_title', $menu_item->title, $menu_item->ID);
        $title = apply_filters('nav_menu_item_title', $title, $menu_item, $args, $depth);
        $item_output = $args->before . '<a' . $attributes . ' class="menu__item">' . $args->link_before . $title . $args->link_after . '</a>' . $args->after;
        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $menu_item, $depth, $args);
    }

    public function end_el(&$output, $data_object, $depth = 0, $args = null)
    {
        $t = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\t";
        $n = isset($args->item_spacing) && 'discard' === $args->item_spacing ? '' : "\n";
        $output .= "<span class=\"menu__arrow menu__arrow__lvl{$depth}\"></span></li>{$n}";
    }

    protected function build_atts($atts = array())
    {
        $attribute_string = '';
        foreach ($atts as $attr => $value) {
            if (false !== $value && '' !== $value && is_scalar($value)) {
                $value = 'href' === $attr ? esc_url($value) : esc_attr($value);
                $attribute_string .= ' ' . $attr . '="' . $value . '"';
            }
        }
        return $attribute_string;
    }
}

function add_menu_link_class($atts, $item, $args)
{
    if (property_exists($args, 'link_class')) {
        $atts['class'] = $args->link_class;
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'add_menu_link_class', 1, 3);


function disable_content_editor()
{
    if (isset($_GET['post'])) {
        $post_ID = $_GET['post'];
    } else if (isset($_POST['post_ID'])) {
        $post_ID = $_POST['post_ID'];
    }

    if (!isset($post_ID) || empty($post_ID)) {
        return;
    }

    remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'disable_content_editor');


function my_deregister_scripts()
{
    wp_deregister_script('wp-embed');
}

function custom_featured_product_shortcode($atts)
{
    $atts = shortcode_atts(
        array(
            'category' => 'jewelry',
            'count'    => -1,
        ),
        $atts,
        'custom_featured_product'
    );

    $featured_product_ids = wc_get_featured_product_ids();

    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => $atts['count'],
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'slug',
                'terms'    => $atts['category'],
            ),
        ),
        'orderby'        => 'date',
        'order'          => 'DESC',
        'post__in'       => $featured_product_ids,
    );

    $query = new WP_Query($args);

    ob_start();

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
            wc_get_template_part('content', 'product');
        endwhile;
    endif;

    wp_reset_postdata();

    return ob_get_clean();
}
add_shortcode('custom_featured_product', 'custom_featured_product_shortcode');

function update_cart_quantity()
{
    $product_id = isset($_POST['product_id']) ? absint($_POST['product_id']) : 0;
    $quantity = isset($_POST['quantity']) ? wc_stock_amount($_POST['quantity']) : 1;

    WC()->cart->add_to_cart($product_id, $quantity);

    $cart_quantity = WC()->cart->get_cart_contents_count();
    $cart_total = WC()->cart->get_cart_total();

    wp_send_json(['cart_quantity' => $cart_quantity, 'cart_total' => $cart_total]);
}

add_action('wp_ajax_update_cart_quantity', 'update_cart_quantity');
add_action('wp_ajax_nopriv_update_cart_quantity', 'update_cart_quantity');

function my_wc_mini_cart_content()
{
    $cart = WC()->cart->get_cart(); ?>
    <div class="modal__window_content  <?php if (WC()->cart->is_empty()) {
                                            echo 'empty__cart';
                                        }
                                        ?>">
        <div class="modal__window_content__header">
            <div class="modal__window__title">
                <?php _e('Shopping cart'); ?>
            </div>
            <div class="button__box">
                <a href="javascript:void(0);" class="modal__window_close close-popup">
                </a>
            </div>
        </div>
        <div class="madal__window_content_inner">
            <div class="product__items">
                <?php foreach ($cart as $cart_item_key => $cart_item) :
                    $_product     = apply_filters('woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key);
                    $product_id   = apply_filters('woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key); ?>

                    <div class="product__item">
                        <div class="product__item__inner">
                            <div class="product__item__img">
                                <div class="img__box">
                                    <?php
                                    $thumbnail = apply_filters('woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key); ?>

                                    <?php echo $thumbnail; ?> </div>
                            </div>
                            <div class="product__item__content">
                                <a class="product__remove"><img src="<?php echo get_template_directory_uri();
                                                                        ?>/assets/img/close-grey.svg" alt="remove-product"></a>
                                <div class="product__title">
                                    <?php echo wp_kses_post(apply_filters('woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key)) . '&nbsp;'; ?>

                                    <?php echo wc_get_formatted_cart_item_data($cart_item); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
                                    ?>
                                </div>
                                <div class="product__quantity">
                                    <div class="quantity_inner">
                                        <button class="quantity__btn bt_minus">
                                            -
                                        </button>
                                        <input type="text" value="<?php echo esc_attr($cart_item['quantity']); ?>" size="2" class="quantity product__count" data-max-count="1000" data-product-id="<?php echo esc_attr($product_id); ?>" data-product-price="<?php echo esc_attr($product_price); ?>" />
                                        <button class="quantity__btn bt_plus">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div class="product__price"><span class="count__price">
                                        <?php echo apply_filters('woocommerce_checkout_cart_item_quantity', ' <strong class="product-quantity">' . sprintf('&nbsp;%s', $cart_item['quantity']) . '</strong>', $cart_item, $cart_item_key); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped 
                                        ?>

                                    </span>
                                    <div class="count__price__element">x </div><?php echo wc_price($_product->get_price()); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
                <div class="product__empty">
                    <div class="product__empty__img">
                        <img src="<?php echo get_template_directory_uri();
                                    ?>/assets/img/empty-cart.svg" alt="">
                    </div>
                    <div class="product__empty__title"><?php _e('No products in the cart.');
                                                        ?></div>
                    <div class="btn__box">
                        <a class="btn__gold" href="<?php echo get_permalink(wc_get_page_id('shop'));
                                                    ?>"><?php _e('RETURN TO SHOP');
                                                        ?></a>
                    </div>
                </div>
            </div>
        </div>
        <?php do_action('woocommerce_review_order_after_order_total'); ?>
        <div class="modal__window_content__footer">
            <div class="subtotal__wrapper">
                <div class="subtotal__title"><?php _e('Subtotal:'); ?></div>
                <div class="subtotal__price"><?php echo wc_price(WC()->cart->get_subtotal()); ?></div>
            </div>
            <div class="free__shipping__wrapper">
                <div class="free__shipping">Add <span class="required__price">$1,102.00</span> to cart and get <span>free shipping!</span> </div>
                <div class="free__shipping__progres">
                    <div class="progress__line__wrapper">
                        <div class="progress__line">
                            <div class="progress__line__inner"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn__box">
                <div class="btn__box">
                    <a class="btn__grey" href="<?php echo wc_get_cart_url(); ?>"><?php _e('VIEW CART'); ?></a>
                    <a class="btn__gold" href="<?php echo wc_get_checkout_url(); ?>"><?php _e('CHECKOUT'); ?></a>
                </div>

            </div>
        </div>
    </div>
<?php
}


add_action('wp_ajax_update_mini_cart', 'update_mini_cart');
add_action('wp_ajax_nopriv_update_mini_cart', 'update_mini_cart');

function update_mini_cart()
{
    ob_start();
    my_wc_mini_cart_content();
    $mini_cart_content = ob_get_clean();

    echo json_encode(array(
        'fragments' => array(
            '.modal__window_content' => $mini_cart_content,
        ),
    ));

    wp_die();
}

add_action('wp_ajax_update_mini_cart', 'update_mini_cart_callback');
add_action('wp_ajax_nopriv_update_mini_cart', 'update_mini_cart_callback');

function update_mini_cart_callback()
{
    if (isset($_POST['product_id'], $_POST['quantity'])) {
        $product_id = sanitize_text_field($_POST['product_id']);
        $quantity = intval($_POST['quantity']);

        WC()->cart->set_quantity($product_id, $quantity);

        $subtotal = wc_price(WC()->cart->get_subtotal());
        $cart_quantity = WC()->cart->get_cart_contents_count();

        $response = array(
            'subtotalHtml' => $subtotal,
            'quantityHtml' => ' <strong class="product-quantity">' . '&nbsp;' . $quantity . '</strong>',
        );

        echo json_encode($response);
    }

    wp_die();
}
add_action('wp_ajax_remove_product_from_mini_cart', 'remove_product_from_mini_cart_callback');
add_action('wp_ajax_nopriv_remove_product_from_mini_cart', 'remove_product_from_mini_cart_callback');

function remove_product_from_mini_cart_callback()
{
    if (isset($_POST['product_id'])) {
        $product_id = sanitize_text_field($_POST['product_id']);
        WC()->cart->remove_cart_item($product_id);
        $subtotal = wc_price(WC()->cart->get_subtotal());
        $response = array(
            'subtotalHtml' => $subtotal,
        );
        echo json_encode($response);
    }

    wp_die();
}
