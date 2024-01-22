package lv.lu.df.combopt.domain;
import ai.timefold.solver.core.api.domain.solution.PlanningEntityCollectionProperty;
import ai.timefold.solver.core.api.domain.solution.PlanningScore;
import ai.timefold.solver.core.api.domain.solution.PlanningSolution;
import ai.timefold.solver.core.api.domain.solution.ProblemFactCollectionProperty;
import ai.timefold.solver.core.api.domain.valuerange.ValueRangeProvider;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@PlanningSolution
@Getter @Setter @NoArgsConstructor
public class SchoolBusSolution {

    private static final Logger LOGGER = LoggerFactory.getLogger(SchoolBusSolution.class);

    private static final Integer HOUR = 3600;
    private static final Integer TIME8AM = 8*HOUR;

    private String solutionId;
    @PlanningScore
    private HardSoftScore score;

    @PlanningEntityCollectionProperty // objects that the solver manipulates to find the optimal solution
    private List<Bus> busList = new ArrayList<>();

    @ProblemFactCollectionProperty
    @ValueRangeProvider
    private List<BusStop> busStopList = new ArrayList<>();

    private List<BusStop> schoolList = new ArrayList<>();

    @ProblemFactCollectionProperty
    private List<Location> locationList = new ArrayList<>();

    public static String formatTime(Integer arrivalTime) {
        if (arrivalTime != null) {
            long HH = arrivalTime / 3600;
            long MM = (arrivalTime % 3600) / 60;
            long SS = arrivalTime / 60;
            return String.format("%02d:%02d:%02d", HH, MM, SS);
        } else {
            return "null";
        }
    }


    public void print() {
        this.getBusList().forEach(bus -> {
            LOGGER.info(bus.getName() + "("+ bus.getCapacity() +")");
            bus.getBusStops().forEach(visit -> {
                LOGGER.info("     " + visit.getName() + " "
                        + visit.getBusStopType() + " (" + visit.getVolume() + ")  "
                        + visit.getBus().getName() + " (" + visit.getBus().getCapacity() + ")  "
                        + " und=" + visit.getUndeliveredStudents()
                        + " del=" + visit.getDeliveredStudents()
                        + " arrT=" + formatTime(visit.getArrivalTime())
                        + " depT=" + formatTime(visit.getDepartureTime())
                        + " Stud=" + visit.getStudentList().size()
                );
            });
        });
    }

    public void printStudents() {
        this.getBusStopList().forEach(visit -> {
            LOGGER.info(
                    " Type=" + visit.getBusStopType() +
                    " Students=" + visit.getStudentList()
            );
        });
    }

    public static SchoolBusSolution generateData(){
        SchoolBusSolution problem = new SchoolBusSolution();
        problem.setSolutionId("P1");

        Bus b1 = new Bus();
        b1.setName("AAA");
        b1.setCapacity(10);

        b1.setTwStart(TIME8AM);
        b1.setTwFinish(TIME8AM + 8 * HOUR);
        b1.setSrvSTime(900);
        b1.setSrvFTime(900);
        b1.setMaxWorkTime(HOUR*10);

        Location depotLoc = new Location(0.0, 0.0);
        b1.setDepot(depotLoc);

        b1.setCostDistance(0.1);
        b1.setCostWorkTime(7.0);
        b1.setCostUsage(30.0);

        Bus b2 = new Bus();
        b2.setName("BBB");
        b2.setCapacity(10);

        b2.setTwStart(TIME8AM);
        b2.setTwFinish(TIME8AM + 8 * HOUR);
        b2.setSrvSTime(900);
        b2.setSrvFTime(900);
        b2.setMaxWorkTime(HOUR*10);

        b2.setDepot(depotLoc);

        b2.setCostDistance(0.1);
        b2.setCostWorkTime(5.0);
        b2.setCostUsage(25.0);



        BusStop a1 = new BusStop();
        a1.setName("Studenti1");
        a1.setBusStopType(BusStop.BusStopType.STUDENT);
        a1.setVolume(6);

        Location a1Loc = new Location(0.0, 4.0);
        a1.setLocation(a1Loc);
        a1.setSrvTime(600);
        a1.setTwStart(TIME8AM);
        a1.setTwFinish(TIME8AM + 12 * HOUR);


        BusStop a2 = new BusStop();
        a2.setName("Studenti2");
        a2.setBusStopType(BusStop.BusStopType.STUDENT);
        a2.setVolume(4);
        Location a2Loc = new Location(4.0, 0.0);
        a2.setLocation(a2Loc);
        a2.setSrvTime(600);
        a2.setTwStart(TIME8AM);
        a2.setTwFinish(TIME8AM + 12 * HOUR);

        BusStop a3 = new BusStop();
        a3.setName("Studenti3");
        a3.setBusStopType(BusStop.BusStopType.STUDENT);
        a3.setVolume(10);
        Location a3Loc = new Location(8.0, 0.0);
        a3.setLocation(a3Loc);
        a3.setSrvTime(600);
        a3.setTwStart(TIME8AM);
        a3.setTwFinish(TIME8AM + 12 * HOUR);

        BusStop a4 = new BusStop();
        a4.setName("Skola1");
        a4.setBusStopType(BusStop.BusStopType.SCHOOL);
        a4.setVolume(20);
        Location a4Loc = new Location(4.0, 4.0);
        a4.setLocation(a4Loc);
        a4.setSrvTime(900);
        a4.setTwStart(TIME8AM);
        a4.setTwFinish(TIME8AM + 12 * HOUR);

        BusStop a5 = new BusStop();
        a5.setName("Skola2");
        a5.setBusStopType(BusStop.BusStopType.SCHOOL);
        a5.setVolume(20);
        Location a5Loc = new Location(5.0, 5.0);
        a5.setLocation(a5Loc);
        a5.setSrvTime(900);
        a5.setTwStart(TIME8AM);
        a5.setTwFinish(TIME8AM + 12 * HOUR);

        problem.getBusList().addAll(List.of(b1, b2));
        problem.getLocationList().addAll(List.of(a1Loc, a2Loc, a3Loc, a4Loc, a5Loc));
        problem.getBusStopList().addAll(List.of(a1, a2, a3, a4, a5));

        return problem;
    }

