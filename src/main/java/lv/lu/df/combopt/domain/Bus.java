package lv.lu.df.combopt.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import ai.timefold.solver.core.api.domain.variable.PlanningListVariable;

import com.fasterxml.jackson.annotation.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@PlanningEntity
@Getter @Setter @NoArgsConstructor
@JsonIdentityInfo(scope= Bus.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Bus {

    public enum VisitType {STUDENT, SCHOOL}

    private String name;
    private int capacity;
    private VisitType visitType;

    @PlanningListVariable
    @JsonIdentityReference
    private List<Visit> visits = new ArrayList<>();
    private Location depot;

    // --------------

    private Integer twStart; // time window start
    private Integer twFinish; // time window finish

    private Integer srvSTime; // service Start time
    private Integer srvFTime; // service Finish time

    private Integer maxWorkTime;

    private Double costWorkTime; // driver pay
    private Double costDistance; // gas cost
    private Double costUsage; // fixed cost of car?

    // --------------

    @JsonIgnore
    public Double getTotalDistance() {
        Double totalDistance = 0.0;
        Location prevLoc = this.getDepot();
        for (Visit visit: this.getVisits()) {
            totalDistance = totalDistance +
                    prevLoc.distanceTo(visit.getLocation());
            prevLoc = visit.getLocation();
        }
        totalDistance = totalDistance +
                prevLoc.distanceTo(this.getDepot());
        return totalDistance;
    }

    @Override
    public String toString(){
        return this.getName();
    }

    @JsonIgnore
    public Boolean isCapacityConstraintBroken() {
        int currentCapacity = 0;
        int pickedUpStudents = 0;

        for (Visit visit : this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    int remainingCapacity = this.getCapacity() - currentCapacity;
                    if (remainingCapacity <= 0) {
                        // Bus is already full, no more students can be picked up
                        return true; // Capacity constraint broken
                    }

                    // Check if picking up the student exceeds the remaining capacity
                    if (visit.getVolume() > remainingCapacity) {
                        // Pick up enough students to fill the remaining capacity
                        pickedUpStudents += remainingCapacity;
                        currentCapacity += remainingCapacity;
                    } else {
                        // Pick up all students in this visit
                        currentCapacity += visit.getVolume();
                        pickedUpStudents += visit.getVolume();
                    }
                }
                case SCHOOL -> {
                    // Drop off students at school
                    if (pickedUpStudents > 0) {
                        // Students are dropped off, reset pickedUpStudents
                        pickedUpStudents = 0;
                    }
                }
                default -> throw new IllegalStateException("Unexpected Value:" + visit.getVisitType());
            }
        }

        return false; // Capacity constraint not broken
    }

    @JsonIgnore
    public Integer studentNotArrivedYet(){
        List<Student> pickedBefore = new ArrayList<>();
        for (Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    for (Student student: visit.getStudentList()){
                        if(student.getWaitStart()>=visit.getDepartureTime()){
                            pickedBefore.add(student);
                        }
                    }
                }
                case SCHOOL -> {

                }
            }
        }
        return pickedBefore.size();
    }

    @JsonIgnore
    public Integer studentPickedAfterPrefTime(){
        int pickedAfter = 0;
        for (Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    for (Student student: visit.getStudentList()){
                        if(student.getWaitStart()+student.getMaxWait()<visit.getDepartureTime()){
                            pickedAfter++;
                        }
                    }
                }
                case SCHOOL -> {

                }
            }
        }
        return pickedAfter;
    }

    @JsonIgnore
    public Integer studentDeliveredBeforePrefTime(){
        int delBeforePrefTime = 0;
        List<Student> studentList = new ArrayList<>();
        for (Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    studentList.addAll(visit.getStudentList());
                }
                case SCHOOL -> {
                    for (Student student: studentList){
                        if(student.getFirstLectureTime()-student.getPrefTimeLength() < visit.getArrivalTime()){
                            delBeforePrefTime++;
                        }
                    }
                }
            }
        }
        return delBeforePrefTime;
    }

    @JsonIgnore
    public Integer studentDeliveredAfterTime(){
        int delAfter = 0;
        List<Student> studentList = new ArrayList<>();
        for (Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    studentList.addAll(visit.getStudentList());
                }
                case SCHOOL -> {
                    for (Student student: studentList){
                        if(student.getFirstLectureTime() > visit.getArrivalTime()){
                            delAfter++;
                        }
                    }
                }
            }
        }
        return delAfter;
    }

    @JsonIgnore
    public Boolean correctSchool(){
        int corr = 0;
        List<Student> studentList = new ArrayList<>();
        for (Visit visit: this.getVisits()) {
            switch (visit.getVisitType()) {
                case STUDENT -> {
                    studentList.addAll(visit.getStudentList());
                }
                case SCHOOL -> {
                    for (Student student: studentList){
                        String[] str = visit.getName().split("-");
                        if(student.getSchool()!=str[0]){
                            corr++;
                        }
                    }
                }
            }
        }
        return false;
    }
}
