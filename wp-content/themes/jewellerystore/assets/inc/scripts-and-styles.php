<?php


add_action('wp_enqueue_scripts', 'theme_name_scripts');

function theme_name_scripts()
{

	wp_enqueue_script('jquery');
	wp_register_script('jquery', get_template_directory_uri() . '/assets/js/jquery.min.js', '', '', true);
	wp_enqueue_script('jquery');

	wp_register_script('slick', get_template_directory_uri() . '/assets/js/slick.min.js', '', '', true);
	wp_enqueue_script('slick');

	wp_register_script('plyr_js', get_template_directory_uri() . '/assets/js/plyr.min.js', '', '', true);
	wp_enqueue_script('plyr_js');

	wp_register_script('custom', get_template_directory_uri() . '/assets/js/custom.js', '', '', true);
	wp_localize_script('custom', 'true_obj', array(
		'ajax_url' => admin_url('admin-ajax.php')
	));
	wp_enqueue_script('custom');
}

add_action('wp_enqueue_scripts', 'inclede_style');

function inclede_style()
{
	wp_register_style('fonts', get_template_directory_uri() . '/assets/css/custom-fonts.css');
	wp_enqueue_style('fonts');

	wp_register_style('style_slick', get_template_directory_uri() . '/assets/css/slick.css');
	wp_enqueue_style('style_slick');

	wp_register_style('reset', get_template_directory_uri() . '/assets/css/reset.css');
	wp_enqueue_style('reset');

	wp_register_style('plyr', get_template_directory_uri() . '/assets/css/plyr.css');
	wp_enqueue_style('plyr');

	wp_register_style('style', get_template_directory_uri() . '/assets/css/style.css');
	wp_enqueue_style('style');

	wp_register_style('responsive', get_template_directory_uri() . '/assets/css/responsive.css');
	wp_enqueue_style('responsive');
}
