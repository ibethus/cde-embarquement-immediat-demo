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
                "Température extérieure : " + weatherConditions.celsiusTemperature() + "°C (entre " + spaceSuit.temperatureRange.min + " et " + spaceSuit.temperatureRange.max + ")");
    }
}
