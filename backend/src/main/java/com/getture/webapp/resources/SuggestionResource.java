package com.getture.webapp.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.getture.webapp.representations.Suggestion;

@Path("/api/suggestion")
@Produces(MediaType.APPLICATION_JSON)
public class SuggestionResource {
	
	@GET
	@Path("/search/{query}")
	public Response getSugestionsByQuery(@PathParam("query") String query) {
		
		Suggestion[] suggestions = new Suggestion[4];
		
		suggestions[0] = new Suggestion("Christiana Mall", 
				"The Christiana Mall is a super-regional, mid-range to upscale shopping mall located between the cities of Newark and Wilmington, Delaware, United States. The mall is situated at the intersection of Interstate 95 (exits 4A-B) and Delaware Route 1, near the Cavaliers Country Club, and close to the center of the BosWash megalopolis.", 
				"https://upload.wikimedia.org/wikipedia/commons/f/f0/Christianamall1.jpg");
		suggestions[1] = new Suggestion("White Clay Creek State Park", 
				"White Clay Creek State Park is a Delaware state park along White Clay Creek on 3,300 acres (1,335 ha) in New Castle County, near Newark, Delaware in the United States. North of the park is Pennsylvania's White Clay Creek Preserve, and the two are operated as bi-state parks to jointly protect the creek, which is federally protected as part of the National Park Service's National Wild and Scenic Rivers System.[1] White Clay Creek State Park offers 30 miles (48 km) of nature and fitness trails which are open to hiking and mountain biking through a number of seasonal day-use fee parking lots. The park also preserves a number of historic structures and operates a nature center. It is part of the Northeastern coastal forests ecoregion.", 
				"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/White_Clay_Creek_State_Park_-_Bryan%27s_Field_trailhead.jpg/800px-White_Clay_Creek_State_Park_-_Bryan%27s_Field_trailhead.jpg");
		suggestions[2] = new Suggestion("University of Delaware",
				"The University of Delaware (colloquially 'UD') is the largest university in Delaware. The main campus is in Newark, with satellite campuses in Dover, Wilmington, Lewes, and Georgetown. It is medium-sized – approximately 18,500 undergraduate and 4,500 graduate students. UD is a privately governed university which receives public funding for being a land-grant, sea-grant, space-grant and urban-grant state-supported research institution.",
				"https://upload.wikimedia.org/wikipedia/commons/8/84/UD_Fall_Time_2010.jpg");
		suggestions[3] = new Suggestion("Newark Reservoir",
				"The Newark Reservoir is located just north of downtown Newark, Delaware. Completed in 2006 the newly constructed Newark Reservoir has a 1.8-mile (2.9 km) paved walking trail. (1.1 miles of the trail is the perimeter.) The site is connected to William M. Redd, Jr. Park to the north and has a wonderful view of the City and surrounding areas.",
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Newark_reservoir.jpg/800px-Newark_reservoir.jpg");
		
		return Response.ok(suggestions).build();
	}
}
