package com.getture.webapp.representations;

/**
 * Representation class for suggestion.
 * Useful for json (de)serizalization using jackson.
 * 
 * @author pinogal
 */
public class Suggestion {
	
	private final String name;
	private final String summary;
	private final String urlImg;
	
	public Suggestion () {
		name = null;
		summary = null;
		urlImg = null;
	}
	
	public Suggestion (String aName, String aSummary, String aUrl) {
		name = aName;
		summary = aSummary;
		urlImg = aUrl;
	}

	public String getName() {
		return name;
	}
	
	public String getSummary() {
		return summary;
	}
	
	public String getUrlImg() {
		return urlImg;
	}
}
