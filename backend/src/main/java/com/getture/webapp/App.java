package com.getture.webapp;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.getture.webapp.resources.SuggestionResource;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

/**
 * 
 * @author pinogal
 */
public class App extends Application<GettureConfiguration>{

	private static final Logger LOGGER = LoggerFactory.getLogger(App.class);
	
	/* 
	 * Intance variables
	 */
	
	
	@Override
	public void initialize(Bootstrap<GettureConfiguration> bootstrap) {
		// adding bundle for serving the webapp with jetty
    	bootstrap.addBundle(new AssetsBundle());
	}
	
	@Override
	public void run(GettureConfiguration conf, Environment env) throws Exception {
		LOGGER.info("booting up getture webapp");
		
		/*
		 * Registering resources (restful webservices)
		 */
		env.jersey().register(new SuggestionResource());
	}

	/**
	 * Executes the dropwizard app
	 * @param args
	 */
	public static void main (String[] args) {
		try {
			(new App()).run(args);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
