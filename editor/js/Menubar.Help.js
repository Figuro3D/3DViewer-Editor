/**
 * @author Sandra Gesing 
 */

Menubar.Help = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Help' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// Source code

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'Sourcecode based on three.js' );
	option.onClick( function () {

		window.open( 'https://github.com/mrdoob/three.js/tree/master/editor', '_blank' )

	} );
	options.add( option );

	// About

	var option = new UI.Row();
	option.setClass( 'option' );
	option.setTextContent( 'About' );
	option.onClick( function () {

		window.open( 'http://figuro3d.com', '_blank' );

	} );
	options.add( option );

	return container;

};
