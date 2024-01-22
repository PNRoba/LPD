package lv.lu.df.combopt;

import ai.timefold.solver.test.api.score.stream.ConstraintVerifier;
import lv.lu.df.combopt.domain.Bus;
import lv.lu.df.combopt.domain.Location;
import lv.lu.df.combopt.domain.SchoolBusSolution;
import lv.lu.df.combopt.domain.Visit;
import lv.lu.df.combopt.solver.StreamCalculator;
import org.junit.jupiter.api.Test;

import java.util.List;

public class ConstraintTest {
    Bus BUS = new Bus();
    Visit VISIT1 = new Visit();
    Visit VISIT2 = new Visit();
    Location DEPOT = new Location(0.0,0.0);
    Location locVisit1 = new Location(4.0, 0.0);
    Location locVisit2 = new Location(4.0, 4.0);
    public ConstraintTest() {
        VISIT1.setBus(BUS);
        VISIT1.setLocation(locVisit1);
        VISIT2.setBus(BUS);
        VISIT2.setLocation(locVisit2);

        VISIT1.setNext(VISIT2);
        VISIT2.setPrev(VISIT1);
        BUS.getVisits().addAll(List.of(VISIT1, VISIT2));
        BUS.setDepot(DEPOT);
        BUS.setCostDistance(1.0);
    }
    ConstraintVerifier<StreamCalculator, SchoolBusSolution> constraintVerifier = ConstraintVerifier.build(
            new StreamCalculator(), SchoolBusSolution.class, Bus.class, Visit.class);
    @Test
    void distanceTest1() {
        constraintVerifier.verifyThat(StreamCalculator::depot2visit)
                .given(BUS, VISIT1)
                .penalizesBy(400);
    }
    @Test
    void distanceTest2() {
        constraintVerifier.verifyThat(StreamCalculator::visit2visit)
                .given(VISIT2, VISIT1, BUS)
                .penalizesBy(400);
    }
}
