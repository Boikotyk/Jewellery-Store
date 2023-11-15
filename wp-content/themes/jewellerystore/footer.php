	<footer class="footer">
		<div class="container">
			<div class="footer__inner rows">
				<div class="footer__column left">
					<div class="footer__column__inner">
						<div class="footer__logo">
							<?php
							$footer_logo = wp_get_attachment_image_src(get_theme_mod('footer_logo'), 'full'); ?>
							<a href="<?php echo home_url('/'); ?>" class="logo_link">
								<img src="<?php echo $footer_logo[0]; ?>" alt="company logo" class="logo_img">
							</a>
						</div>
						<?php
						$footer_description = get_theme_mod('footer_description');
						if (!empty($footer_description)) {
							echo '<p>' . esc_html($footer_description) . '</p>';
						}
						?>
						<div class="social__list">
							<ul>
								<li>
									<a href="http://" target="_blank" rel="noopener noreferrer">
										<?php $footer_address_icon = get_theme_mod('footer_address_icon'); ?>
										<img src="<?php echo $footer_address_icon; ?>" alt="gps"><?php echo esc_html(get_theme_mod('footer_address', '451 Wall Street, UK, London')); ?>
									</a>
								</li>
								<li>
									<a href="tel:<?php echo esc_html(get_theme_mod('footer_phone', '(064) 332-1233')); ?>" target="_blank" rel="noopener noreferrer">
										<?php $footer_phone_icon = get_theme_mod('footer_phone_icon'); ?>
										<img src="<?php echo $footer_phone_icon; ?>" alt="phone"><?php echo _('Phone:'); ?> <?php echo esc_html(get_theme_mod('footer_phone', '(064) 332-1233')); ?>
									</a>
								</li>
								<li>
									<a href="<?php echo esc_html(get_theme_mod('footer_fax', '(099) 453-1357')); ?>" target="_blank" rel="noopener noreferrer">
										<?php $footer_fax_icon = get_theme_mod('footer_fax_icon'); ?>
										<img src="<?php echo $footer_fax_icon; ?>" alt="envelop"><?php echo _('Fax:'); ?> <?php echo esc_html(get_theme_mod('footer_fax', '(099) 453-1357')); ?>
									</a>
								</li>
							</ul>


						</div>
					</div>
				</div>
				<div class="footer__column center">
					<div class="footer__column__inner">
						<div class="title"><?php _e('RECENT POSTS'); ?></div>

						<div class="post__items">
							<?php
							$args = array(
								'post_type'      => 'post',
								'posts_per_page' => 2,
								'orderby'        => 'date',
								'order'          => 'DESC',
							);

							$recent_posts = new WP_Query($args);

							if ($recent_posts->have_posts()) :
								while ($recent_posts->have_posts()) : $recent_posts->the_post();
							?>

									<div class="post__item">
										<div class="post__item__inner">
											<a href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer">
												<div class="post__item__img">
													<div class="img__box">
														<?php
														if (has_post_thumbnail()) {
															the_post_thumbnail('thumbnail');
														}
														?>
													</div>
												</div>
												<div class="post__item__content">
													<div class="post__item__title"><?php the_title(); ?></div>
													<div class="post__item__date"><?php the_date('F j, Y'); ?></div>
												</div>
											</a>
										</div>
									</div>

							<?php
								endwhile;
								wp_reset_postdata();
							endif;
							?>
						</div>
					</div>
				</div>
				<div class="footer__column right">
					<div class="footer__column__inner ">
						<div class="footer__munu__rows rows">
							<div class="footer__munu__column">
								<?php dynamic_sidebar('our_stores'); ?>

							</div>
							<div class="footer__munu__column">
								<?php dynamic_sidebar('useful_links'); ?>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
	</main>
	<div class="modal__window   modal__right modal__product" id="shopping__cart">
		<div class="modal__window__overlay"></div>
		<div class="modal__window__wrapper">
			<?php my_wc_mini_cart_content();
			?>
		</div>
	</div>

	<?php wp_footer(); ?>
	</body>

	</html>