    public static int problemId = 0;

    private static Integer getProblemId() {
        problemId++;
        return problemId;
    }

    public static SchoolBusSolution generateData(int scale){
        SchoolBusSolution problem = new SchoolBusSolution();
        problem.setSolutionId(SchoolBusSolution.getProblemId().toString());

        Random random = new Random();
        // Bus generator
        // for one Bus ~15 stops + 1 depot stop
        for (int i = 1; i <=scale / 15+1; i++){
            Bus b1 = new Bus();
            b1.setName("AAA"+i);
            b1.setCapacity(499+random.nextInt(100)-50);

            b1.setTwStart(TIME8AM);
            b1.setTwFinish(TIME8AM + 8 * HOUR);
            b1.setSrvSTime(900);
            b1.setSrvFTime(900);
            b1.setMaxWorkTime(HOUR*8);

            Location depotLoc = new Location(random.nextDouble(100), random.nextDouble(100));
            b1.setDepot(depotLoc);

            b1.setCostDistance(0.1);
            b1.setCostWorkTime(7.0);
            b1.setCostUsage(30.0);

            problem.getBusList().add(b1);
            problem.getLocationList().add(depotLoc);
        }
        for (int i = 1; i <=scale; i++){
            BusStop a1 = new BusStop();
            a1.setName("Studenti"+i);
            a1.setBusStopType(BusStop.BusStopType.STUDENT);
//            a1.setVolume(random.nextInt(50));

            Location a1Loc = new Location(random.nextDouble(100), random.nextDouble(100));
            a1.setLocation(a1Loc);
//            a1.setSrvTime(600);
            a1.setTwStart(TIME8AM + random.nextInt(HOUR*2));
            a1.setTwFinish(TIME8AM + 8 * HOUR - random.nextInt(HOUR*2));

            problem.getBusStopList().add(a1);
            problem.getLocationList().add(a1Loc);
        }

        for (int i = 1; i <=scale / 50 + 1; i++){
            Location skolaLoc = new Location(random.nextDouble(100), random.nextDouble(100));
            problem.getLocationList().add(skolaLoc);
            for(int j = 1; j <= 3; j++){
                BusStop a1 = new BusStop();
                a1.setName("Skola"+i+ "-"+j);
                a1.setBusStopType(BusStop.BusStopType.SCHOOL);
                a1.setVolume(1000);

                a1.setLocation(skolaLoc);
                a1.setSrvTime(900);
                a1.setTwStart(TIME8AM -2*HOUR);
                a1.setTwFinish(TIME8AM + 16*HOUR);

                problem.getSchoolList().add(a1);
                problem.getBusStopList().add(a1);
            }
        }

        // student list
        for (BusStop busStop : problem.getBusStopList()){
            if(busStop.getBusStopType() == BusStop.BusStopType.STUDENT){
                for (int j = 1; j <=random.nextInt(1,30); j++){
                    Student s1 = new Student();
                    s1.setName("st-"+ busStop.getName()+"-"+j);
                    int rand = random.nextInt(problem.getSchoolList().size());
                    String[] str = problem.getSchoolList().get(rand).getName().split("-");
                    s1.setSchool(str[0]);
                    // waitStart, maxWait, firstLectureTime, prefTimeLength
                    s1.setWaitStart(7*HOUR-(random.nextInt(20)*60));
                    s1.setMaxWait(random.nextInt(5,20)*60);
                    s1.setFirstLectureTime(random.nextInt(8,9)*HOUR+random.nextInt(0,1)*1800);
                    s1.setPrefTimeLength(random.nextInt(10,30)*60);
                    // problem.getSchoolList().get(rand).getStudentList().add(s1);
                    busStop.getStudentList().add(s1);
                }
                busStop.setVolume(busStop.getStudentList().size());
                busStop.setSrvTime(60* busStop.getStudentList().size());
            }
        }

        return problem;
    }
}
