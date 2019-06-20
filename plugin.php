<?php
/**
 * Plugin Name: Guttenberg Addons
 * Author: Jundell Agbo
 * Description: Add new custom blocks in guttenberg
 * Version: 1.0.0
 */

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
    plugin_dir_url(__FILE__) . 'guttenberg_blocks_addons.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}
 
add_action('enqueue_block_editor_assets', 'GUTTENBERG_ADDONNS_BLOCKFILES_LOADER');