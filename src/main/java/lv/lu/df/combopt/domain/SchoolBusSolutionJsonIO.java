package lv.lu.df.combopt.domain;

import ai.timefold.solver.jackson.impl.domain.solution.JacksonSolutionFileIO;

public class SchoolBusSolutionJsonIO extends JacksonSolutionFileIO<SchoolBusSolution> {
    public SchoolBusSolutionJsonIO() {
        super(SchoolBusSolution.class);
    }
}
