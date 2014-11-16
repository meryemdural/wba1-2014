<?php
/**
 * @package     Joomla.Platform
 * @subpackage  Cache
 *
 * @copyright   Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */

defined('JPATH_PLATFORM') or die;


class GKCacheController extends JCacheController
{

	public $cache;

	public $options;


	public function __construct($options)
	{
		$this->cache 	= new JCache($options);
		$this->options 	= & $this->cache->_options;

		// Overwrite default options with given options
		foreach ($options AS $option=>$value) {
			if (isset($options[$option])) {
				$this->options[$option] = $options[$option];
			}
		}
	}

	/**
	 * Magic method to proxy JCacheControllerMethods
	 *
	 * @param   string  $name       Name of the function
	 * @param   array   $arguments  Array of arguments for the function
	 *
	 * @return  mixed
	 *
	 * @since   11.1
	 */
	public function __call ($name, $arguments)
	{
		$nazaj = call_user_func_array (array ($this->cache, $name), $arguments);
		return $nazaj;
	}

	public static function getInstance($type = 'output', $options = array())
	{
		// create instance of gk.page storage
		GKCacheController::addIncludePath(JPATH_PLATFORM . '/joomla/cache/controller');
		
		$file = dirname(__file__) . DS . 'gk.page.php';
        if (!is_file($file)) return null;
        require_once ($file);
		
		
		$type = strtolower(preg_replace('/[^A-Z0-9_\.-]/i', '', $type));

		$class = 'GKCacheController'.ucfirst($type);
		
		if (!class_exists($class)) {
			// Search for the class file in the JCache include paths.
			jimport('joomla.filesystem.path');

			if ($path = JPath::find(JCacheController::addIncludePath(), strtolower($type).'.php')) {
				require_once $path;
			} else {
				JError::raiseError(500, 'Unable to load Cache Controller: '.$type);
			}
		}

		return new $class($options);
	}

}