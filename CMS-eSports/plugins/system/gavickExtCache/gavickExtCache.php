<?php

defined('_JEXEC') or die;

jimport('joomla.plugin.plugin');


class plgSystemGavickExtCache extends JPlugin
{

	var $_cache = null;
	var $_gkcache = null;

	/**
	 * Constructor
	 *
	 * @access	protected
	 * @param	object	$subject The object to observe
	 * @param	array	$config  An array that holds the plugin configuration
	 */
	function __construct(& $subject, $config)
	{
        
        parent::__construct($subject, $config);

		//Set the language in the class
		$config = JFactory::getConfig();
			
			
		if($this->params->get('template_name', '') == '') 
		{
			// get name from template settings 
			$templateParams = JFactory::getApplication()->getTemplate(true);
			$name = $templateParams->template;
			// delete gk_ prefix
			$name = str_replace('gk_', '', $name);
		} else {
			// get from plugin settings
			$name = $this->params->get('template_name', '');
		}
			
		$options = array(
			'defaultgroup'	=> 'page',
			'browsercache'	=> false,
			'template_name' => $name,
			'caching'		=> false,
		);

		jimport('joomla.cache.cache');
		
		// add gavick cache instance
		$file = dirname(__file__) . DS . 'gk_assets' . DS . 'gk.cache.php';
        if (!is_file($file)) return null;
        require_once ($file);
		
		$this->_cache = GKCache::getInstance('page', $options);

		// end custom code
	}

	/**
	* Converting the site URL to fit to the HTTP request
	*
	*/
	function onAfterInitialise()
	{
		global $_PROFILER;
		$app	= JFactory::getApplication();
		$user	= JFactory::getUser();

		if ($app->isAdmin() || JDEBUG) {
			return;
		}

		if ($user->get('guest') && $_SERVER['REQUEST_METHOD'] == 'GET') {
			$this->_cache->setCaching(true);
		}

		$data  = $this->_cache->get();

		if ($data !== false)
		{
			JResponse::setBody($data);

			echo JResponse::toString($app->getCfg('gzip'));

			if (JDEBUG)
			{
				$_PROFILER->mark('afterCache');
				echo implode('', $_PROFILER->getBuffer());
			}

			$app->close();
		}
	}

	function onAfterRender()
	{
		$app = JFactory::getApplication();

		if ($app->isAdmin() || JDEBUG) {
			return;
		}

		$user = JFactory::getUser();
		if ($user->get('guest')) {
			//We need to check again here, because auto-login plugins have not been fired before the first aid check
			$this->_cache->store();
		}
	}
}
