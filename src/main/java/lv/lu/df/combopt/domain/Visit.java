package lv.lu.df.combopt.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lv.lu.df.combopt.solver.StudentPickupListener;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@PlanningEntity
@JsonIdentityInfo(scope= Visit.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Visit {
    public enum VisitType {STUDENT, SCHOOL}
    private String name;
    private Integer volume;
    private VisitType visitType;

    private Location location;

    // --------------

    private Integer srvTime; // time needed for picking up / delivering students
    private Integer twStart;
    private Integer twFinish;

    @PiggybackShadowVariable(shadowVariableName = "undeliveredStudents")
    private Integer arrivalTime = null;

    @JsonIgnore
    public Integer getDepartureTime(){
        return this.getArrivalTime() != null ?
                Math.max(this.getArrivalTime(), this.getTwStart()) + this.getSrvTime() :
                null;
    }

    // --------------

    @Override
    public String toString(){
        return this.getName()
                + " arrT=" + SchoolBusSolution.formatTime(this.getArrivalTime())
                + " depT=" + SchoolBusSolution.formatTime(this.getDepartureTime());
    }

    @InverseRelationShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId =  true)
    private Bus bus;

    @PreviousElementShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Visit prev;

    @NextElementShadowVariable(sourceVariableName = "visits")
    @JsonIdentityReference(alwaysAsId = true)
    private Visit next;

    @ShadowVariable(variableListenerClass = StudentPickupListener.class,
            sourceVariableName = "bus")
    @ShadowVariable(variableListenerClass = StudentPickupListener.class,
            sourceVariableName = "prev")
    private Integer undeliveredStudents = 0;

    @PiggybackShadowVariable(shadowVariableName = "undeliveredStudents")
    private Integer deliveredStudents = 0;

    private List<Student> studentList = new ArrayList<>();

}
