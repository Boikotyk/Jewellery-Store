<?php get_header(); ?>
<main class="main">
    <?php if (have_posts()) :
        while (have_posts()) : the_post();
            the_content();
        endwhile; ?>
    <?php else : ?>
        <p>
            <php _e("No posts found."); ?></php>
        </p>
    <?php endif; ?>
</main>
<?php get_footer(); ?>