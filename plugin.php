<?php
/**
 * Plugin Name: Guttenberg Addons
 * Author: Jundell Agbo
 * Description: Add new custom blocks in guttenberg
 * Version: 1.0.0
 */

function GUTTENBERG_ADDONS_LOAD_ADMIN_SCRIPTS() {
	wp_register_style( 'guttenberg_addon_admin_css', plugin_dir_url(__FILE__) . '/assets/admin.css' );
	wp_enqueue_style( 'guttenberg_addon_admin_css' );
	
}
add_action( 'admin_enqueue_scripts', 'GUTTENBERG_ADDONS_LOAD_ADMIN_SCRIPTS' );

function GUTTENBERG_ADDONS_BLOCK_CATEGORY( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'web-dev-blocks',
				'title' => __( 'Web Development Blocks', 'web-dev-blocks' ),
			),
		)
	);
}
add_filter( 'block_categories', 'GUTTENBERG_ADDONS_BLOCK_CATEGORY', 10, 2);

function GUTTENBERG_ADDONNS_BLOCKFILES_LOADER() {
  wp_enqueue_script(
    'my-super-unique-handle',
    plugin_dir_url(__FILE__) . 'bundle.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}
 
add_action('enqueue_block_editor_assets', 'GUTTENBERG_ADDONNS_BLOCKFILES_LOADER');