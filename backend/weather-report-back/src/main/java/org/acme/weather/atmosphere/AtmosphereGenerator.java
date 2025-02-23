package org.acme.weather.atmosphere;

import jakarta.enterprise.context.ApplicationScoped;

import java.util.*;

@ApplicationScoped
public class AtmosphereGenerator {

    private final Random random = new Random();

    public Atmosphere generateAtmosphere() {
        List<NaturalElements> elements = generateRandomUniqueNaturalElements();
        List<Double> percentages = generateRandomDoublesPercentage(elements.size());
        List<AtmosphereComposition> atmosphereComposition = elements.stream().map(element -> new AtmosphereComposition(element, percentages.get(elements.indexOf(element)))).toList();
        return new Atmosphere(atmosphereComposition, randomDouble(1, 1000));
    }

    private double randomDouble(double min, double max) {
        return Math.round(random.nextDouble(min, max) * 100) / 100D;
    }

    private List<NaturalElements> generateRandomUniqueNaturalElements() {
        List<NaturalElements> allElements = Arrays.asList(NaturalElements.values());
        Collections.shuffle(allElements, random);
        return new ArrayList<>(allElements.subList(0, random.nextInt(2, 6)));
    }

    public List<Double> generateRandomDoublesPercentage(int count) {
        List<Double> randomDoubles = new ArrayList<>();
        double remainingSum = 100;

        for (int i = 0; i < count - 1; i++) {
            double nextDouble = randomDouble(0, remainingSum);
            randomDoubles.add(nextDouble);
            remainingSum -= nextDouble;
        }

        randomDoubles.add(Math.round(remainingSum * 100) / 100D);
        return randomDoubles;
    }
}
