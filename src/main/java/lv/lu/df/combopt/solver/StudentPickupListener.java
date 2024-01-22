package lv.lu.df.combopt.solver;

import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import lv.lu.df.combopt.domain.SchoolBusSolution;
import lv.lu.df.combopt.domain.Visit;

public class StudentPickupListener implements VariableListener<SchoolBusSolution, Visit> {

    @Override
    public void beforeVariableChanged(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {
        if(visit.getBus() == null) {
            scoreDirector.beforeVariableChanged(visit, "undeliveredStudents");
            visit.setUndeliveredStudents(0);
            scoreDirector.afterVariableChanged(visit, "undeliveredStudents");
            scoreDirector.beforeVariableChanged(visit, "deliveredStudents");
            visit.setDeliveredStudents(0);
            scoreDirector.afterVariableChanged(visit, "deliveredStudents");
            scoreDirector.beforeVariableChanged(visit, "arrivalTime");
            visit.setArrivalTime(null);
            scoreDirector.afterVariableChanged(visit, "arrivalTime");

        } else {
            Integer undelivered = visit.getPrev() != null ? visit.getPrev().getUndeliveredStudents() : 0;
            Integer delivered = visit.getPrev() != null ? visit.getPrev().getDeliveredStudents() : 0;
            Integer arrival = visit.getPrev() != null && visit.getPrev().getArrivalTime() != null ?
                    visit.getPrev().getDepartureTime() + visit.getPrev().getLocation().timeTo(visit.getLocation()) :
                    visit.getBus().getTwStart() + visit.getSrvTime() +
                            visit.getBus().getDepot().timeTo(visit.getLocation());


            Visit shadowVisit = visit;
            while (shadowVisit != null) {
                switch (shadowVisit.getVisitType()){
                    case STUDENT -> {
                        undelivered = undelivered + shadowVisit.getVolume();
                    }
                    case SCHOOL -> {
                        delivered = delivered + undelivered;
                        undelivered = 0;
                    }
                }
                scoreDirector.beforeVariableChanged(shadowVisit, "undeliveredStudents");
                shadowVisit.setUndeliveredStudents(undelivered);
                scoreDirector.afterVariableChanged(shadowVisit, "undeliveredStudents");
                scoreDirector.beforeVariableChanged(shadowVisit, "deliveredStudents");
                shadowVisit.setDeliveredStudents(delivered);
                scoreDirector.afterVariableChanged(shadowVisit, "deliveredStudents");

                scoreDirector.beforeVariableChanged(shadowVisit, "arrivalTime");
                shadowVisit.setArrivalTime(arrival);
                scoreDirector.afterVariableChanged(shadowVisit, "arrivalTime");


                shadowVisit = shadowVisit.getNext();

                if (shadowVisit != null) {
                    arrival = shadowVisit.getPrev().getDepartureTime() +
                            shadowVisit.getPrev().getLocation().timeTo(shadowVisit.getLocation());
                }
            }
        }
    }

    @Override
    public void beforeEntityAdded(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityAdded(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {

    }

    @Override
    public void afterEntityRemoved(ScoreDirector<SchoolBusSolution> scoreDirector, Visit visit) {

    }
}
