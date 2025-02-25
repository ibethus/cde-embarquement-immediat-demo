package org.acme.spacesuites.validation.validators;

import jakarta.enterprise.context.ApplicationScoped;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

@ApplicationScoped
public class SpaceSuitBatteryValidator implements SpaceSuitValidator {

    private static final double MIN_BATTERY_LEVEL = 33;

    @Override
    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, WeatherReportService.WeatherConditions weatherConditions) {
        return new SpaceSuiteValidation(spaceSuit.batteryLevel > MIN_BATTERY_LEVEL,
                "Niveau de batterie : " + spaceSuit.batteryLevel + " % (> " + MIN_BATTERY_LEVEL + ")");
    }
}
