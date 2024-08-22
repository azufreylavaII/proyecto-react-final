import { Fragment } from "react";
import TitleStudyPlan from "../../components/Careers/TitleStudyPlan";
import TextStudyPlan from "../../components/Careers/TextStudyPlan";
import SemestersStudyPlan from "../../components/Careers/SemestersStudyPlan";

function StudyPlanPage() {

    return(
        <>
            <div>
                <TitleStudyPlan />
                <TextStudyPlan />
                <SemestersStudyPlan />
            </div>
        </>
    );
}

export default StudyPlanPage;