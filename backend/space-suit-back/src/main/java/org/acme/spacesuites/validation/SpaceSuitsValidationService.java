package org.acme.spacesuites.validation;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.inject.Instance;
import jakarta.inject.Inject;
import org.acme.spacesuites.Spacesuits;
import org.acme.spacesuites.validation.validators.SpaceSuitValidator;
import org.acme.weather.WeatherReportService;
import org.eclipse.microprofile.rest.client.inject.RestClient;

import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class SpaceSuitsValidationService {

    @Inject
    @RestClient
    WeatherReportService weatherReportService;

    @Inject
    Instance<SpaceSuitValidator> spaceSuitValidators;

    public SpaceSuiteValidation checkSpaceSuit(Spacesuits spaceSuit, String planetName, double latitude, double longitude) {
        WeatherReportService.WeatherConditions weatherConditions = weatherReportService.getWeatherReport(planetName, latitude, longitude);

        List<SpaceSuiteValidation> spaceSuitsValidations = spaceSuitValidators.stream()
                .map(validator -> validator.checkSpaceSuit(spaceSuit, weatherConditions))
                .toList();

        boolean isAllValidationsValid = spaceSuitsValidations.stream().allMatch(SpaceSuiteValidation::isValid);

        var messages = spaceSuitsValidations.stream()
                .filter(validation -> isAllValidationsValid || !validation.isValid())
                .map(SpaceSuiteValidation::message)
                .collect(Collectors.joining(System.lineSeparator()));
        return new SpaceSuiteValidation(isAllValidationsValid, messages);
    }
}
