package org.acme.spacesuites.validation.validators;

import jakarta.enterprise.context.ApplicationScoped;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

@ApplicationScoped
public class SpaceSuitTemperatureValidator implements SpaceSuitValidator {

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.temperatureRange.min <= weatherConditions.celsiusTemperature() && spaceSuit.temperatureRange.max >= weatherConditions.celsiusTemperature(),
                "External temparature is " + weatherConditions.celsiusTemperature() + "°C (between " + spaceSuit.temperatureRange.min + " and " + spaceSuit.temperatureRange.max + ")");
    }
}
