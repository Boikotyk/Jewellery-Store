<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sun');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'xHf8>Q=l(~vzmd|%};Y0nYP{;$*?9XbSn#tf,qR`$ydF9MO$|p>2pNM+p&]Opvn.');
define('SECURE_AUTH_KEY',  '7;qL]WdTM*b?k%Z 5p0iNinFeQXqqOqbIko}{0XELpP!n1,&VIENI26XcW?7LQ/Y');
define('LOGGED_IN_KEY',    'CED&twl2ZN|*o9t4o(O/akDs`<0FPlIY--h]i3NeeSOXycTNkQ688&_u<lLCHK~2');
define('NONCE_KEY',        's[$xYh29/|_[lRyT;h0w?iu<ZwI5FMK=qlJMyGLgf(Nw4>hIT0m1^N;P1g${|Sk|');
define('AUTH_SALT',        '7p!m`=U3_~^QlM^9l,n*M6WBZ-!T$??.K:Q1y0X,L6><=SJRyXly/RuAo-~H%$tM');
define('SECURE_AUTH_SALT', 'V^I-Ko`y?Fa>}}*bk1@h>0,{s*NOpBJ$9bN%*}eI/OA8vUU&px%p<ZZ~JHH)ShqI');
define('LOGGED_IN_SALT',   'y5cng4CF~@I+&>N51e3Y#^i(JzYA<f{~,G+?6U keN[_P5d=G?hD=!7P]W:wN4F4');
define('NONCE_SALT',       '.pi$=1q~{{_cqZ(^|>;20NgHgT&TRA,qJeK-yUjm%T0isYG>2_pMOYn$c2]29D<w');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
