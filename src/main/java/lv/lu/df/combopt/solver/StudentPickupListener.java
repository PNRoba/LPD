package lv.lu.df.combopt.solver;

import ai.timefold.solver.core.api.domain.variable.VariableListener;
import ai.timefold.solver.core.api.score.director.ScoreDirector;
import lv.lu.df.combopt.domain.BusStop;
import lv.lu.df.combopt.domain.SchoolBusSolution;

public class StudentPickupListener implements VariableListener<SchoolBusSolution, BusStop> {

    @Override
    public void beforeVariableChanged(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {

    }

    @Override
    public void afterVariableChanged(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {
        if(busStop.getBus() == null) {
            scoreDirector.beforeVariableChanged(busStop, "undeliveredStudents");
            busStop.setUndeliveredStudents(0);
            scoreDirector.afterVariableChanged(busStop, "undeliveredStudents");
            scoreDirector.beforeVariableChanged(busStop, "deliveredStudents");
            busStop.setDeliveredStudents(0);
            scoreDirector.afterVariableChanged(busStop, "deliveredStudents");
            scoreDirector.beforeVariableChanged(busStop, "arrivalTime");
            busStop.setArrivalTime(null);
            scoreDirector.afterVariableChanged(busStop, "arrivalTime");

        } else {
            Integer undelivered = busStop.getPrev() != null ? busStop.getPrev().getUndeliveredStudents() : 0;
            Integer delivered = busStop.getPrev() != null ? busStop.getPrev().getDeliveredStudents() : 0;
            Integer arrival = busStop.getPrev() != null && busStop.getPrev().getArrivalTime() != null ?
                    busStop.getPrev().getDepartureTime() + busStop.getPrev().getLocation().timeTo(busStop.getLocation()) :
                    busStop.getBus().getTwStart() + busStop.getSrvTime() +
                            busStop.getBus().getDepot().timeTo(busStop.getLocation());


            BusStop shadowBusStop = busStop;
            while (shadowBusStop != null) {
                switch (shadowBusStop.getBusStopType()){
                    case STUDENT -> {
                        undelivered = undelivered + shadowBusStop.getVolume();
                    }
                    case SCHOOL -> {
                        delivered = delivered + undelivered;
                        undelivered = 0;
                    }
                }
                scoreDirector.beforeVariableChanged(shadowBusStop, "undeliveredStudents");
                shadowBusStop.setUndeliveredStudents(undelivered);
                scoreDirector.afterVariableChanged(shadowBusStop, "undeliveredStudents");
                scoreDirector.beforeVariableChanged(shadowBusStop, "deliveredStudents");
                shadowBusStop.setDeliveredStudents(delivered);
                scoreDirector.afterVariableChanged(shadowBusStop, "deliveredStudents");

                scoreDirector.beforeVariableChanged(shadowBusStop, "arrivalTime");
                shadowBusStop.setArrivalTime(arrival);
                scoreDirector.afterVariableChanged(shadowBusStop, "arrivalTime");


                shadowBusStop = shadowBusStop.getNext();

                if (shadowBusStop != null) {
                    arrival = shadowBusStop.getPrev().getDepartureTime() +
                            shadowBusStop.getPrev().getLocation().timeTo(shadowBusStop.getLocation());
                }
            }
        }
    }

    @Override
    public void beforeEntityAdded(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {

    }

    @Override
    public void afterEntityAdded(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {

    }

    @Override
    public void beforeEntityRemoved(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {

    }

    @Override
    public void afterEntityRemoved(ScoreDirector<SchoolBusSolution> scoreDirector, BusStop busStop) {

    }
}
