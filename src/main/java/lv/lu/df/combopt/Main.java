package lv.lu.df.combopt;

import ai.timefold.solver.core.api.score.ScoreExplanation;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.solver.SolutionManager;
import ai.timefold.solver.core.api.solver.Solver;
import ai.timefold.solver.core.api.solver.SolverFactory;
import ai.timefold.solver.core.config.solver.EnvironmentMode;
import ai.timefold.solver.core.config.solver.SolverConfig;
import ai.timefold.solver.core.config.solver.termination.TerminationConfig;
import lv.lu.df.combopt.domain.Bus;
import lv.lu.df.combopt.domain.BusStop;
import lv.lu.df.combopt.domain.SchoolBusSolution;
import lv.lu.df.combopt.solver.StreamCalculator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {

    public static final Logger LOGGER = LoggerFactory.getLogger(Main.class);
    public static void main(String[] args) {
        System.out.println("Hello world!");
        LOGGER.info("Hello world from Logger");
        LOGGER.debug("Hello world from Logger 2");


        SchoolBusSolution problem = SchoolBusSolution.generateData(50);
        problem.print();
        problem.printStudents();

        SolverFactory<SchoolBusSolution> solverFactoryFromXML = SolverFactory
                .createFromXmlResource("SolverConfig.xml");

        SolverFactory<SchoolBusSolution> solverFactory = SolverFactory.create(
                new SolverConfig()
                        .withSolutionClass(SchoolBusSolution.class)
                        .withEntityClasses(Bus.class, BusStop.class)
                        //.withEasyScoreCalculatorClass(ScoreCalculator.class)
                        .withConstraintProviderClass(StreamCalculator.class)
                        .withTerminationConfig(new TerminationConfig()
                                .withSecondsSpentLimit(10L)
                        )
                        .withEnvironmentMode(EnvironmentMode.FULL_ASSERT)
        );

        Solver<SchoolBusSolution> solver = solverFactoryFromXML.buildSolver();
        SchoolBusSolution solution = solver.solve(problem);

        SolutionManager<SchoolBusSolution, HardSoftScore> solutionManager = SolutionManager.create(solverFactory);
        ScoreExplanation<SchoolBusSolution, HardSoftScore> scoreScoreExplanation = solutionManager.explain(solution);
        LOGGER.info(scoreScoreExplanation.getSummary());
        solution.print();
//        solution.printStudents();
    }
}