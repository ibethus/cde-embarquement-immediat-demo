package org.acme.spacesuites.validation;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.acme.spacesuites.Spacesuits;
import org.acme.weather.WeatherReportService;
import org.eclipse.microprofile.rest.client.inject.RestClient;

@ApplicationScoped
public class SpaceSuitsValidationService {

    @Inject
    @RestClient
    WeatherReportService weatherReportService;

    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, String planetName, double latitude, double longitude) {
        WeatherReportService.WeatherConditions weatherConditions = weatherReportService.getWeatherReport(planetName, latitude, longitude);
        return new SpaceSuiteValidation(spaceSuit.temperatureRange.min <= weatherConditions.celsiusTemperature() && spaceSuit.temperatureRange.max >= weatherConditions.celsiusTemperature(),
                "Space suit is not suitable for the weather conditions. External temparature is " + weatherConditions.celsiusTemperature() + "°C and suit temparature range is " + spaceSuit.temperatureRange.min + "°C to " + spaceSuit.temperatureRange.max + "°C");
    }
}
