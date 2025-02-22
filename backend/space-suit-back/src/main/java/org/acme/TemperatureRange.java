package org.acme;

import jakarta.persistence.Embeddable;

@Embeddable
public class TemperatureRange {
    public double min;
    public double max;
}
