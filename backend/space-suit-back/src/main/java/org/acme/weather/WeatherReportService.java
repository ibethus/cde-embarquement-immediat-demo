package org.acme.weather;

import io.quarkus.rest.client.reactive.ClientBasicAuth;
import jakarta.ws.rs.PathParam;
import org.acme.common.Coordinates;
import org.eclipse.microprofile.rest.client.inject.RegisterRestClient;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

import java.time.Instant;
import java.util.List;

@RegisterRestClient
@ClientBasicAuth(username = "${service.weather-report.username}", password = "${service.weather-report.password}")
public interface WeatherReportService {

    @GET
    @Path("/planets/{planetName}/weather")
    WeatherConditions getWeatherReport(@PathParam("planetName") String planetName, @QueryParam("latitude") double latitude, @QueryParam("longitude") double longitude);

    record WeatherConditions(String planetName,
                             Coordinates coordinates,
                             double celsiusTemperature,
                             double barPressure,
                             double kmhWindSpeed,
                             Atmosphere atmosphere,
                             Instant timestamp) {
    }

    record Atmosphere(List<AtmosphereComposition> composition, double density) {
    }

    record AtmosphereComposition(String element, double percentage) {
    }
}
