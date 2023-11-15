<?php

/**
 * The template for displaying product content within loops
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.6.0
 */

defined('ABSPATH') || exit;

global $product;

// Ensure visibility.
if (empty($product) || !$product->is_visible()) {
	return;
}
?>
<div <?php wc_product_class('product__item', $product); ?>>
	<div class="product__item__inner">
		<?php
		/**
		 * Hook: woocommerce_before_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_open - 10
		 */
		do_action('woocommerce_before_shop_loop_item');
		?>

		<div class="product__item__img">
			<div class="img__box">
				<?php
				/**
				 * Hook: woocommerce_before_shop_loop_item_title.
				 *
				 * @hooked woocommerce_show_product_loop_sale_flash - 10
				 * @hooked woocommerce_template_loop_product_thumbnail - 10
				 */
				do_action('woocommerce_before_shop_loop_item_title');
				?>
			</div>
			<div class="product__item__links">
				<img class="add__cart" src="<?php echo get_template_directory_uri(); ?>/assets/img/cart-gray.svg" alt="cart-gray" />

				<?php
				/**
				 * Display the quantity of items in the cart.
				 */
				$cart_quantity = WC()->cart->get_cart_contents_count();
				?>
				<span class="qty_cart"><?php echo esc_html($cart_quantity); ?></span>
				<a href="<?php the_permalink(); ?>">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/img/search-grey.svg" alt="search-grey" />
				</a>
			</div>
		</div>

		<div class="product__item__content">
			<?php
			/**
			 * Hook: woocommerce_shop_loop_item_title.
			 *
			 * @hooked woocommerce_template_loop_product_title - 10
			 */
			//do_action('woocommerce_shop_loop_item_title');
			the_title();
			?>

			<?php
			/**
			 * Display product category.
			 */
			$terms = get_the_terms($product->get_id(), 'product_cat');
			if ($terms && !is_wp_error($terms)) {
				$product_category = array();
				foreach ($terms as $term) {
					$product_category[] = $term->name;
				}
				echo '<div class="product__category">' . implode(', ', $product_category) . '</div>';
			}
			?>

			<?php
			/**
			 * Hook: woocommerce_after_shop_loop_item_title.
			 *
			 * @hooked woocommerce_template_loop_rating - 5
			 * @hooked woocommerce_template_loop_price - 10
			 */
			do_action('woocommerce_after_shop_loop_item_title');
			?>
		</div>

		<?php
		/**
		 * Hook: woocommerce_after_shop_loop_item.
		 *
		 * @hooked woocommerce_template_loop_product_link_close - 5
		 * @hooked woocommerce_template_loop_add_to_cart - 10
		 */
		do_action('woocommerce_after_shop_loop_item');
		?>
	</div>
</div>