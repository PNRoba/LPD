package lv.lu.df.combopt.solver;

import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.stream.Constraint;
import ai.timefold.solver.core.api.score.stream.ConstraintFactory;
import ai.timefold.solver.core.api.score.stream.ConstraintProvider;
import ai.timefold.solver.core.api.score.stream.Joiners;
import lv.lu.df.combopt.domain.Bus;
import lv.lu.df.combopt.domain.BusStop;

import static ai.timefold.solver.core.api.score.stream.Joiners.equal;

public class StreamCalculator implements ConstraintProvider {
    @Override
    public Constraint[] defineConstraints(ConstraintFactory constraintFactory) {
        return new Constraint[]{
                busUsage(constraintFactory),
                isCapacityConstraintBroken(constraintFactory),
                visit2visit(constraintFactory),
                depot2visit(constraintFactory),
                visit2depot(constraintFactory),
                capacityOverflow(constraintFactory),
                // Time window constraints
                visitOutsideTW(constraintFactory),
                workTimeOverflow(constraintFactory),
                busOutsideTW(constraintFactory),
                returnOutsideTW(constraintFactory),
                // Student constraints
                studentNotArrived(constraintFactory),
                studentPickedAfterPref(constraintFactory),
                studentDeliveredBeforePref(constraintFactory),
                studentDeliveredAfter(constraintFactory),
                studentInCorrectSchool(constraintFactory),
                impossibleStudents(constraintFactory),
                undeliveredStudens(constraintFactory)

        };
    }

    public Constraint busUsage(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
                .filter(bus -> !bus.getBusStops().isEmpty())
                .penalize(HardSoftScore.ONE_SOFT, bus -> (int) Math.round(bus.getCostUsage()*100))
                .asConstraint("busUsage");
    }

    public Constraint isCapacityConstraintBroken(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
                .filter(Bus::isCapacityConstraintBroken)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("isCapacityConstraintBroken");
    }

    public Constraint visit2visit(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getNext() != null)
                .join(Bus.class, Joiners.equal(BusStop::getBus, v->v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, bus) ->
                        (int) Math.round(
                                visit.getLocation().distanceTo(visit.getNext().getLocation())
                                + bus.getCostDistance() * 100) // cost in cents
                )
                .asConstraint("visit2visit");
    }

    public Constraint depot2visit(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getPrev() == null)
                .join(Bus.class, equal(BusStop::getBus, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, bus) ->
                        (int) Math.round(bus.getDepot().distanceTo(visit.getLocation())
                                * bus.getCostDistance() * 100) // cost in cents
                )
                .asConstraint("depot2visit");
    }

    public Constraint visit2depot(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getNext() == null)
                .join(Bus.class, equal(BusStop::getBus, v -> v))
                .penalize(HardSoftScore.ONE_SOFT, (visit, bus) ->
                        (int) Math.round(visit.getLocation().distanceTo(bus.getDepot())
                                * bus.getCostDistance() * 100)
                )
                .asConstraint("visit2depot");
    }

    public Constraint capacityOverflow(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .join(Bus.class, equal(BusStop::getBus, v -> v))
                .filter((visit, bus) -> visit.getUndeliveredStudents() > bus.getCapacity())
                .penalize(HardSoftScore.ONE_HARD, (vi, ve) -> 100)
                .asConstraint("capacityOverflow");
    }


    // -- TIME CONSTRAINTS:

    public Constraint visitOutsideTW(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getDepartureTime() != null &&  visit.getDepartureTime() > visit.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("visitOutsideTW");
    }

    public Constraint workTimeOverflow(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
                .filter(bus -> !bus.getBusStops().isEmpty())
                .join(BusStop.class, Joiners.equal(v->v, BusStop::getBus))
                .filter((bus, last)->last.getNext() == null)
                .filter((bus, last) -> last.getDepartureTime() + last.getLocation().timeTo(bus.getDepot()) + bus.getSrvFTime() -
                        bus.getTwStart() > bus.getMaxWorkTime())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("workTimeOverflow");
    }

    public Constraint busOutsideTW(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(BusStop.class)
                .join(Bus.class, equal(BusStop::getBus, v->v))
                .filter((visit, bus) -> visit.getDepartureTime() > bus.getTwFinish())
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("busOutsideTW");
    }

    public Constraint returnOutsideTW(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
                .filter(bus -> !bus.getBusStops().isEmpty())
                .join(BusStop.class, Joiners.equal(v->v, BusStop::getBus))
                .filter((bus, last) -> last.getNext() == null)
                .filter(((bus, last) -> last.getDepartureTime() +
                        last.getLocation().timeTo(bus.getDepot()) +
                        bus.getSrvFTime() > bus.getTwFinish()))
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("returnOutsideTW");
    }

    // if the students are sent to the correct school
    // studentNotArrivedYet,
    // studentPickedAfterPrefTime,
    // studentDeliveredBeforePrefTime,
    // studentDeliveredAfterTime
    public Constraint studentNotArrived(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
//                .groupBy(Bus::studentNotArrivedYet, count())
//                .penalize(HardSoftScore.ONE_HARD, (b, count) -> 1)
                .filter(bus -> bus.studentNotArrivedYet() > 0)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("studentNotArrived");
    }

    public Constraint studentPickedAfterPref(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
//                .groupBy(Bus::studentPickedAfterPrefTime, count())
//                .penalize(HardSoftScore.ONE_SOFT, (bus, count) -> 10)
                .filter(bus -> bus.studentPickedAfterPrefTime() > 0)
                .penalize(HardSoftScore.ONE_SOFT, b->20)
                .asConstraint("studentPickedAfterPref");
    }

    public Constraint studentDeliveredBeforePref(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
//                .groupBy(Bus::studentDeliveredBeforePrefTime, count())
//                .penalize(HardSoftScore.ONE_SOFT, (bus, count) -> 10)
                .filter(bus -> bus.studentDeliveredBeforePrefTime() > 0)
                .penalize(HardSoftScore.ONE_SOFT, b->20)
                .asConstraint("studentDeliveredBeforePref");
    }

    public Constraint studentDeliveredAfter(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
//                .groupBy(Bus::studentDeliveredAfterTime, count())
//                .penalize(HardSoftScore.ONE_HARD, (bus, count) -> 1)
                .filter(bus -> bus.studentNotArrivedYet() > 0)
                .penalize(HardSoftScore.ONE_HARD)
                .asConstraint("studentDeliveredAfter");
    }

    public Constraint studentInCorrectSchool(ConstraintFactory constraintFactory){
        return constraintFactory
                .forEach(Bus.class)
                .filter(bus -> bus.correctSchool())
                .penalize(HardSoftScore.ONE_HARD, v->10)
                .asConstraint("studentInCorrectSchool");
    }

    public Constraint impossibleStudents(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getUndeliveredStudents() < 0)
                .penalize(HardSoftScore.ONE_HARD, v -> 100)
                .asConstraint("impossibleStudents");
    }

    public Constraint undeliveredStudens(ConstraintFactory constraintFactory) {
        return constraintFactory
                .forEach(BusStop.class)
                .filter(visit -> visit.getNext() == null && visit.getUndeliveredStudents() > 0)
                .penalize(HardSoftScore.ONE_HARD, v -> 10)
                .asConstraint("undeliveredStudens");
    }

}
