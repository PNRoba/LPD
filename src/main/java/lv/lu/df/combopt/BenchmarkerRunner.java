package lv.lu.df.combopt;

import ai.timefold.solver.benchmark.api.PlannerBenchmark;
import ai.timefold.solver.benchmark.api.PlannerBenchmarkFactory;
import lv.lu.df.combopt.domain.SchoolBusSolution;
import lv.lu.df.combopt.domain.SchoolBusSolutionJsonIO;

import java.io.File;

public class BenchmarkerRunner {
    public static void main(String[] args){
        PlannerBenchmarkFactory benchmarkFactory = PlannerBenchmarkFactory
                .createFromSolverConfigXmlResource("SolverConfig.xml");
//        SchoolBusSolution problem = SchoolBusSolution.generateData();

        PlannerBenchmarkFactory benchmarkFactoryFromXML = PlannerBenchmarkFactory
                .createFromXmlResource("BenchmarkConfig.xml");

        SchoolBusSolutionJsonIO schoolBusSolutionJsonIO = new SchoolBusSolutionJsonIO();
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(20),
                new File("data/test20.json"));
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(50),
                new File("data/test50.json"));
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(100),
                new File("data/test100.json"));
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(150),
                new File("data/test150.json"));
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(200),
                new File("data/test200.json"));
        schoolBusSolutionJsonIO.write(SchoolBusSolution.generateData(500),
                new File("data/test500.json"));

//
        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark();

//        PlannerBenchmark benchmark = benchmarkFactoryFromXML.buildPlannerBenchmark(
//                SchoolBusSolution.generateData(5),
//                SchoolBusSolution.generateData(10),
//                SchoolBusSolution.generateData(25),
//                SchoolBusSolution.generateData(50),
//                SchoolBusSolution.generateData(100),
//                SchoolBusSolution.generateData(200),
//                SchoolBusSolution.generateData(500)
//        );

        benchmark.benchmarkAndShowReportInBrowser();
    }
}
