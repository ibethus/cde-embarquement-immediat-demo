package org.acme.spacesuites.validation.validators;

import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.SpaceSuiteValidation;
import org.acme.weather.WeatherReportService;

public interface SpaceSuitValidator {

    SpaceSuiteValidation checkSpaceSuit(Spacesuits spacesuits, WeatherReportService.WeatherConditions weaterConditions);
}
