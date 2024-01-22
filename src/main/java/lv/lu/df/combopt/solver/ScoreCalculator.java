package lv.lu.df.combopt.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.calculator.EasyScoreCalculator;
import lv.lu.df.combopt.domain.Bus;
import lv.lu.df.combopt.domain.SchoolBusSolution;
import lv.lu.df.combopt.domain.Visit;

public class ScoreCalculator implements EasyScoreCalculator<SchoolBusSolution, HardSoftScore> {
    @Override
    public HardSoftScore calculateScore(SchoolBusSolution schoolBusSolution) {
        int hard = 0, soft = 0;

        Double totalDistance = 0.0;
        for (Bus bus: schoolBusSolution.getBusList()) {
            Integer studentsTaken = 0, studentsDelivered = 0;

            for (Visit visit: bus.getVisits()){
                switch (visit.getVisitType()){
                    case STUDENT -> {
                        studentsTaken = studentsTaken + visit.getVolume();
                    }
                    case SCHOOL -> {
//                        studentsDelivered = studentsDelivered + studentsTaken;
//                        studentsTaken = studentsTaken + visit.getVolume();
                    }
                    default -> throw new IllegalStateException("Unexpected Value:" + visit.getVisitType());
                }
                if (studentsTaken > bus.getCapacity()) hard = hard + (studentsTaken - bus.getCapacity());
                if (studentsTaken < 0) hard = hard - studentsTaken;
            }
//            if (studentsTaken > 0) hard = hard + studentsTaken;

            totalDistance = totalDistance +
                    bus.getTotalDistance();
        }
        soft = (int) Math.round(totalDistance * 1000);

        return HardSoftScore.of(- hard, - soft);
    }
}
