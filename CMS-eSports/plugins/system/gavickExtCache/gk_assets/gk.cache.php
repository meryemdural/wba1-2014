<?php
/**
 * @package     Joomla.Platform
 * @subpackage  Cache
 *
 * @copyright   Copyright (C) 2005 - 2011 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE
 */

defined('JPATH_PLATFORM') or die;

//Register the storage class with the loader
JLoader::register('JCacheStorage', dirname(__FILE__) . '/storage.php');

//Register the controller class with the loader
JLoader::register('JCacheController', dirname(__FILE__) . '/controller.php');

class GKCache extends JCache
{

	public static function getInstance($type = 'output', $options = array())
	{
		$file = dirname(__file__) . DS . 'gk.controller.php';
        if (!is_file($file)) return null;
        require_once ($file);
		// custom changes - instance of GKCacheController 
		return GKCacheController::getInstance($type, $options);
	}

}