package lv.lu.df.combopt.solver;
import ai.timefold.solver.core.api.score.buildin.hardsoft.HardSoftScore;
import ai.timefold.solver.core.api.score.constraint.ConstraintMatch;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lv.lu.df.combopt.domain.Bus;
import lv.lu.df.combopt.domain.Visit;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static lv.lu.df.combopt.Main.LOGGER;

@Setter @Getter
public class SimpleIndictmentObject {
    private String indictedObjectID;
    private HardSoftScore score;
    private int matchCount;
    private List<SimpleConstraintMatch> constraintMatches = new ArrayList<>();

    public SimpleIndictmentObject(Object indictedObject, HardSoftScore score, int matchCount, Set<ConstraintMatch<HardSoftScore>> constraintMatches) {
        this.indictedObjectID = indictedObject instanceof Visit ? ((Visit) indictedObject).getName() : ((Bus) indictedObject).getName();
        this.score = score;
        this.matchCount = matchCount;
        this.constraintMatches = constraintMatches.stream().map(constraintMatch -> {
            return new SimpleConstraintMatch(constraintMatch);
        }).collect(Collectors.toList());
    }
}