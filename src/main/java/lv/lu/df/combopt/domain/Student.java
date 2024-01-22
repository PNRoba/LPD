package lv.lu.df.combopt.domain;

import ai.timefold.solver.core.api.domain.entity.PlanningEntity;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@PlanningEntity
@JsonIdentityInfo(scope= Student.class,
        property = "name",
        generator = ObjectIdGenerators.PropertyGenerator.class)
public class Student {
    private String name;

    private String school;

    private int waitStart; // time when student starts waiting for bus
    private int maxWait; // max wait time

    private int firstLectureTime; // when student needs to get to school by
    private int prefTimeLength; // prefered time before firstLectureTime perfect for the student

    // example:
    // firstLectureTime = 8:00
    // prefTimeLength = 5 min
    // if before 7:55: soft score++
    // if 7:55-8:00: none
    // if after 8:00: hard score++
}
